import { access, cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const standaloneRoot = path.join(projectRoot, ".next", "standalone");
const standaloneNextRoot = path.join(standaloneRoot, ".next");
const standaloneStatic = path.join(standaloneNextRoot, "static");
const standalonePublic = path.join(standaloneRoot, "public");
const standaloneServer = path.join(standaloneRoot, "server.js");

await access(standaloneServer);

await mkdir(standaloneNextRoot, { recursive: true });

await rm(standaloneStatic, { recursive: true, force: true });
await rm(standalonePublic, { recursive: true, force: true });

await cp(path.join(projectRoot, ".next", "static"), standaloneStatic, {
  recursive: true,
});
await cp(path.join(projectRoot, "public"), standalonePublic, {
  recursive: true,
});

console.log("Standalone assets copied: .next/static and public");
