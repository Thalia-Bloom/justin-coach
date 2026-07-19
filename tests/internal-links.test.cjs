"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function walk(directory) {
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
        if (entry.name.startsWith(".") || entry.name === "output" || entry.name === "node_modules") return [];
        const absolute = path.join(directory, entry.name);
        if (entry.isDirectory()) return walk(absolute);
        return entry.isFile() && entry.name.endsWith(".html") ? [absolute] : [];
    });
}

const missing = [];

walk(root).forEach(file => {
    const source = fs.readFileSync(file, "utf8");
    const attributes = source.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi);

    for (const match of attributes) {
        const raw = match[1].trim();
        if (!raw || raw.startsWith("#") || /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(raw)) continue;

        const clean = decodeURIComponent(raw.split(/[?#]/, 1)[0]);
        if (!clean) continue;

        let target = clean.startsWith("/")
            ? path.join(root, clean.replace(/^\/+/, ""))
            : path.resolve(path.dirname(file), clean);

        if (clean.endsWith("/")) target = path.join(target, "index.html");
        if (!fs.existsSync(target)) {
            missing.push(path.relative(root, file) + " -> " + raw);
        }
    }
});

assert.deepEqual(missing, [], "local links and assets should resolve");
process.stdout.write("✓ all local HTML links and assets resolve\n");
