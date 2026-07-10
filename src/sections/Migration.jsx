import { useEffect, useMemo, useState } from "react";
import { bodyText, card, cardPadding, cardTitle, mutedText, sectionContainer } from "../styles/uiClasses";

const API_ENDPOINT = "https://j69pro1xkj.execute-api.ap-southeast-2.amazonaws.com/?mode=all";
const REFRESH_COOLDOWN_MS = 60 * 1000;
const MONTH_COLUMNS = ["July", "Aug", "Sept", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const TOTAL_COLUMN = "Total to date";

function toNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value !== "string") return 0;
  const parsed = Number(value.replace(/,/g, "").trim());
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizeTitle(title, fallbackUrl) {
  const base = typeof title === "string" && title.trim() ? title.trim() : fallbackUrl;
  return base
    .replace(/\s*\(opens in a new tab\)/gi, "")
    .replace(/\s*\[PDF[^\]]*\]/gi, "")
    .replace(/\(PDF document - opens in a new tab\)/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function urlDescription(href) {
  if (!href) return "";
  try {
    const parsed = new URL(href);
    return `${parsed.hostname}${parsed.pathname}`;
  } catch {
    return href;
  }
}

function normalizePdfLinks(rawLinks) {
  if (!Array.isArray(rawLinks)) return [];
  return rawLinks
    .map((item) => ({
      title: normalizeTitle(item?.title, item?.url || ""),
      url: typeof item?.url === "string" ? item.url : "",
    }))
    .filter((item) => item.url);
}

function normalizeProgramYears(rawProgramYears) {
  if (!Array.isArray(rawProgramYears)) return [];

  return rawProgramYears
    .map((yearItem) => {
      const rows = Array.isArray(yearItem?.rows)
        ? yearItem.rows.map((row) => ({
            stream: typeof row?.stream === "string" ? row.stream : "Unknown stream",
            visaType: typeof row?.visaType === "string" ? row.visaType : "",
            ...MONTH_COLUMNS.reduce(
              (monthValues, month) => ({
                ...monthValues,
                [month]: toNumber(row?.[month]),
              }),
              {}
            ),
            [TOTAL_COLUMN]: toNumber(row?.[TOTAL_COLUMN]),
          }))
        : [];

      const totals =
        yearItem?.totals && typeof yearItem.totals === "object"
          ? {
              ...MONTH_COLUMNS.reduce(
                (monthValues, month) => ({
                  ...monthValues,
                  [month]: toNumber(yearItem.totals?.[month]),
                }),
                {}
              ),
              [TOTAL_COLUMN]: toNumber(yearItem.totals?.[TOTAL_COLUMN]),
            }
          : null;

      return {
        programYear: typeof yearItem?.programYear === "string" ? yearItem.programYear : "",
        title: typeof yearItem?.title === "string" ? yearItem.title : "",
        rows,
        totals,
      };
    })
    .filter((yearItem) => yearItem.programYear || yearItem.rows.length > 0);
}

function isInvitationRoundDocument(item) {
  const haystack = `${item?.title || ""} ${item?.url || ""}`.toLowerCase();
  return haystack.includes("round") && (haystack.includes("2025") || haystack.includes("2026"));
}

function normalizePayload(rawPayload) {
  if (!rawPayload || typeof rawPayload !== "object") {
    return { months: {}, programYears: [], programYearCount: 0, pdfLinks: [], pdfCount: 0, pdfSourceUrl: "" };
  }

  if (rawPayload.months && typeof rawPayload.months === "object") {
    const programYears = normalizeProgramYears(rawPayload.programYears);

    return {
      months: rawPayload.months,
      programYears,
      programYearCount:
        typeof rawPayload.programYearCount === "number" ? rawPayload.programYearCount : programYears.length,
      pdfLinks: normalizePdfLinks(rawPayload.pdfLinks),
      pdfCount: typeof rawPayload.pdfCount === "number" ? rawPayload.pdfCount : undefined,
      pdfSourceUrl: typeof rawPayload.pdfSourceUrl === "string" ? rawPayload.pdfSourceUrl : "",
    };
  }

  return {
    months: rawPayload,
    programYears: [],
    programYearCount: 0,
    pdfLinks: [],
    pdfCount: 0,
    pdfSourceUrl: "",
  };
}

function getYearTotal(programYear) {
  if (programYear?.totals) return toNumber(programYear.totals[TOTAL_COLUMN]);
  return (programYear?.rows || []).reduce((sum, row) => sum + toNumber(row[TOTAL_COLUMN]), 0);
}

function getActiveMonthCount(programYear) {
  return MONTH_COLUMNS.filter((month) => toNumber(programYear?.totals?.[month]) > 0).length;
}

function getPeakMonth(programYear) {
  return MONTH_COLUMNS.reduce(
    (peak, month) => {
      const value = toNumber(programYear?.totals?.[month]);
      return value > peak.value ? { month, value } : peak;
    },
    { month: "", value: 0 }
  );
}

function summarizeByStream(rows) {
  const streamMap = new Map();

  rows.forEach((row) => {
    const stream = row.stream || "Unknown stream";
    const current = streamMap.get(stream) || { stream, total: 0, subclass190: 0, subclass491: 0 };
    const rowTotal = toNumber(row[TOTAL_COLUMN]);
    current.total += rowTotal;
    if (row.visaType === "190") current.subclass190 += rowTotal;
    if (row.visaType === "491") current.subclass491 += rowTotal;
    streamMap.set(stream, current);
  });

  return Array.from(streamMap.values());
}

function formatNumber(value) {
  return toNumber(value).toLocaleString();
}

function getErrorMessage(error) {
  if (error?.name === "AbortError") return "";
  if (error instanceof TypeError) {
    return "Network request failed. This static frontend can only call the upstream directly, so the upstream endpoint must allow CORS for your site origin.";
  }

  return error?.message || "Unknown error";
}

const Migration = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastRefreshAt, setLastRefreshAt] = useState(0);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const loadData = async ({ force = false, signal } = {}) => {
    if (!force && Date.now() - lastRefreshAt < REFRESH_COOLDOWN_MS) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_ENDPOINT, {
        cache: "no-store",
        signal,
      });

      if (!response.ok) {
        const details = await response.json().catch(() => ({ error: `HTTP ${response.status}` }));
        throw new Error(details?.error || `Request failed: ${response.status}`);
      }

      const payload = await response.json();
      setData(normalizePayload(payload));
      setLastRefreshAt(Date.now());
    } catch (requestError) {
      const message = getErrorMessage(requestError);
      if (message) setError(message);
    } finally {
      if (!signal?.aborted) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    loadData({ force: true, signal: controller.signal });

    return () => controller.abort();
  }, []);

  const monthData = data?.months && typeof data.months === "object" ? data.months : {};
  const monthEntries = Object.entries(monthData).map(([month, value]) => ({
    month,
    value: toNumber(value),
  }));
  const totalInvitations = monthEntries.reduce((sum, entry) => sum + entry.value, 0);
  const programYears = Array.isArray(data?.programYears) ? data.programYears : [];
  const currentProgramYear = programYears[0];
  const programYearCount =
    typeof data?.programYearCount === "number" && Number.isFinite(data.programYearCount)
      ? data.programYearCount
      : programYears.length;
  const allProgramYearTotal = programYears.reduce((sum, yearItem) => sum + getYearTotal(yearItem), 0);
  const currentProgramYearTotal = currentProgramYear ? getYearTotal(currentProgramYear) : totalInvitations;
  const programYearDetails = useMemo(
    () =>
      programYears.map((yearItem) => ({
        ...yearItem,
        total: getYearTotal(yearItem),
        activeMonthCount: getActiveMonthCount(yearItem),
        peakMonth: getPeakMonth(yearItem),
        streamSummary: summarizeByStream(yearItem.rows),
      })),
    [programYears]
  );
  const pdfLinks = normalizePdfLinks(data?.pdfLinks);
  const pdfCount =
    typeof data?.pdfCount === "number" && Number.isFinite(data.pdfCount) ? data.pdfCount : pdfLinks.length;
  const pdfSourceUrl = typeof data?.pdfSourceUrl === "string" ? data.pdfSourceUrl : "";
  const invitationPdfLinks = pdfLinks.filter(isInvitationRoundDocument);
  const otherPdfLinks = pdfLinks.filter((item) => !isInvitationRoundDocument(item));
  const remainingCooldownMs = Math.max(REFRESH_COOLDOWN_MS - (now - lastRefreshAt), 0);
  const cooldownSeconds = Math.ceil(remainingCooldownMs / 1000);
  const canRefresh = !loading && remainingCooldownMs === 0;

  return (
    <section className="padding">
      <div className={`${sectionContainer} max-w-4xl py-6 space-y-6`}>
        {/* Refresh toolbar */}
        <div className="flex items-center justify-between gap-4">
          <p className={bodyText}>
            {canRefresh
              ? "Requests are cached at the edge to reduce load."
              : `Refresh available in ${cooldownSeconds}s.`}
          </p>
          <button
            type="button"
            onClick={() => loadData()}
            disabled={!canRefresh}
            className={`outline_btn ${!canRefresh ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>

        {error ? <div>Error: {error}</div> : null}

        {/* Statistics cards — side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <article className={`${card} ${cardPadding} text-center`}>
            <p className={mutedText}>Current Program Year</p>
            <p className={cardTitle}>{formatNumber(currentProgramYearTotal)}</p>
            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-[#A9ADC1]">
              {currentProgramYear?.programYear || "Current month summary"}
            </p>
          </article>
          <article className={`${card} ${cardPadding} text-center`}>
            <p className={mutedText}>All Years Returned</p>
            <p className={cardTitle}>{formatNumber(allProgramYearTotal || totalInvitations)}</p>
            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-[#A9ADC1]">
              {programYearCount.toLocaleString()} program years
            </p>
          </article>
          <article className={`${card} ${cardPadding} text-center`}>
            <p className={mutedText}>PDF Links Returned</p>
            <p className={cardTitle}>{pdfCount.toLocaleString()}</p>
          </article>
        </div>

        {/* Month invitation card */}
        <div className={`${card} ${cardPadding}`}>
          <h2 className={cardTitle}>Invitation Number By Month</h2>

          {loading && monthEntries.length === 0 ? (
            <div>Loading migration data...</div>
          ) : monthEntries.length === 0 ? (
            <div>No month data returned.</div>
          ) : (
            <ul className="mt-2 space-y-1">
              {monthEntries.map((entry) => (
                <li key={entry.month} className="flex justify-between">
                  <span>{entry.month}</span>
                  <strong>{entry.value.toLocaleString()}</strong>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Program year invitation tables */}
        <div className="space-y-4">
          <div>
            <h2 className={cardTitle}>Program Year Invitation Detail</h2>
            <p className={`${mutedText} mt-1`}>
              Current and historical invitation totals by stream, visa subclass, and invitation month.
            </p>
          </div>

          {loading && programYears.length === 0 ? (
            <div className={`${card} ${cardPadding}`}>Loading program year detail...</div>
          ) : programYears.length === 0 ? (
            <div className={`${card} ${cardPadding}`}>No program year invitation tables returned.</div>
          ) : (
            programYearDetails.map((yearItem) => (
              <article key={yearItem.programYear || yearItem.title} className={`${card} ${cardPadding}`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className={cardTitle}>{yearItem.programYear || "Program year"}</h3>
                    <p className={`${mutedText} mt-1 capitalize`}>
                      {yearItem.title || "Program year invitations issued"}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-right">
                    <div>
                      <p className="text-xs leading-5 text-slate-500 dark:text-[#A9ADC1]">Total</p>
                      <p className="text-base font-semibold text-slate-950 dark:text-[#F8F8F2]">
                        {formatNumber(yearItem.total)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs leading-5 text-slate-500 dark:text-[#A9ADC1]">Active Months</p>
                      <p className="text-base font-semibold text-slate-950 dark:text-[#F8F8F2]">
                        {yearItem.activeMonthCount.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs leading-5 text-slate-500 dark:text-[#A9ADC1]">Peak Month</p>
                      <p className="text-base font-semibold text-slate-950 dark:text-[#F8F8F2]">
                        {yearItem.peakMonth.month
                          ? `${yearItem.peakMonth.month} ${formatNumber(yearItem.peakMonth.value)}`
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {yearItem.streamSummary.map((streamItem) => (
                    <div
                      key={`${yearItem.programYear}-${streamItem.stream}`}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-[#44475A] dark:bg-[#282A36]"
                    >
                      <p className="text-sm font-semibold leading-6 text-slate-950 dark:text-[#F8F8F2]">
                        {streamItem.stream}
                      </p>
                      <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <p className="text-xs text-slate-500 dark:text-[#A9ADC1]">Total</p>
                          <p className="font-semibold">{formatNumber(streamItem.total)}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 dark:text-[#A9ADC1]">190</p>
                          <p className="font-semibold">{formatNumber(streamItem.subclass190)}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 dark:text-[#A9ADC1]">491</p>
                          <p className="font-semibold">{formatNumber(streamItem.subclass491)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 overflow-x-auto">
                  <table className="min-w-[980px] w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500 dark:border-[#44475A] dark:text-[#A9ADC1]">
                        <th scope="col" className="sticky left-0 bg-white py-3 pr-4 dark:bg-[#343746]">
                          Stream
                        </th>
                        <th scope="col" className="py-3 pr-4">
                          Visa
                        </th>
                        {MONTH_COLUMNS.map((month) => (
                          <th key={month} scope="col" className="py-3 pr-4 text-right">
                            {month}
                          </th>
                        ))}
                        <th scope="col" className="py-3 text-right">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearItem.rows.map((row, index) => (
                        <tr
                          key={`${yearItem.programYear}-${row.stream}-${row.visaType}-${index}`}
                          className="border-b border-slate-100 last:border-0 dark:border-[#44475A]/70"
                        >
                          <td className="sticky left-0 max-w-[220px] bg-white py-3 pr-4 font-medium text-slate-800 dark:bg-[#343746] dark:text-[#F8F8F2]">
                            {row.stream}
                          </td>
                          <td className="py-3 pr-4 font-semibold text-slate-950 dark:text-[#F8F8F2]">{row.visaType}</td>
                          {MONTH_COLUMNS.map((month) => (
                            <td key={month} className="py-3 pr-4 text-right tabular-nums">
                              {formatNumber(row[month])}
                            </td>
                          ))}
                          <td className="py-3 text-right font-semibold tabular-nums">
                            {formatNumber(row[TOTAL_COLUMN])}
                          </td>
                        </tr>
                      ))}
                      {yearItem.totals ? (
                        <tr className="border-t border-slate-300 font-semibold dark:border-[#BD93F9]/60">
                          <td className="sticky left-0 bg-white py-3 pr-4 dark:bg-[#343746]">All streams</td>
                          <td className="py-3 pr-4">Total</td>
                          {MONTH_COLUMNS.map((month) => (
                            <td key={month} className="py-3 pr-4 text-right tabular-nums">
                              {formatNumber(yearItem.totals[month])}
                            </td>
                          ))}
                          <td className="py-3 text-right tabular-nums">{formatNumber(yearItem.total)}</td>
                        </tr>
                      ) : null}
                    </tbody>
                  </table>
                </div>
              </article>
            ))
          )}
        </div>

        {/* PDF card */}
        <div className="space-y-4">
          <div className={`${card} ${cardPadding}`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className={cardTitle}>Invitation PDF</h2>
              {pdfSourceUrl ? (
                <button
                  type="button"
                  onClick={() => window.open(pdfSourceUrl, "_blank", "noopener,noreferrer")}
                  className="outline_btn"
                >
                  View source page
                </button>
              ) : null}
            </div>

            {loading && pdfLinks.length === 0 ? (
              <div className="mt-4">Loading PDF references...</div>
            ) : pdfLinks.length === 0 ? (
              <div className="mt-4">No PDF links found.</div>
            ) : invitationPdfLinks.length === 0 ? (
              <div className="mt-4">No invitation-related PDF links found.</div>
            ) : (
              <ol className="mt-4 space-y-2">
                {invitationPdfLinks.map((item, index) => (
                  <li className="min-w-0 overflow-hidden" key={`${item.url}-${index}`}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block max-w-full min-w-0 text-[#8BE9FD] underline decoration-[#44475A] underline-offset-4 hover:text-[#BD93F9]"
                    >
                      <strong className="block max-w-full break-words [overflow-wrap:anywhere]">
                        {item.title || item.url}
                      </strong>
                    </a>
                    <p className="mt-1 max-w-full break-words text-xs leading-5 text-gray-500 dark:text-[#A9ADC1] [overflow-wrap:anywhere]">
                      {urlDescription(item.url)}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <div className={`${card} ${cardPadding}`}>
            <h2 className={cardTitle}>Other PDF</h2>

            {loading && pdfLinks.length === 0 ? (
              <div className="mt-4">Loading PDF references...</div>
            ) : pdfLinks.length === 0 ? (
              <div className="mt-4">No PDF links found.</div>
            ) : otherPdfLinks.length === 0 ? (
              <div className="mt-4">No other PDF links found.</div>
            ) : (
              <ol className="mt-4 space-y-2">
                {otherPdfLinks.map((item, index) => (
                  <li className="min-w-0 overflow-hidden" key={`${item.url}-${index}`}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block max-w-full min-w-0 text-[#8BE9FD] underline decoration-[#44475A] underline-offset-4 hover:text-[#BD93F9]"
                    >
                      <strong className="block max-w-full break-words [overflow-wrap:anywhere]">
                        {item.title || item.url}
                      </strong>
                    </a>
                    <p className="mt-1 max-w-full break-words text-xs leading-5 text-gray-500 dark:text-[#A9ADC1] [overflow-wrap:anywhere]">
                      {urlDescription(item.url)}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Migration;
