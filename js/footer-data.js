const footerHTML = `
<footer>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-section">
                <h4>I3CEET-2027</h4>
                <p style="color: #9ca3af; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem;">
                    2nd International Conference on Computing, Communication and Energy Efficiency Technologies.
                    Organized by Galgotias College of Engineering and Technology (GCET).
                </p>
                <div class="footer-social" style="display: flex; gap: 1.25rem; font-size: 1.25rem;">
                    <a href="https://www.instagram.com/i3ceet_gcet/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/galgotias-college-of-engineering-and-technology-greater-noida/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="mailto:i3ceet2027@galgotiacollege.edu" title="Email Us"><i class="fa fa-envelope"></i></a>
                </div>
            </div>

            <div class="footer-section">
                <h4>Resources</h4>
                <ul>
                    <li><a href="resources/Template format.docx"><i class="fa fa-file-word"></i> Word Template</a></li>
                    <li><a href="resources/call_for_papers.pdf"><i class="fa fa-file-pdf"></i> Call for Papers</a></li>
                    <li><a href="paper-sub-guidelines.html"><i class="fa fa-info-circle"></i> Submission Guide</a></li>
                    <li><a href="registration.html"><i class="fa fa-user-plus"></i> Registration</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="committee.html">Organizing Committee</a></li>
                    <li><a href="plenary-speakers.html">Keynote Speakers</a></li>
                    <li><a href="sponsors.html">Our Sponsors</a></li>
                    <li><a href="prevconf.html">Conference History</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Venue</h4>
                <p style="color: #9ca3af; font-size: 0.9rem; line-height: 1.6;">
                    Galgotias College of Engineering and Technology (GCET)<br>
                    Knowledge Park II, Greater Noida,<br>
                    Uttar Pradesh, India - 201310
                </p>
                <a href="https://maps.app.goo.gl/qdZw1YLJTKPo7xcTA" target="_blank" style="display: inline-block; margin-top: 1rem; color: #f87171; font-weight: 700; text-decoration: none;">
                    <i class="fa fa-location-dot"></i> Get Directions
                </a>
            </div>
        </div>
        
        <div style="border-top: 1px solid #374151; padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <p style="color: #9ca3af; font-size: 0.85rem;">
                &copy; 2027 I3CEET Conference. All Rights Reserved.
            </p>
            <p style="color: #9ca3af; font-size: 0.85rem;">
                Developed by <a href="committee.html" style="color: white; font-weight: 600; text-decoration: none;">Student Team, GCET</a>
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
