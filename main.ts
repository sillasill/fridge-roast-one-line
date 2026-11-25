import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;
const OUT = "/output/entry.txt";

const TEXT = "My smart fridge updated its firmware at 3 a.m., lectured me about my milk, and its ice maker now dispenses only disappointment.";

if (TEXT.length < 1 || TEXT.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${TEXT.length}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (TEXT.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, TEXT, "utf8");
