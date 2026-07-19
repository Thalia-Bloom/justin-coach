(function (root, factory) {
    const quiz = factory();

    if (typeof module === "object" && module.exports) {
        module.exports = quiz;
    }

    if (root) {
        root.HealthLifestyleQuiz = quiz;
    }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
    "use strict";

    const OUTCOMES = {
        "body-shaper": {
            title: "Body Shaper",
            intro: "You are motivated by how you look and feel in your own skin. You know the result you want, but food and training can slip into an all-or-nothing cycle that is hard to sustain.",
            strength: "You know what you want, and you are willing to put in the work when the plan feels clear.",
            challenge: "Breaking free from restriction, frustration, and the feeling that you have fallen off.",
            quickWin: "Choose one anchor meal each day that leaves you satisfied and energized. One reliable choice creates momentum without demanding perfection.",
            coachingFocus: "build a clear, sustainable plan that supports body-composition goals without guilt or overthinking",
        },
        "energy-builder": {
            title: "Energy Builder",
            intro: "You want to feel alive again: steady energy, easier movement, and enough capacity left for the people and work that matter to you.",
            strength: "You are self-aware and can tell when your body is not operating at its best.",
            challenge: "Building consistency when fatigue and stress keep pulling you off track.",
            quickWin: "Start with five minutes of movement in the morning, then drink 12 ounces of water before caffeine. Keep it small enough to repeat every day.",
            coachingFocus: "build a routine that restores energy instead of adding more strain",
        },
        "peak-performer": {
            title: "Peak Performer",
            intro: "You thrive on challenges and enjoy the process of pushing yourself. Whether the target is HYROX, a marathon, a personal record, or a new skill, you want your effort to move you forward.",
            strength: "Discipline, drive, and a willingness to test your limits.",
            challenge: "Training hard without always training strategically, which can create plateaus or burnout.",
            quickWin: "Add one structured recovery session each week. Mobility, yoga, or easy aerobic work gives your body space to adapt to the hard work.",
            coachingFocus: "turn your effort into a smarter training strategy with clearer progression and recovery",
        },
        "health-guardian": {
            title: "Health Guardian",
            intro: "You care about staying strong for the long haul. You want the capacity to keep up with life, protect your independence, and feel confident about the choices you are making for your health.",
            strength: "You are motivated by a long-term vision rather than a quick fix.",
            challenge: "Overthinking where to begin or where your time and effort will matter most.",
            quickWin: "Take a daily walk, ideally outside in the morning. It is simple, repeatable, and a strong base for layering in strength and nutrition habits.",
            coachingFocus: "create a practical plan that builds strength and health for the years ahead",
        },
        "lifestyle-explorer": {
            title: "Lifestyle Explorer",
            intro: "You thrive on hikes, road trips, and spontaneous adventures. You do not want to live in the gym; you want a body that can keep up with the life you want to live.",
            strength: "Joy and experience motivate you, which makes staying active feel natural when it is fun.",
            challenge: "Avoiding boredom or so much structure that movement stops feeling like freedom.",
            quickWin: "Plan one adventure workout each week: a hike, paddle, bike ride, or anything active outdoors. Fun and fitness can build momentum together.",
            coachingFocus: "create a flexible plan that keeps you ready for adventure without rigid rules",
        },
    };

    const QUESTIONS = [
        {
            question: "When you think about improving your health and lifestyle, what excites you most?",
            randomize: true,
            answers: [
                { text: "Not needing three coffees just to feel awake", outcome: "energy-builder" },
                { text: "Finally feeling lean and confident in photos", outcome: "body-shaper" },
                { text: "Staying strong as I age", outcome: "health-guardian" },
                { text: "Having the stamina for epic trips and adventures", outcome: "lifestyle-explorer" },
                { text: "Smashing a race or setting a personal best", outcome: "peak-performer" },
            ],
        },
        {
            question: "If you could fast-forward six months, which result would make you happiest?",
            randomize: true,
            answers: [
                { text: "Dropping weight or fitting into clothes better", outcome: "body-shaper" },
                { text: "Competing with confidence or crushing a heavy lift", outcome: "peak-performer" },
                { text: "Feeling healthier and stronger for the long term", outcome: "health-guardian" },
                { text: "Being able to hike, travel, and play without limitations", outcome: "lifestyle-explorer" },
                { text: "Feeling energized and pain-free", outcome: "energy-builder" },
            ],
        },
        {
            question: "Which best describes your biggest challenge right now?",
            randomize: false,
            answers: [
                { text: "Low motivation or feeling tired often", outcome: "energy-builder" },
                { text: "I do not want strict rules. I want to be fit enough to say yes to life", outcome: "lifestyle-explorer" },
                { text: "Training hard but not improving", outcome: "peak-performer" },
                { text: "Not knowing where to start or what is best for me", outcome: "health-guardian" },
                { text: "Inconsistency with nutrition or food cravings", outcome: "body-shaper" },
            ],
        },
        {
            question: "How do you usually feel about your current routine?",
            randomize: true,
            answers: [
                { text: "Disciplined, but the progress is not showing", outcome: "peak-performer" },
                { text: "Bored. I would rather be doing something fun outside", outcome: "lifestyle-explorer" },
                { text: "Lost. I am not sure what is best for my health", outcome: "health-guardian" },
                { text: "Drained. My energy runs out before the day does", outcome: "energy-builder" },
                { text: "Frustrated. I know what to do but do not follow through", outcome: "body-shaper" },
            ],
        },
        {
            question: "When you picture your best self, which qualities stand out most?",
            randomize: false,
            answers: [
                { text: "Energetic and positive", outcome: "energy-builder" },
                { text: "Confident in how I look", outcome: "body-shaper" },
                { text: "Strong, capable, and competitive", outcome: "peak-performer" },
                { text: "Adventurous and free", outcome: "lifestyle-explorer" },
                { text: "Healthy, reliable, and resilient", outcome: "health-guardian" },
            ],
        },
        {
            question: "Which statement best describes how you feel about movement and exercise?",
            randomize: false,
            answers: [
                { text: "I do it mostly to change my body", outcome: "body-shaper" },
                { text: "I do it when I need a boost in energy", outcome: "energy-builder" },
                { text: "I see it as essential for long-term health", outcome: "health-guardian" },
                { text: "I thrive on structured training and challenges", outcome: "peak-performer" },
                { text: "I love being active when it connects me to experiences", outcome: "lifestyle-explorer" },
            ],
        },
        {
            question: "What usually throws you off track?",
            randomize: false,
            answers: [
                { text: "Injury, plateaus, or burnout from pushing too hard", outcome: "peak-performer" },
                { text: "Food, cravings, or social eating", outcome: "body-shaper" },
                { text: "Losing interest or not feeling inspired", outcome: "lifestyle-explorer" },
                { text: "Life stress, uncertainty, or not having guidance", outcome: "health-guardian" },
                { text: "Fatigue or a lack of energy", outcome: "energy-builder" },
            ],
        },
        {
            question: "In a typical week, how many days are you active in any kind of movement?",
            randomize: false,
            answers: [
                { text: "0–1 days", outcome: "body-shaper" },
                { text: "2–3 days", outcome: "energy-builder" },
                { text: "4–5 days", outcome: "peak-performer" },
                { text: "6 or more days", outcome: "peak-performer" },
                { text: "It depends. I stay active through hiking, kayaking, or other fun things, but I do not really work out", outcome: "lifestyle-explorer" },
            ],
        },
        {
            question: "How do you prefer to track progress?",
            randomize: false,
            answers: [
                { text: "Personal records, race times, or milestones", outcome: "peak-performer" },
                { text: "Experiences I can say yes to, like hikes, trips, and play", outcome: "lifestyle-explorer" },
                { text: "The scale, photos, or clothes fitting differently", outcome: "body-shaper" },
                { text: "Blood work, health markers, or how I am aging", outcome: "health-guardian" },
                { text: "Energy levels and mood", outcome: "energy-builder" },
            ],
        },
        {
            question: "Five years from now, what matters most to you?",
            randomize: false,
            answers: [
                { text: "Looking good and feeling confident", outcome: "body-shaper" },
                { text: "Crushing a big performance milestone", outcome: "peak-performer" },
                { text: "Protecting my health so I do not lose ability", outcome: "health-guardian" },
                { text: "Having the freedom to live actively and explore", outcome: "lifestyle-explorer" },
                { text: "Waking up with steady energy", outcome: "energy-builder" },
            ],
        },
        {
            question: "When you think about investing in yourself, what is the main reason?",
            randomize: false,
            answers: [
                { text: "To secure my health for the future", outcome: "health-guardian" },
                { text: "To feel good and enjoy each day more fully", outcome: "energy-builder" },
                { text: "To level up my performance and push my limits", outcome: "peak-performer" },
                { text: "To unlock more adventures and life experiences", outcome: "lifestyle-explorer" },
                { text: "To finally achieve the body I want", outcome: "body-shaper" },
            ],
        },
        {
            question: "Which kind of support feels most helpful to you?",
            randomize: false,
            answers: [
                { text: "Accountability with nutrition and daily habits", outcome: "body-shaper" },
                { text: "Coaching structure to train smarter and keep progressing", outcome: "peak-performer" },
                { text: "Guidance on sustainable, long-term health practices", outcome: "health-guardian" },
                { text: "A flexible plan that lets me enjoy life", outcome: "lifestyle-explorer" },
                { text: "Encouragement to build consistency with movement", outcome: "energy-builder" },
            ],
        },
    ];

    function toOutcomeKeys(selections) {
        return selections.map(function (selection, questionIndex) {
            if (Number.isInteger(selection)) {
                return QUESTIONS[questionIndex] && QUESTIONS[questionIndex].answers[selection]
                    ? QUESTIONS[questionIndex].answers[selection].outcome
                    : null;
            }

            return Object.prototype.hasOwnProperty.call(OUTCOMES, selection) ? selection : null;
        });
    }

    function calculateOutcome(selections) {
        const outcomeKeys = Object.keys(OUTCOMES);
        const scores = Object.fromEntries(outcomeKeys.map(function (key) { return [key, 0]; }));
        const selectedOutcomes = toOutcomeKeys(selections);

        selectedOutcomes.forEach(function (outcome) {
            if (outcome) scores[outcome] += 1;
        });

        const highestScore = Math.max.apply(null, Object.values(scores));
        if (!highestScore) return null;

        let winner = outcomeKeys.find(function (key) { return scores[key] === highestScore; });

        for (let index = selectedOutcomes.length - 1; index >= 0; index -= 1) {
            const outcome = selectedOutcomes[index];
            if (outcome && scores[outcome] === highestScore) {
                winner = outcome;
                break;
            }
        }

        return { winner: winner, scores: scores, highestScore: highestScore };
    }

    function shuffledIndexes(length, random) {
        const indexes = Array.from({ length: length }, function (_, index) { return index; });

        for (let index = indexes.length - 1; index > 0; index -= 1) {
            const swapIndex = Math.floor(random() * (index + 1));
            const current = indexes[index];
            indexes[index] = indexes[swapIndex];
            indexes[swapIndex] = current;
        }

        return indexes;
    }

    function createOptionOrders(random) {
        const randomSource = typeof random === "function" ? random : Math.random;

        return QUESTIONS.map(function (question) {
            if (!question.randomize) {
                return question.answers.map(function (_, index) { return index; });
            }

            return shuffledIndexes(question.answers.length, randomSource);
        });
    }

    return {
        OUTCOMES: OUTCOMES,
        QUESTIONS: QUESTIONS,
        calculateOutcome: calculateOutcome,
        createOptionOrders: createOptionOrders,
    };
});
