window.JUSTIN_START_CONFIG = Object.freeze({
    // Paste Justin's Stripe Payment Link here after its success redirect points
    // to his 60-minute Intro Call calendar. Payment Links are public URLs, not secrets.
    // When set, Stripe checkout takes over and bookingUrl below is ignored.
    paymentUrl: "",

    // Founding-period booking: free direct booking (no payment collected) until
    // Stripe is live. Currently Justin's existing Clarity Call event; swap to his
    // 60-minute Intro Call event when he creates it. Must be https://calendly.com/...
    bookingUrl: "https://calendly.com/justin-the-practice/clarity-call"
});
