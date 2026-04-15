import { useEffect, useState } from "react";

const API_ENDPOINT = "https://j69pro1xkj.execute-api.ap-southeast-2.amazonaws.com/?mode=all";
const REFRESH_COOLDOWN_MS = 60 * 1000;

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

function isInvitationRoundDocument(item) {
  const haystack = `${item?.title || ""} ${item?.url || ""}`.toLowerCase();
  return haystack.includes("round") && (haystack.includes("2025") || haystack.includes("2026"));
}

function normalizePayload(rawPayload) {
  if (!rawPayload || typeof rawPayload !== "object") {
    return { months: {}, pdfLinks: [], pdfCount: 0, pdfSourceUrl: "" };
  }

  if (rawPayload.months && typeof rawPayload.months === "object") {
    return {
      months: rawPayload.months,
      pdfLinks: normalizePdfLinks(rawPayload.pdfLinks),
      pdfCount: typeof rawPayload.pdfCount === "number" ? rawPayload.pdfCount : undefined,
      pdfSourceUrl: typeof rawPayload.pdfSourceUrl === "string" ? rawPayload.pdfSourceUrl : "",
    };
  }

  return {
    months: rawPayload,
    pdfLinks: [],
    pdfCount: 0,
    pdfSourceUrl: "",
  };
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
      <div className="max-w-4xl mx-auto px-5 py-6 space-y-6">
        {/* Refresh toolbar */}
        <div className="flex justify-between items-center gap-4">
          <p>
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
          <article className="border rounded-lg p-4 bg-white text-center">
            <p>Total Invitations</p>
            <p>{totalInvitations.toLocaleString()}</p>
          </article>
          <article className="border rounded-lg p-4 bg-white text-center">
            <p>Months Returned</p>
            <p>{monthEntries.length.toLocaleString()}</p>
          </article>
          <article className="border rounded-lg p-4 bg-white text-center">
            <p>PDF Links Returned</p>
            <p>{pdfCount.toLocaleString()}</p>
          </article>
        </div>

        {/* Month invitation card */}
        <div className="border rounded-lg p-4 bg-white">
          <h2 className="m-0 p-0 text-2xl font-semibold leading-tight">Invitation Number By Month</h2>

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

        {/* PDF card */}
        <div className="space-y-4">
          <div className="rounded-lg border bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="m-0 p-0 text-2xl font-semibold leading-tight">Invitation PDF</h2>
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
                    <a href={item.url} target="_blank" rel="noreferrer" className="block max-w-full min-w-0">
                      <strong className="block max-w-full break-words [overflow-wrap:anywhere]">
                        {item.title || item.url}
                      </strong>
                    </a>
                    <p className="mt-1 max-w-full break-words text-xs leading-5 text-gray-500 [overflow-wrap:anywhere]">
                      {urlDescription(item.url)}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <div className="rounded-lg border bg-white p-4">
            <h2 className="m-0 p-0 text-2xl font-semibold leading-tight">Other PDF</h2>

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
                    <a href={item.url} target="_blank" rel="noreferrer" className="block max-w-full min-w-0">
                      <strong className="block max-w-full break-words [overflow-wrap:anywhere]">
                        {item.title || item.url}
                      </strong>
                    </a>
                    <p className="mt-1 max-w-full break-words text-xs leading-5 text-gray-500 [overflow-wrap:anywhere]">
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
