window.JUSTIN_START_CONFIG = Object.freeze({
    // Paste Justin's Stripe Payment Link here after its success redirect points
    // to his 60-minute Intro Call calendar. Payment Links are public URLs, not secrets.
    // When set, Stripe checkout takes over and bookingUrl below is ignored.
    paymentUrl: "",

    // Founding-period booking: paste Justin's 60-minute Intro Call Calendly link
    // here to open free direct booking (no payment collected) until Stripe is live.
    // Must be an https://calendly.com/... URL.
    bookingUrl: ""
});
