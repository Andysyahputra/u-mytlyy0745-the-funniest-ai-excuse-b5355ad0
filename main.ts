import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I spent six hours rewriting the error message so it apologizes in three languages — the bug is still there, but honestly, it reads beautifully.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
