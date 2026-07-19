"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const quiz = require("../health-lifestyle-quiz.js");

let passed = 0;

function test(name, run) {
    try {
        run();
        passed += 1;
        process.stdout.write("✓ " + name + "\n");
    } catch (error) {
        process.stderr.write("✗ " + name + "\n");
        throw error;
    }
}

test("keeps the audited 12-question, five-outcome structure", function () {
    assert.equal(quiz.QUESTIONS.length, 12);
    assert.equal(Object.keys(quiz.OUTCOMES).length, 5);
    quiz.QUESTIONS.forEach(function (question) {
        assert.equal(question.answers.length, 5);
    });
});

test("preserves the source answer-mapping balance", function () {
    const counts = Object.fromEntries(Object.keys(quiz.OUTCOMES).map(function (key) { return [key, 0]; }));

    quiz.QUESTIONS.forEach(function (question) {
        question.answers.forEach(function (answer) {
            counts[answer.outcome] += 1;
        });
    });

    assert.deepEqual(counts, {
        "body-shaper": 12,
        "energy-builder": 12,
        "peak-performer": 13,
        "health-guardian": 11,
        "lifestyle-explorer": 12,
    });
});

test("can produce every audited outcome", function () {
    Object.keys(quiz.OUTCOMES).forEach(function (targetOutcome) {
        const selections = quiz.QUESTIONS.map(function (question) {
            const matchingAnswer = question.answers.findIndex(function (answer) {
                return answer.outcome === targetOutcome;
            });
            return matchingAnswer === -1 ? 0 : matchingAnswer;
        });
        assert.equal(quiz.calculateOutcome(selections).winner, targetOutcome);
    });
});

test("breaks a top-score tie with the latest tied answer", function () {
    const selections = [
        "body-shaper",
        "body-shaper",
        "body-shaper",
        "body-shaper",
        "body-shaper",
        "body-shaper",
        "energy-builder",
        "energy-builder",
        "energy-builder",
        "energy-builder",
        "energy-builder",
        "energy-builder",
    ];
    const result = quiz.calculateOutcome(selections);

    assert.equal(result.scores["body-shaper"], 6);
    assert.equal(result.scores["energy-builder"], 6);
    assert.equal(result.winner, "energy-builder");
});

test("randomizes only questions 1, 2, and 4", function () {
    let call = 0;
    const values = [0.12, 0.82, 0.34, 0.91, 0.47, 0.06, 0.75, 0.29, 0.63, 0.18, 0.97, 0.41];
    const orders = quiz.createOptionOrders(function () {
        const value = values[call % values.length];
        call += 1;
        return value;
    });

    orders.forEach(function (order, questionIndex) {
        assert.deepEqual(order.slice().sort(), [0, 1, 2, 3, 4]);
        if (![0, 1, 3].includes(questionIndex)) {
            assert.deepEqual(order, [0, 1, 2, 3, 4]);
        }
    });
    assert.ok([0, 1, 3].some(function (index) {
        return orders[index].join(",") !== "0,1,2,3,4";
    }));
});

test("production quiz has an owned paid path and no old host or free-call path", function () {
    const root = path.resolve(__dirname, "..");
    const productionSource = [
        fs.readFileSync(path.join(root, "health-lifestyle-quiz.html"), "utf8"),
        fs.readFileSync(path.join(root, "health-lifestyle-quiz.js"), "utf8"),
    ].join("\n").toLowerCase();

    assert.equal(productionSource.includes("involve.me"), false);
    assert.equal(productionSource.includes("calendly"), false);
    assert.equal(productionSource.includes("free discovery"), false);
    assert.equal(productionSource.includes("href=\"start/\""), true);
    assert.equal(productionSource.includes("book a $79 intro call"), false);
    assert.equal(productionSource.includes("intentional activity or exercise"), true);
});

process.stdout.write("\n" + passed + " quiz checks passed.\n");
