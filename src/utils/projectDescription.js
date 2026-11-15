// Normalise older portfolio descriptions without changing the stored JSON.
// A leading line is a short card summary. Dash-prefixed follow-up lines
// become semantic list items; standalone labels like "Purpose:" become headings.
const stripBullet = (value) => value.replace(/^\s*[-•]\s+/, "").trim();
const isBullet = (value) => /^\s*[-•]\s+/.test(value);
const isHeading = (value) => /^[a-z][a-z\s&/-]*:\s*$/i.test(value);

export const getProjectDescription = (description) => {
  const lines = Array.isArray(description)
    ? description.filter((line) => typeof line === "string" && line.trim())
    : [];
  const [first = "", ...remaining] = lines;
  const detailBlocks = [];

  for (const raw of remaining) {
    const line = raw.trim();
    if (isBullet(line)) {
      const last = detailBlocks[detailBlocks.length - 1];
      if (last?.type === "list") {
        last.items.push(stripBullet(line));
      } else {
        detailBlocks.push({ type: "list", items: [stripBullet(line)] });
      }
    } else if (isHeading(line)) {
      detailBlocks.push({ type: "heading", text: line.replace(/:\s*$/, "") });
    } else {
      detailBlocks.push({ type: "paragraph", text: line });
    }
  }

  return { summary: stripBullet(first), detailBlocks };
};
