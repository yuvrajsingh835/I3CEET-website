const navHTML = `
<div class="nav-container container">
    <div class="nav-brand-group">
        <a href="index.html" class="nav-logo-link">
            <img src="images/gcet_logo.png" alt="GCET Logo" class="nav-logo-img">
        </a>
    </div>

    <!-- Mobile Menu Toggle -->
    <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle navigation" style="display:none; background:none; border:none; font-size:1.5rem; color:#1e3a8a;">
        <i class="fa fa-bars show-icon"></i>
        <i class="fa fa-times hide-icon" style="display:none;"></i>
    </button>

    <ul class="nav-links" id="nav-links">
        <li><a href="index.html" id="nav-home"><i class="fa fa-home"></i> Home</a></li>
        <li class="has-dropdown">
            <a href="#" class="dropdown-trigger">Program <i class="fa fa-chevron-down"></i></a>
            <div class="mega-menu">
                <div class="mega-content">
                    <a href="plenary-speakers.html" id="nav-speakers">
                        <i class="fa fa-microphone"></i>
                        <span>Speakers</span>
                    </a>
                    <a href="technical-program.html" id="nav-program">
                        <i class="fa fa-calendar-alt"></i>
                        <span>Full Program</span>
                    </a>
                </div>
            </div>
        </li>
        <li class="has-dropdown">
            <a href="#" class="dropdown-trigger">Participation <i class="fa fa-chevron-down"></i></a>
            <div class="mega-menu">
                <div class="mega-content">
                    <a href="paper-sub-guidelines.html" id="nav-submission">
                        <i class="fa fa-file-upload"></i>
                        <span>Submission</span>
                    </a>
                    <a href="authors.html" id="nav-authors">
                        <i class="fa fa-users"></i>
                        <span>For Authors</span>
                    </a>
                    <a href="registration.html" id="nav-registration">
                        <i class="fa fa-user-plus"></i>
                        <span>Registration</span>
                    </a>
                </div>
            </div>
        </li>
        <li class="has-dropdown">
            <a href="#" class="dropdown-trigger">About <i class="fa fa-chevron-down"></i></a>
            <div class="mega-menu">
                <div class="mega-content">
                    <a href="committee.html" id="nav-committee">
                        <i class="fa fa-user-tie"></i>
                        <span>Committee</span>
                    </a>
                    <a href="sponsors.html" id="nav-sponsors">
                        <i class="fa fa-handshake"></i>
                        <span>Sponsors</span>
                    </a>
                    <a href="prevconf.html" id="nav-prev">
                        <i class="fa fa-history"></i>
                        <span>History</span>
                    </a>
                </div>
            </div>
        </li>
    </ul>

    <div class="nav-actions">
        <a href="registration.html" class="btn btn-primary" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">Register Now</a>
    </div>
</div>
<div class="nav-overlay" id="nav-overlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:90;"></div>`;

function injectNav() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;

        // Highlight active link based on current filename
        const currentPath = window.location.pathname;
        const page = currentPath.split("/").pop() || "index.html";

        const navMap = {
            "index.html": "nav-home",
            "plenary-speakers.html": "nav-speakers",
            "technical-program.html": "nav-program",
            "paper-sub-guidelines.html": "nav-submission",
            "authors.html": "nav-authors",
            "registration.html": "nav-registration",
            "committee.html": "nav-committee",
            "sponsors.html": "nav-sponsors",
            "prevconf.html": "nav-prev"
        };

        const activeId = navMap[page];
        if (activeId) {
            const activeLink = document.getElementById(activeId);
            if (activeLink) activeLink.classList.add('active');
        }

        // Mobile Menu Logic
        const toggle = document.getElementById('mobile-menu-toggle');
        const navLinks = document.getElementById('nav-links');
        const overlay = document.getElementById('nav-overlay');
        const showIcon = toggle.querySelector('.show-icon');
        const hideIcon = toggle.querySelector('.hide-icon');

        function toggleMenu() {
            const isActive = navLinks.classList.toggle('mobile-active');
            overlay.style.display = isActive ? 'block' : 'none';
            showIcon.style.display = isActive ? 'none' : 'block';
            hideIcon.style.display = isActive ? 'block' : 'none';
            document.body.style.overflow = isActive ? 'hidden' : '';

            // Add a class to nav placeholder to manage sticky behavior if needed
            navPlaceholder.classList.toggle('mobile-menu-open', isActive);
        }

        toggle.onclick = (e) => {
            e.stopPropagation();
            toggleMenu();
        };

        overlay.onclick = toggleMenu;

        // Close menu when clicking a link (especially for hash links)
        navLinks.querySelectorAll('a').forEach(link => {
            link.onclick = () => {
                if (navLinks.classList.contains('mobile-active')) {
                    toggleMenu();
                }
            };
        });

        // Handle resize logic more robustly
        function handleResize() {
            if (window.innerWidth <= 768) {
                toggle.style.display = 'block';
                if (!navLinks.classList.contains('mobile-active')) {
                    navLinks.style.display = 'none';
                }
            } else {
                toggle.style.display = 'none';
                navLinks.style.display = 'flex';
                overlay.style.display = 'none';
                document.body.style.overflow = '';
                navLinks.classList.remove('mobile-active');
                if (navPlaceholder) navPlaceholder.classList.remove('mobile-menu-open');
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
    }
}

// Add CSS for mobile-active via JS if not in modern.css to ensure it works
const style = document.createElement('style');
style.innerHTML = `
    @media (max-width: 768px) {
        #nav-links.mobile-active {
            display: flex !important;
            flex-direction: column;
            position: fixed;
            top: 0;
            right: 0;
            width: 80%;
            height: 100vh;
            background: white;
            z-index: 1000;
            padding: 5rem 2rem;
            box-shadow: -5px 0 25px rgba(0,0,0,0.15);
            gap: 1rem;
        }
        #nav-links.mobile-active li {
            width: 100%;
        }
        #nav-links.mobile-active li a {
            font-size: 1.1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0.75rem 0;
            border-bottom: 1px solid #f3f4f6;
            color: #1e3a8a;
        }
        #nav-links.mobile-active .mega-menu {
            position: static;
            transform: none;
            opacity: 1;
            visibility: visible;
            box-shadow: none;
            border: none;
            padding: 0 0 0 1rem;
            display: block;
        }
        #nav-links.mobile-active .mega-content {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }
        #nav-links.mobile-active .mega-content a {
            font-size: 0.95rem;
            padding: 0.5rem 0;
            color: var(--text-muted);
        }
        #nav-links.mobile-active .mega-content a i {
            display: none; /* Hide icons on mobile to save space */
        }
        #nav-links.mobile-active li a.active {
            color: var(--accent);
            border-bottom-color: var(--accent);
        }
    }
`;
document.head.appendChild(style);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
} else {
    injectNav();
}
