# Sushanth G S - Personal Portfolio Website

A modern, responsive, data-driven personal portfolio website created for **Sushanth G S**, Artificial Intelligence & Data Science Student at REVA University, Bengaluru.

Built with **React JS**, **Vite**, **CSS3**, and **React Icons**.

---

## 🌟 Key Features

- **Responsive & Modern Design**: Sleek dark theme (`#07090e`), glassmorphism cards, glowing gradient borders, and smooth micro-animations.
- **Sticky Navigation**: Active scroll section highlighting and mobile drawer hamburger menu.
- **Hero Banner**: High-impact introduction, interactive code preview card, and direct download link for `/Sushanth_GS_Resume.pdf`.
- **Data-Driven Architecture**: Structured data inside `src/data/portfolioData.js` for easy updates.
- **Interactive Projects Showcase**: Primary featured banner for **Auto Fix AI** alongside **Obstacle Avoiding Robot Car** and **Python & Data Science Projects**.
- **Interactive Certifications**: Cards for IBM, Deloitte, and AWS with interactive certification modal preview.
- **Categorized Skills**: Filterable skill cards with animated progress bars for Programming, AI & Data Science, Database, Web Dev, Tools, and Robotics.
- **Contact Form**: Frontend validation (empty fields & email format check) with interactive submission feedback.
- **Accessibility & SEO**: Semantic HTML5 tags, screen-reader friendly buttons, Google Fonts (`Inter` & `Outfit`), and metadata tags.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 18 (Hooks, Components, Context/State)
- **Build Tool**: Vite 5
- **Styling**: Vanilla CSS3 (Custom CSS Variables, Flexbox/Grid, Backdrop Filters, Glassmorphism, Keyframes)
- **Icons**: React Icons (`fa`, `si`)
- **Typography**: Google Fonts ('Outfit', 'Inter')

---

## 📁 Directory Structure

```text
personal portfolio/
├── public/
│   └── Sushanth_GS_Resume.pdf      # Resume download file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Sticky navbar with mobile toggle
│   │   ├── Hero.jsx                # Hero section with CTA & code card
│   │   ├── About.jsx               # About Me profile overview
│   │   ├── Education.jsx           # REVA University details card
│   │   ├── Skills.jsx              # Tabbed technical skills display
│   │   ├── Certifications.jsx      # IBM, Deloitte, AWS cert cards + modal
│   │   ├── Projects.jsx            # Auto Fix AI featured banner & cards
│   │   ├── Experience.jsx          # Academic & Project experience timeline
│   │   ├── Strengths.jsx           # Core strengths soft-skills cards
│   │   ├── CareerObjective.jsx     # Career objective quote banner
│   │   ├── Contact.jsx             # Validated contact form & details
│   │   └── Footer.jsx              # Footer links & copyright
│   ├── data/
│   │   └── portfolioData.js        # Central portfolio data module
│   ├── App.jsx                     # Root application container & scroll observer
│   ├── main.jsx                    # React DOM entry point
│   └── index.css                   # Global styling system & glassmorphism
├── index.html                      # HTML entry with font links & SEO tags
├── package.json                    # Project dependencies & scripts
├── vite.config.js                  # Vite configuration
└── README.md                       # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v16+ recommended) installed on your machine.

### Installation

1. Clone or download the workspace repository.
2. Open terminal in the project directory:
   ```bash
   npm install
   ```

### Development Server

Run the development server locally:
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the application live.

### Production Build

To build the static bundle for deployment:
```bash
npm run build
```
The output files will be generated inside the `dist/` directory, ready to be hosted on Vercel, Netlify, or GitHub Pages.

---

## 👤 Personal Information

- **Name**: Sushanth G S
- **Specialization**: Artificial Intelligence & Data Science Student
- **Institution**: REVA University, Bengaluru
- **Phone**: `+91 8618210795`
- **Email**: `sushanthgs28@gmail.com`
- **Location**: Bengaluru, Karnataka, India

---

© 2026 Sushanth G S. All rights reserved.
