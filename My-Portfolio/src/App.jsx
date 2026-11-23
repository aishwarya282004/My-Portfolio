import "./App.css";

const skills = [
  { name: "HTML5", detail: "Web Page Structure", icon: "🌐" },
  { name: "CSS3", detail: "Styling, Responsive Design", icon: "🎨" },
  { name: "Bootstrap", detail: "Responsive UI Framework", icon: "🅱️" },
  { name: "JavaScript", detail: "DOM, Events, Programming", icon: "⚡" },
  { name: "React.js", detail: "Components, Hooks, UI", icon: "⚛️" },
  { name: "Java", detail: "Core Java, OOP Concepts", icon: "☕" },
  { name: "JDBC", detail: "Database Connectivity", icon: "🔗" },
  { name: "Spring", detail: "Spring Framework Basics", icon: "🌱" },
  { name: "Spring Boot", detail: "Application Development", icon: "🚀" },
  { name: "Spring MVC", detail: "MVC Architecture", icon: "🏗️" },
  { name: "Hibernate", detail: "ORM, Database Mapping", icon: "🔄" },
  { name: "REST APIs", detail: "API Development and Integration", icon: "🔌" },
  { name: "SQL", detail: "Queries, Joins, Data Manipulation", icon: "📊" },
  { name: "MySQL", detail: "Database, SQL Queries", icon: "🗄️" },
  { name: "Oracle", detail: "Database Management, SQL", icon: "🔴" },
];

