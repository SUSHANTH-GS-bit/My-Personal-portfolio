function App() {
  return (
    <div className="portfolio">

      <header className="hero">
        <h1>Sushanth G S</h1>
        <h2>Artificial Intelligence & Data Science Student</h2>
        <p>Reva University, Bengaluru</p>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am Sushanth G S, a B.Tech Artificial Intelligence and Data Science
          student at Reva University, Bengaluru. I am interested in Artificial
          Intelligence, Data Science, Python, Machine Learning and software
          development. I enjoy learning new technologies and building
          practical projects.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="project">
          <h3>AI-Based Smart Logistics and Accessibility Intelligence Platform</h3>
          <p>
            An AI-powered platform designed to improve logistics, accessibility
            and transportation intelligence in the North Eastern Region.
          </p>
          <a
            href="https://github.com/SUSHANTH-GS-bit/AI-Based-Smart-Logistics-NER"
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        </div>

        <div className="project">
          <h3>Auto Fix AI – Car Troubleshooting Assistant</h3>
          <p>
            An AI-based assistant that helps car owners identify vehicle
            problems, understand possible solutions and find nearby garages.
          </p>
          <a
            href="https://github.com/SUSHANTH-GS-bit"
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        </div>

        <div className="project">
          <h3>Personal Portfolio Website</h3>
          <p>
            A personal portfolio website showcasing my skills, projects,
            certifications and learning journey.
          </p>
          <a
            href="https://github.com/SUSHANTH-GS-bit/My-Personal-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            View Repository →
          </a>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>

        <div className="skills">
          <span>Python</span>
          <span>C</span>
          <span>SQL</span>
          <span>Artificial Intelligence</span>
          <span>Data Science</span>
          <span>Machine Learning</span>
          <span>NumPy</span>
          <span>Pandas</span>
          <span>Matplotlib</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>GitHub</span>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>

        <p>
          Email:{" "}
          <a href="mailto:sushanthgs28@gmail.com">
            sushanthgs28@gmail.com
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/SUSHANTH-GS-bit"
            target="_blank"
            rel="noreferrer"
          >
            github.com/SUSHANTH-GS-bit
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </section>

      <footer>
        <p>© 2026 Sushanth G S</p>
      </footer>

    </div>
  );
}

export default App;