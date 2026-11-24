import { mkdirSync, writeFileSync } from "node:fs";

// The line below must stay byte-for-byte: a single line, no trailing newline.
const LINE =
  "Beware the confident AI: it will answer before it thinks, and apologize after it ships.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
