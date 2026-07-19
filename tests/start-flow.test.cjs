"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
const quiz = fs.readFileSync(path.join(root, "health-lifestyle-quiz.html"), "utf8");
const start = fs.readFileSync(path.join(root, "start.html"), "utf8");
const config = fs.readFileSync(path.join(root, "start-config.js"), "utf8");
const cleanStart = start.toLowerCase();

assert.ok(home.includes('href="start/"'), "homepage should route into the owned start path");
assert.ok(quiz.includes('href="start/"'), "quiz should route into the owned start path");
assert.ok(home.includes('id="video-control"'), "homepage backflip should have a motion control");
assert.ok(home.includes('aria-hidden="true"'), "testimonial dialog should start outside the accessibility tree");
assert.ok(start.includes("60-minute Intro Call"), "start page should state the 60-minute offer");
assert.ok(start.includes("<strong>$79</strong>"), "start page should disclose the price before payment");
assert.ok(start.includes("Pay, then book"), "start page should state the order of operations");
assert.ok(start.includes("personalized written recap"), "start page should explain the post-call deliverable");
assert.equal(cleanStart.includes("discovery session"), false, "old Discovery Session language must be removed");
assert.equal(cleanStart.includes("baggage unpacking"), false, "old Baggage Unpacking language must be removed");
assert.equal(cleanStart.includes("45-minute"), false, "old 45-minute duration must be removed");
assert.equal(cleanStart.includes("free clarity"), false, "free-call language must be removed");
assert.equal(config.includes('paymentUrl: ""'), true, "production payment link must remain visibly unconfigured until Justin supplies it");
assert.ok(start.includes('candidate.hostname === "buy.stripe.com"'), "checkout should accept only Stripe-hosted Payment Links");
assert.ok(fs.existsSync(path.join(root, "start", "index.html")), "the QR-compatible /start route should exist");

process.stdout.write("✓ paid Intro Call path is internally consistent and safely staged\n");
