import { useState, useEffect } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaTwitter, FaNodeJs, FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiJenkins } from 'react-icons/si';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    // Limpiar el formulario
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión de Inventario",
      shortDescription: "Backend robusto desarrollado con Node.js y Express, implementando arquitectura RESTful y autenticación JWT.",
      fullDescription: `Sistema completo de gestión de inventario con las siguientes características:
        • API RESTful con Node.js y Express
        • Autenticación JWT y manejo de roles
        • Base de datos MongoDB con Mongoose
        • Sistema de notificaciones en tiempo real
        • Documentación con Swagger
        • Tests automatizados con Jest`,
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      images: [
        "https://via.placeholder.com/800x400",
        "https://via.placeholder.com/800x400",
        "https://via.placeholder.com/800x400"
      ],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "API de Análisis de Datos",
      shortDescription: "API RESTful para procesamiento y análisis de datos en tiempo real, construida con Python y FastAPI.",
      fullDescription: `API de análisis de datos con las siguientes características:
        • FastAPI para alta performance
        • Procesamiento de datos en tiempo real
        • Integración con PostgreSQL
        • Sistema de caché con Redis
        • Documentación automática
        • Despliegue con Docker`,
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      images: [
        "https://via.placeholder.com/800x400",
        "https://via.placeholder.com/800x400",
        "https://via.placeholder.com/800x400"
      ],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Microservicio de Notificaciones",
      shortDescription: "Sistema de notificaciones en tiempo real utilizando WebSockets y Redis para manejo de eventos.",
      fullDescription: `Sistema de notificaciones en tiempo real con las siguientes características:
        • Spring Boot para el backend
        • WebSockets para comunicación en tiempo real
        • Redis para manejo de eventos
        • Sistema de colas con RabbitMQ
        • Monitoreo con Prometheus y Grafana
        • Alta disponibilidad y escalabilidad`,
      technologies: ["Java", "Spring Boot", "Redis", "WebSocket"],
      images: [
        "https://via.placeholder.com/800x400",
        "https://via.placeholder.com/800x400",
        "https://via.placeholder.com/800x400"
      ],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo">Nahuel</div>
          <div className="nav-links">
            <a href="#about">Sobre Mí</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Proyectos</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contacto</a>
          </div>
          <button 
            className="dark-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="profile-image">
            <img src="https://via.placeholder.com/200" alt="Nahuel Mendez" />
          </div>
          <h1>Nahuel Mendez</h1>
          <h2>Full Stack Developer</h2>
          <p>Especializado en Backend Development</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>Sobre Mí</h2>
        <div className="about-content">
          <p>
            Soy un desarrollador Full Stack con una sólida experiencia en desarrollo backend.
            Me especializo en crear soluciones robustas y escalables utilizando las mejores prácticas
            y tecnologías modernas.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Habilidades</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>
                <span className="tech-icon"><FaNodeJs /></span>
                <span>Node.js</span>
              </li>
              <li>
                <span className="tech-icon"><FaPython /></span>
                <span>Python</span>
              </li>
              <li>
                <span className="tech-icon"><FaJava /></span>
                <span>Java</span>
              </li>
              <li>
                <span className="tech-icon"><SiMongodb /></span>
                <span>MongoDB</span>
              </li>
              <li>
                <span className="tech-icon"><SiPostgresql /></span>
                <span>PostgreSQL</span>
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>
                <span className="tech-icon"><FaReact /></span>
                <span>React</span>
              </li>
              <li>
                <span className="tech-icon"><SiJavascript /></span>
                <span>JavaScript</span>
              </li>
              <li>
                <span className="tech-icon"><SiTypescript /></span>
                <span>TypeScript</span>
              </li>
              <li>
                <span className="tech-icon"><FaHtml5 /></span>
                <span>HTML5</span>
              </li>
              <li>
                <span className="tech-icon"><FaCss3Alt /></span>
                <span>CSS3</span>
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>DevOps & Tools</h3>
            <ul>
              <li>
                <span className="tech-icon"><FaGitAlt /></span>
                <span>Git</span>
              </li>
              <li>
                <span className="tech-icon"><FaDocker /></span>
                <span>Docker</span>
              </li>
              <li>
                <span className="tech-icon"><FaAws /></span>
                <span>AWS</span>
              </li>
              <li>
                <span className="tech-icon"><SiJenkins /></span>
                <span>CI/CD</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Proyectos</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.images[0]} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <button 
                    className="view-project-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    Ver Detalles
                  </button>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
            </div>
            <div className="modal-body">
              <div className="project-gallery">
                {selectedProject.images.map((image, index) => (
                  <img key={index} src={image} alt={`${selectedProject.title} - ${index + 1}`} />
                ))}
              </div>
              <div className="project-details">
                <h3>Descripción</h3>
                <p>{selectedProject.fullDescription}</p>
                <h3>Tecnologías</h3>
                <div className="project-tech">
                  {selectedProject.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">Ver Demo</a>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Section */}
      <section className="blog" id="blog">
        <h2>Blog Técnico</h2>
        <div className="blog-grid">
          <article className="blog-card">
            <div className="blog-image">
              <img src="https://via.placeholder.com/400x250" alt="Blog Post 1" />
            </div>
            <div className="blog-content">
              <h3>Arquitectura de Microservicios: Mejores Prácticas</h3>
              <p>Explorando las mejores prácticas para diseñar y mantener una arquitectura de microservicios escalable.</p>
              <div className="blog-meta">
                <span>15 Mar 2024</span>
                <span>10 min lectura</span>
              </div>
              <a href="#" className="read-more">Leer más →</a>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image">
              <img src="https://via.placeholder.com/400x250" alt="Blog Post 2" />
            </div>
            <div className="blog-content">
              <h3>Optimización de Bases de Datos NoSQL</h3>
              <p>Guía práctica para optimizar el rendimiento de bases de datos NoSQL en aplicaciones de alta concurrencia.</p>
              <div className="blog-meta">
                <span>10 Mar 2024</span>
                <span>8 min lectura</span>
              </div>
              <a href="#" className="read-more">Leer más →</a>
            </div>
          </article>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contacto</h2>
        <div className="contact-container">
          <div className="contact-info">
            <p>¿Interesado en trabajar juntos? ¡Hablemos!</p>
            <div className="social-links">
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="social-icon" />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Tu email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tu mensaje"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Mensaje</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
