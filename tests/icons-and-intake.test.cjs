"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const pack = read("icons.svg");
const intro = read("intro.html");
const checkout = read("checkout.html");
const resources = read("resources/index.html");

// --- Icon pack ---
const iconIds = [...pack.matchAll(/<symbol id="(i-[a-z-]+)"/g)].map(m => m[1]);
assert.ok(iconIds.length >= 15, "icon pack should hold the full set");
assert.equal(new Set(iconIds).size, iconIds.length, "icon ids must be unique");
assert.ok(pack.includes('#A38067'), "icons keep the clay two-tone accent");
assert.equal(pack.includes("<script"), false, "the icon pack stays plain SVG");

// Every sprite reference on every page points at a symbol that exists.
const htmlFiles = [];
(function walk(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
        if (entry.name.startsWith(".") || entry.name === "output" || entry.name === "node_modules") return;
        const absolute = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(absolute);
        else if (entry.name.endsWith(".html")) htmlFiles.push(absolute);
    });
})(root);

const broken = [];
htmlFiles.forEach(file => {
    const source = fs.readFileSync(file, "utf8");
    for (const match of source.matchAll(/href="[^"]*icons\.svg#(i-[a-z-]+)"/g)) {
        if (!iconIds.includes(match[1])) broken.push(path.relative(root, file) + " -> " + match[1]);
    }
});
assert.deepEqual(broken, [], "every icons.svg#id reference must resolve to a symbol");

// --- Icons implemented where they matter ---
assert.equal((resources.match(/icons\.svg#i-/g) || []).length, 6, "all six library cards carry an icon");
["programs/hyrox-prep.html", "programs/minimal-equipment.html", "programs/strength-structure.html"].forEach(file => {
    assert.ok(read(file).includes("../icons.svg#i-"), file + " hero should carry its program icon");
});
assert.equal((intro.match(/icons\.svg#i-/g) || []).length >= 5, true, "intro trail pin + four path steps use the pack");

// --- Intro flow order matches the real booking flow ---
const bookIdx = intro.indexOf("Book your call");
const tellIdx = intro.indexOf("Tell me where you're at");
const timeIdx = intro.indexOf("Pick your time");
assert.ok(bookIdx > -1 && tellIdx > -1 && timeIdx > -1, "all path steps present");
assert.ok(bookIdx < tellIdx && tellIdx < timeIdx, "questions come at booking, before the calendar");

// --- Booking intake form ---
assert.ok(checkout.includes('id="intake-form"'), "checkout carries the intake form");
assert.ok(checkout.includes('name="name" type="text" autocomplete="name" required'), "name is required");
assert.ok(checkout.includes('name="email" type="email" autocomplete="email" required'), "email is required");
assert.ok(checkout.includes('name="phone" type="tel"'), "phone field exists");
assert.equal(checkout.includes('name="phone" type="tel" autocomplete="tel" required'), false, "phone stays optional");
assert.equal((checkout.match(/<textarea[^>]*required/g) || []).length, 3, "exactly three required questions");
assert.ok(checkout.includes("What do you most want to change in the next 90 days?"), "question 1 present");
assert.ok(checkout.includes("What have you already tried, and how did it go?"), "question 2 present");
assert.ok(checkout.includes("What does a normal day look like right now? Sleep, food, movement, stress."), "question 3 present");
assert.ok(checkout.includes('type="submit"'), "confirm button submits the form so native validation gates the redirect");
const aboutIdx = checkout.indexOf("About you");
const questionsIdx = checkout.indexOf("Three questions before we talk");
const dueIdx = checkout.indexOf("Due today, founding period");
assert.ok(aboutIdx > -1 && aboutIdx < questionsIdx && questionsIdx < dueIdx, "card order: about you, then questions, then the reservation summary (2026-07-23 Heathrow call)");
assert.ok(checkout.includes('searchParams.set("a1"'), "answers ride into Calendly via the a1 custom-question prefill");
assert.ok(checkout.includes('searchParams.set("name"') && checkout.includes('searchParams.set("email"'), "name and email prefill Calendly");
assert.equal(checkout.includes("localStorage"), false, "no PII is stored in the browser");

// Voice rules: no em dashes anywhere in Justin-facing copy.
["intro.html", "checkout.html"].forEach(file => {
    assert.equal(read(file).includes("—"), false, file + " must not contain em dashes");
});

process.stdout.write("✓ icon pack + booking intake checks pass\n");
