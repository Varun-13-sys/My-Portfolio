import React from "react";

const CONTACT_EMAIL = "varuna0213@gmail.com"; 

export default function Portfolio() {
  const handleMailTo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = encodeURIComponent(form.name.value || "Anonymous");
    const subject = encodeURIComponent(form.subject.value || "Feedback from portfolio");
    const message = encodeURIComponent(
      `Name: ${form.name.value}\nEmail: ${form.email.value}\n\nMessage:\n${form.message.value}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${message}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center text-white font-bold">
              VA
            </div>
            <div>
              <h1 className="text-lg font-semibold">Varun A</h1>
              <p className="text-xs text-gray-500">
                Java FullStack Developer • BE (Info. Science & Engg) 2025
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Hi, I'm Varun — Java FullStack Developer
            </h2>
            <p className="mt-4 text-gray-700">
              2025 BE graduate in Information Science & Engineering from{" "}
              <strong>PES Institute of Technology and Management, Shivamogga</strong>.
              Currently interning at <strong>Dhee Coding Lab</strong> in Java FullStack Development.
              I build scalable REST APIs, secure web apps, and integrate ML models into applications.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700"
              >
                See projects
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50"
              >
                Contact me
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-14 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">About</h3>
          <p className="mt-3 text-gray-700">
            I am a passionate Full Stack Developer skilled in building RESTful APIs, frontend
            interfaces, and backend systems. I love combining logic with creativity to build
            applications that are both functional and beautiful.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold">Technical Skills</h4>
            <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
              <li>Frontend: HTML, CSS, JavaScript, ReactJS</li>
              <li>Backend: Core Java, JDBC, Hibernate, JPA, Servlet, JSP, Spring, Spring Boot</li>
              <li>Databases: MySQL, SQL</li>
              <li>Tools: Eclipse, IntelliJ IDEA, VS Code, Git, GitHub, Postman</li>
              <li>Other: REST APIs, JWT, Filters, Authorization</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold">Additional Knowledge</h4>
            <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
              <li>Basics of Python & ML (KMeans, Linear Regression, Supervised & Unsupervised Learning)</li>
              <li>Cloud Basics: EC2, S3</li>
              <li>Networking, OS Concepts, Windows OS</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-10">
          <h3 className="text-xl font-semibold">Projects</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold">Web Application Integrated with ML</h4>
              <p className="mt-2 text-sm text-gray-700">
                Team Lead — Centralized web app for BE students to access study materials.
                ML model recommends best-suited jobs based on uploaded resumes and skillsets.
                Includes MCQ games, badges, and daily tech news integration.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold">Accommodation Marketplace (Internship)</h4>
              <p className="mt-2 text-sm text-gray-700">
                Airbnb-like app with user roles (Admin/User). Implemented JWT authorization,
                session management, filters, and REST endpoints using Spring Boot.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold">Library Management System</h4>
              <p className="mt-2 text-sm text-gray-700">
                DBMS project with CRUD operations and book management workflows.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold">Food Donation & Expense Tracker</h4>
              <p className="mt-2 text-sm text-gray-700">
                Developed responsive web apps to manage food donations and track expenses.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-10 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Experience</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700 list-disc list-inside">
            <li>
              <strong>Intern — Dhee Coding Lab (Training Institute)</strong>: Building REST endpoints,
              JWT authorization, and full-stack features using Spring Boot and React.
            </li>
            <li>
              <strong>Team Lead — Web App Integrated with ML</strong>: Led a team of developers,
              implemented ML integration, and handled project management.
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-10 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Send Feedback</h3>
            <form onSubmit={handleMailTo} className="mt-4 space-y-3">
              <input name="name" className="w-full p-2 border rounded-md" placeholder="Your Name" />
              <input name="email" className="w-full p-2 border rounded-md" placeholder="Your Email" />
              <input name="subject" className="w-full p-2 border rounded-md" placeholder="Subject" />
              <textarea name="message" rows="4" className="w-full p-2 border rounded-md" placeholder="Your Message"></textarea>
              <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Send Feedback
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 text-sm text-gray-700 list-disc list-inside">
              <li>GitHub: <a href="https://github.com/Varun-13-sys" target="_blank" rel="noreferrer" className="text-indigo-600">Varun-13-sys</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/varun0213/" target="_blank" rel="noreferrer" className="text-indigo-600">Varun A</a></li>
              <li>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600">{CONTACT_EMAIL}</a></li>
              <li><a href="/resume.pdf" className="text-indigo-600">Download Resume</a></li>
            </ul>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Built by Varun A.</p>
        </footer>
      </main>
    </div>
  );
}
