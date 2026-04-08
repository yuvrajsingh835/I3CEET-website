const tickerHTML = `
<div id="news-ticker-container">
    <div class="ticker-content" id="ticker-content">
        <span class="ticker-item"><i class="fa fa-bullhorn"></i> Conference registration is now OPEN!!<a
                href="registration.html"> Click here.</a></span>
        <span class="ticker-item"><i class="fa fa-calendar-check"></i> Submission deadline is approaching. <a
                href="paper-sub-guidelines.html">Submit now.</a></span>
        <span class="ticker-item"><i class="fa fa-calendar-check"></i> Early Bird discount of ₹1000 INR / $50 USD for all, valid till December 31, 2026</span>
    </div>
</div>`;

function injectTicker() {
    const tickerPlaceholder = document.getElementById('ticker-placeholder');
    if (tickerPlaceholder) {
        tickerPlaceholder.innerHTML = tickerHTML;
        
        // Add hover pause functionality
        const tickerContent = tickerPlaceholder.querySelector('.ticker-content');
        if (tickerContent) {
            tickerPlaceholder.addEventListener('mouseenter', () => tickerContent.style.animationPlayState = 'paused');
            tickerPlaceholder.addEventListener('mouseleave', () => tickerContent.style.animationPlayState = 'running');
        }
    }
}

// Initial call
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectTicker);
} else {
    injectTicker();
}
