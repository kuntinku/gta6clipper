// gta6-clipper-01 entry: put the entered video's address (VIDEO.json) where the gate reads it.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const bot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(bot, "VIDEO.json");
const dst = join(out, "VIDEO.json");
mkdirSync(out, { recursive: true });
copyFileSync(src, dst);
console.log(`staged ${src} -> ${dst}`);
