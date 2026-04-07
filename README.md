# I3CEET-2027: 2nd International Conference on Computing, Communication and Energy Efficiency Technologies

Welcome to the official repository for the **I3CEET-2027** conference website. This project serves as the digital hub for the 2nd International Conference on Computing, Communication and Energy Efficiency Technologies, organized by **Galgotias College of Engineering and Technology (GCET)**, Greater Noida, India.

The website provides a premium, IEEE-style digital experience for delegates, speakers, and authors, featuring real-time updates and a modern architectural design.

---

## ✨ Features & Design Philosophy

The website is engineered with a **premium, state-of-the-art aesthetic**, prioritizing high readability and academic professionalism. 

- **IEEE-Style Design**: Clean layouts, professional scales, and a focus on essential information (Call for Papers, Submission, Registration).
- **Dynamic Content Architecture**:
  - **Modular Navigation**: Centralized in `js/nav-data.js` for site-wide consistency.
  - **Interactive News Ticker**: Real-time announcements managed via `js/ticker-data.js`.
  - **Automated Dates Management**: Deadlines and milestones updated through `js/dates-data.js`.
- **Author-Centric Resources**: Dedicated sections for paper submission guidelines, CMT portal links, and downloadable IEEE templates.
- **Visual Archives**: A high-performance gallery track showcasing "Conference Memories" from previous editions.
- **Mobile-First Responsiveness**: Tailored breakpoints for seamless access on tablets and smartphones using a modern CSS Grid system.

## 🛠️ Technical Stack

- **Foundational**: Semantic HTML5 & Modern CSS3 (Vanilla).
- **Interactivity**: Vanilla JavaScript (ES6+) for modular injection and UI logic.
- **Fonts & Identity**: Google Fonts (Inter) and Font Awesome 6 (Icons).
- **Architecture**: Decoupled data-from-design pattern using asynchronous placeholder injection.

## 📂 Project Structure

- `index.html`: Main landing page with hero branding and conference highlights.
- `/css`: Core styling system including `modern.css` and `reset.css`.
- `/js`: Configuration logic for dynamic components (Nav, Footer, Dates, Ticker).
- `/resources`: Downloadable assets including Paper Templates, Copyright Forms, and Call for Papers (PDF).
- `/images`: High-resolution logos, organizing committee profiles, and event archives.
- `registration.html`, `authors.html`, `committee.html`: Specialized sub-pages for specific conference tracks.

## 🌐 Quick Start & Maintenance

To run the project locally:
1. Clone the repository: `git clone https://github.com/yuvrajsingh835/I3CEET-website.git`
2. Open `index.html` in any modern web browser.

**Pro-Tip for Organizers:** To update the conference schedule or breaking news, focus exclusively on the files inside the `/js` directory. Changes made there will propagate across all pages automatically.

---
© 2027 I3CEET Organizing Committee | Galgotias College of Engineering and Technology (GCET). All rights reserved.
