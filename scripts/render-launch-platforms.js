#!/usr/bin/env node
/**
 * Render the launch-platform database (CSV) into Markdown: one file per
 * category plus an index. No dependencies.
 *
 *   node scripts/render-launch-platforms.js \
 *     templates/starter-launcher/kb/data/launch-platforms.csv \
 *     templates/starter-launcher/kb/directories
 *
 * The CSV is the source of truth. Edit the CSV, then re-run this script.
 * Column meanings are documented in kb/data/README.md next to the CSV.
 */
const fs = require("fs");
const path = require("path");

const [csvPath, outDir] = process.argv.slice(2);
if (!csvPath || !outDir) {
  console.error("usage: render-launch-platforms.js <platforms.csv> <out-dir>");
  process.exit(1);
}

// Minimal RFC 4180 parser: quoted fields, doubled quotes, commas and newlines inside quotes.
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') {
        quoted = false;
      } else {
        field += c;
      }
    } else if (c === '"') {
      quoted = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      field = "";
      if (row.length > 1 || row[0] !== "") rows.push(row);
      row = [];
    } else {
      field += c;
    }
  }
  if (field !== "" || row.length) {
    row.push(field);
    rows.push(row);
  }
  const [header, ...body] = rows;
  return body.map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ""])));
}

const CATEGORIES = [
  ["launch-platform", "Launch platforms", "Dated launch events with a daily or weekly leaderboard. One launch per product, planned in advance."],
  ["startup-directory", "Startup directories", "Permanent startup listings. Low effort, batch them in the launch week."],
  ["company-profile", "Company profiles", "Company records that investors, press and data vendors read. Keep them accurate."],
  ["review-site", "Review sites", "Software review platforms. The listing is free; ranking comes from real customer reviews."],
  ["software-directory", "Software directories", "Software catalogs and alternatives sites. High-intent search traffic for years."],
  ["community", "Founder and general communities", "Communities where a person posts in their own voice. Never automated."],
  ["dev-community", "Developer communities", "Developer communities and content sites. Technical, honest, no marketing voice."],
  ["package-registry", "Package registries and developer hubs", "Registries and hubs where developers install or call the product. Mostly automatable from CI."],
  ["open-source-directory", "Open-source directories", "Lists and directories for open-source and self-hostable software."],
  ["self-hosting-catalog", "Self-hosting catalogs", "One-click app catalogs of home-server and self-hosting platforms."],
  ["app-marketplace", "App marketplaces and integrations", "Integration, plugin and extension marketplaces. Need a real integration and a review."],
  ["app-store", "App stores", "Mobile and desktop app stores. Developer accounts, review queues, store search optimisation."],
  ["ai-directory", "AI tool directories", "AI tool directories. Batch-submit with the same launch kit; many charge for fast listing."],
  ["agent-directory", "MCP server and AI agent directories", "Directories for MCP servers and AI agents."],
  ["newsletter", "Newsletters", "Editorial newsletters. Pitch real news; paid sponsorship needs owner approval."],
  ["social", "Social channels", "The owner's own social presence for launch-day amplification. Always a person."],
];

const AUTOMATION = {
  auto: "auto - the agent can finish it (CLI, API or Git pull request) with credentials the owner provisioned",
  assisted: "assisted - the agent prepares every field and can fill the form; a person signs in, solves any CAPTCHA, accepts terms, pays and confirms",
  human: "human - a person does it in their own voice or account; the agent drafts the copy and the checklist",
};

const rows = parseCSV(fs.readFileSync(csvPath, "utf8"));
const relCsv = path.relative(outDir, csvPath).split(path.sep).join("/");
const scriptName = path.relative(process.cwd(), __filename).split(path.sep).join("/");
fs.mkdirSync(outDir, { recursive: true });

const known = new Set(CATEGORIES.map((c) => c[0]));
for (const r of rows) {
  if (!known.has(r.category)) {
    console.error(`unknown category "${r.category}" on row ${r.id}`);
    process.exit(1);
  }
}

const line = (r) => {
  const out = [];
  out.push(`### ${r.name}`);
  out.push("");
  out.push(`- id: \`${r.id}\``);
  out.push(`- site: ${r.url}` + (r.submit_url ? ` | submit: ${r.submit_url}` : ""));
  out.push(
    `- method: ${r.submit_method} | automation: ${r.automation} | cost: ${r.cost} | link: ${r.link_type === "unknown" ? "unknown" : r.link_type + " (reported)"}, verify on the live listing | traffic: ${r.traffic} | difficulty: ${r.difficulty} | when: ${r.timing}`
  );
  out.push(`- best for: ${r.best_for.split(";").join(", ")}`);
  if (r.requirements) out.push(`- needs: ${r.requirements}`);
  out.push(`- how: ${r.how_to}`);
  out.push(`- status: ${r.status} (checked ${r.last_checked})`);
  out.push("");
  return out.join("\n");
};

const index = [];
index.push("# Launch platform directory");
index.push("");
index.push("Generated from `" + relCsv + "` by `" + scriptName + "`. Do not edit by hand: edit the CSV and re-run the script.");
index.push("");
index.push(`${rows.length} platforms in ${CATEGORIES.length} categories.`);
index.push("");
index.push("## Automation levels");
index.push("");
for (const v of Object.values(AUTOMATION)) index.push(`- ${v}`);
index.push("");
index.push("## Categories");
index.push("");
index.push("| Category | File | Platforms | auto | assisted | human | down |");
index.push("|----------|------|-----------|------|----------|-------|------|");

for (const [key, title, blurb] of CATEGORIES) {
  const list = rows.filter((r) => r.category === key);
  const count = (a) => list.filter((r) => r.automation === a).length;
  const down = list.filter((r) => r.status.startsWith("down")).length;
  index.push(`| ${title} | [${key}.md](${key}.md) | ${list.length} | ${count("auto")} | ${count("assisted")} | ${count("human")} | ${down} |`);

  const doc = [];
  doc.push(`# ${title}`);
  doc.push("");
  doc.push(blurb);
  doc.push("");
  doc.push("Generated from `" + relCsv + "`. Edit the CSV, not this file.");
  doc.push("");
  doc.push("| Platform | Automation | Cost | Traffic | Difficulty | When | Status |");
  doc.push("|----------|------------|------|---------|------------|------|--------|");
  for (const r of list) {
    doc.push(`| [${r.name}](${r.url}) | ${r.automation} | ${r.cost} | ${r.traffic} | ${r.difficulty} | ${r.timing} | ${r.status.split(" (")[0]} |`);
  }
  doc.push("");
  doc.push("## Platforms");
  doc.push("");
  for (const r of list) doc.push(line(r));
  fs.writeFileSync(path.join(outDir, `${key}.md`), doc.join("\n").replace(/\n+$/, "\n"));
}
index.push("");
index.push("## Platforms currently down");
index.push("");
const downRows = rows.filter((r) => r.status.startsWith("down"));
if (downRows.length === 0) index.push("None at the last check.");
for (const r of downRows) index.push(`- ${r.name} (\`${r.id}\`): ${r.status}, checked ${r.last_checked}. Skip it and re-check before the next campaign.`);
index.push("");
fs.writeFileSync(path.join(outDir, "README.md"), index.join("\n"));
console.log(`rendered ${rows.length} rows into ${CATEGORIES.length} category files in ${outDir}`);
