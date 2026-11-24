import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Time Machine Warning Label — one line, max 120 characters.
// Deadpan safety notice: the hazard is meeting your duplicate self, and the
// punchline lands in the last few words. "Yesterday" pins the time travel
// concretely; "already" adds the paradox — he knew before you did it.
const label =
  "WARNING: Do not meet yourself yesterday. He already knows what you did, and he is very disappointed in you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