const projects = [
  {
    number: "01",
    name: "MediSlot-Smart Doctor Appointment Booking System",
    subtitle:
      "Smart Web-Based Doctor Appointment Booking and Management System",
    description:
      "Developed a web-based appointment booking system where patients can search doctors, book appointments and manage appointment history. Doctors manage schedules, while administrators verify registrations.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Java",
      "SpringBoot",
      "MySQL",
    ],
  },
  {
    number: "02",
    name: "Medical Shop Management System",
    subtitle: "Medical Billing and Inventory Management",
    description:
      "Developed an application to manage medicine sales, billing and inventory. Includes medicine expiry reminders and reduces manual work in daily shop operations.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Java",
      "REST APIs",
      "MySQL",
    ],
  },
  {
    number: "03",
    name: "Hotel Management System",
    subtitle: "Hotel Booking and Management Website",
    description:
      "Developed a hotel management website with room availability, booking management and an admin interface for managing rooms and reservations.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
  },
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          Aishwarya<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="nav-button">
          Let's Talk <span>↗</span>
        </a>
      </nav>

      <section className="home" id="home">
        <div className="home-content">
          <div className="availability">
            <span className="status-dot"></span>
            Open to opportunities
          </div>
          <p className="intro-text">HELLO, I'M</p>
          <h1>
            Aishwarya
            <br />
            <span>Patil.</span>
          </h1>
          <h2>Java Full Stack Developer</h2>
          <p className="hero-description">
            Computer Science Engineering graduate with a passion for Java Full
            Stack Development, building responsive web applications, and
            creating practical software solutions. Eager to apply my technical
            skills, learn new technologies, and contribute to innovative
            projects.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work <span>↗</span>
            </a>
            <a
              href="/Aishwarya-Patil-Resume.pdf"
              download="Aishwarya-Patil-Resume.pdf"
              className="outline-btn"
            >
              Download Resume ↓
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/aishwarya-patil-735374314"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="mailto:aishwaryapatil22178@gmail.com">Email ↗</a>
          </div>
        </div>

        <div className="hero-image-area">
          <div className="image-glow"></div>
          <div className="profile-frame">
            <img src="/profile.jpg" alt="Aishwarya Patil" />
          </div>
          <div className="floating-card">
            <span>✦</span> Passionate about technology
          </div>
          <div className="circle-decoration"></div>
        </div>
        <a href="#about" className="scroll-down">
          SCROLL TO EXPLORE ↓
        </a>
      </section>

      <section className="section about" id="about">
        <div className="section-label">01 — ABOUT ME</div>
        <div className="about-grid">
          <div>
            <h2 className="section-title">
              A little about <span>myself.</span>
            </h2>
          </div>
          <div className="about-content">
            <h3>Computer Science Engineering Graduate</h3>
            <p>
              I am a Computer Science Engineering graduate from KLE College of
              Engineering and Technology Chikodi affiliated Visvesvaraya
              Technological University, Belagavi. I have a strong interest in
              Java Full Stack Development and building responsive web
              applications.
            </p>

            <p>
              I am eager to learn new technologies, improve my technical skills
              and begin my career in the IT industry.
            </p>
            <div className="about-details">
              <div className="detail-card">
                <span>EDUCATION</span>
                <h4>B.E. in Computer Science and Engineering</h4>
                <p>
                  KLE College of Engineering and Technology Chikodi, affiliated
                  with Visvesvaraya Technological University with 8.34 CGPA
                </p>
                <br />
                <h5>Diploma in Computer Science and Engineering</h5>
                <p>
                  KLE's C.B.Kore Polytechnic Chikodi, affiliated with Department
                  of Technical Education, Karnataka with 8.34 CGPA
                </p>
              </div>
              <div className="detail-card">
                <span>INTERESTS</span>
                <h4>Development & Designing</h4>
                <p>Java Full Stack · Frontend Development · Web Applications</p>
              </div>
              <div className="detail-card">
                <span>CAREER GOAL</span>
                <h4>Growing as a Developer</h4>
                <p>Contributing to real-world software projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="section-label">02 — WHAT I KNOW</div>
        <div className="section-heading">
          <h2 className="section-title">
            My technical <span>skills.</span>
          </h2>
          <p>Technologies and tools I work with.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.detail}</p>
              <span className="card-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-label">03 — MY WORK</div>
        <div className="section-heading">
          <h2 className="section-title">
            Featured <span>projects.</span>
          </h2>
          <p>Some of the projects I have developed.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-symbol">↗</span>
              </div>
              <h3>{project.name}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="section-label">04 — LET'S CONNECT</div>
        <div className="contact-content">
          <h2 className="section-title">
            Have an opportunity?
            <br />
            <span>Let's connect.</span>
          </h2>
          <p>
            I am eager to start my career, learn from experienced professionals
            and contribute to meaningful projects. Feel free to get in touch!
          </p>
          <a
            href="mailto:aishwaryapatil22178@gmail.com"
            className="primary-btn"
          >
            Get In Touch ↗
          </a>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <span>EMAIL</span>
            <h3>aishwaryapatil22178@gmail.com</h3>
            <a href="mailto:aishwaryapatil22178@gmail.com">Send Email ↗</a>
          </div>
          <div className="contact-card">
            <span>LINKEDIN</span>
            <h3>Professional Profile</h3>
            <a
              href="https://linkedin.com/in/aishwarya-patil-735374314"
              target="_blank"
              rel="noreferrer"
            >
              Visit LinkedIn ↗
            </a>
          </div>
          <div className="contact-card">
            <span>GITHUB</span>
            <h3>My Coding Projects</h3>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              Visit GitHub ↗
            </a>
          </div>
          <div className="contact-card">
            <span>LOCATION</span>
            <h3>Bengaluru, Karnataka, India</h3>
          </div>
        </div>
        <div className="resume-banner">
          <div>
            <span>MY RESUME</span>
            <h3>Want to know more about me?</h3>
          </div>
          <a
            href="/Aishwarya-Patil-Resume.pdf"
            download="Aishwarya-Patil-Resume.pdf"
            className="outline-btn"
          >
            Download CV ↓
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">
          Aishwarya<span>.</span>
        </a>
        <p>Designed & built with passion by Aishwarya Patil.</p>
        <p>© 2026 All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
