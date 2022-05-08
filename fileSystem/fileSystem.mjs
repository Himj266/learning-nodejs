import { readFile, writeFile } from "fs/promises";

let templateHTML = await readFile(
  new URL("template.html", import.meta.url),
  "utf-8"
);

const KEYWORD_MAP = {
  title: "Learning Node",
  body: "Hey There! How Are You?",
};

for (const [k, v] of Object.entries(KEYWORD_MAP)) {
  templateHTML = templateHTML.replace(`{${k}}`, v);
}

await writeFile(new URL("index.html", import.meta.url), templateHTML);
