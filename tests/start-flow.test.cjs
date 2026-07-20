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
assert.ok(start.includes('src="media/intro-call-river-mobile.mp4"'), "start page should use the mobile PNW river hero video");
assert.equal(cleanStart.includes("heathrow"), false, "Heathrow's story should remain on the testimonials page, not /start");
assert.equal(cleanStart.includes("backflip.mp4"), false, "the Intro Call page should not reuse the performance-focused backflip hero");
assert.equal(cleanStart.includes("discovery session"), false, "old Discovery Session language must be removed");
assert.equal(cleanStart.includes("baggage unpacking"), false, "old Baggage Unpacking language must be removed");
assert.equal(cleanStart.includes("45-minute"), false, "old 45-minute duration must be removed");
assert.equal(cleanStart.includes("free clarity"), false, "free-call language must be removed");
assert.ok(start.includes('href="resources/circadian-rhythm/circadian-rhythm-checkin.pdf"'), "start page should offer the working Circadian Rhythm PDF as a self-guided option");
assert.ok(start.includes('href="hyrox-quiz.html"'), "start page should offer the owned Hyrox readiness tool");
assert.ok(start.includes('href="health-lifestyle-quiz.html"'), "start page should offer the owned lifestyle tool");
assert.equal(config.includes('paymentUrl: ""'), true, "production payment link must remain visibly unconfigured until Justin supplies it");
assert.ok(start.includes('candidate.hostname === "buy.stripe.com"'), "checkout should accept only Stripe-hosted Payment Links");
assert.ok(fs.existsSync(path.join(root, "start", "index.html")), "the QR-compatible /start route should exist");

process.stdout.write("✓ paid Intro Call path is internally consistent and safely staged\n");
