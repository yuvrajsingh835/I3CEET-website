const footerHTML = `
<footer>
    <div class="footer-grid">
        <div class="footer-section">
            <h4>Conference</h4>
            <ul>
                <li><a href="prevconf.html">Previous Conferences</a></li>
                <li><a href="plenary-speakers.html">Speakers</a></li>
                <li><a href="sponsors.html">Sponsors</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Authors</h4>
            <ul>
                <li><a href="paper-sub-guidelines.html">Submission Guidelines</a></li>
                <li><a href="registration.html">Registration</a></li>
                <li><a href="review-process.html">Review Process</a></li>
                <li><a href="paper-sub-guidelines.html#support">Contact Us</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Connect</h4>
            <ul>
                <li><a href="https://www.instagram.com/i3ceet_gcet/" target="_blank"><i
                            class="fab fa-instagram"></i> Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/galgotias-college-of-engineering-and-technology-greater-noida/"
                        target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                <li><a href="mailto:i3ceet2027@galgotiacollege.edu"><i class="fa fa-envelope"></i> Email Us</a></li>
            </ul>
            <p style="margin-top: 2rem; color: var(--text-muted); font-size: 0.8rem;">
                &copy; 2027 I3CEET Conference. All Rights Reserved.
            </p>
        </div>
    </div>
</footer>
<div id="back-to-top" class="back-to-top" title="Back to Top">
    <i class="fa fa-arrow-up"></i>
</div>`;

function injectFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
} else {
    injectFooter();
}
