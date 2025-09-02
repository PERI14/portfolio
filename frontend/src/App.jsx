import React, { useEffect, useState } from 'react';

export default function App() {
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    fetchData('about', setAbout);
    fetchData('skills', setSkills);
    fetchData('projects', setProjects);
    fetchData('contact', setContact);
  }, []);

  async function fetchData(endpoint, setter) {
    try {
      const res = await fetch(`http://localhost:8080/api/${endpoint}`);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      setter(data);
    } catch (err) {
      console.error('Failed to load', endpoint, err);
    }
  }

  return (
    <div className="site">
      <header className="hero">
        <div className="hero-inner">
          <h1>{about.name || 'Your Name'}</h1>
          <p className="role">{about.role}</p>
          <p className="summary">{about.summary}</p>
          <div className="cta">
            <a href="#projects" className="btn">View Projects</a>
            <a href={`mailto:${contact.email || 'youremail@example.com'}`} className="btn muted">Contact</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="skills" className="card">
          <h2>Skills</h2>
          <ul className="skills">
            {skills.map((s,i) => <li key={i}>{s}</li>)}
          </ul>
        </section>

        <section id="projects" className="card">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((p,i) => (
              <article className="project" key={i}>
                <h3>{p.title}</h3>
                <p className="tech">{p.tech}</p>
                <p>{p.summary}</p>
                {p.link && <p><a href={p.link} target="_blank" rel="noopener noreferrer">Repo / Demo</a></p>}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="card">
          <h2>Contact</h2>
          <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          <p>GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer">{contact.github}</a></p>
          <p>LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">{contact.linkedin}</a></p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {about.name || 'Your Name'}</p>
      </footer>
    </div>
  );
}
