import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import ticket1 from '../../assets/tickets/ticket1.png';
import ticket2 from '../../assets/tickets/ticket2.png';
import ticket3 from '../../assets/tickets/ticket3.png';
import ticket4 from '../../assets/tickets/ticket4.png';
import ticket5 from '../../assets/tickets/ticket5.png';
import ticket6 from '../../assets/tickets/ticket6.png';
import ticket7 from '../../assets/tickets/ticket7.png';
import ticket8 from '../../assets/tickets/ticket8.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Sistema de gestión de comedor",
      shortDescription: "Sistema de emisión de tickets por turno para comedor.",
      fullDescription: `Sistema web integral para gestionar turnos de comedor hospitalario, con las siguientes características:
        • Backend en Django y Django REST Framework
        • Base de datos relacional con MySQL
        • Generación y validación de tickets por usuario y turno
        • Interfaz interactiva desarrollada con React
        • Visualización en tiempo real mediante WebSockets
        • Informes estadísticos con Chart.js
        • Despliegue del sistema en contenedores con Docker
        • Autenticación y autorización por roles (administrador, cocina, hospital)
        • Sistema de stock de insumos alimenticios
        • Soporte PWA para uso en dispositivos móviles`,
      technologies: ["Python", "Django", "MySQL", "JavaScript", "React", "Docker"],
      images: [
        ticket1,
        ticket2,
        ticket3,
        ticket4,
        ticket5,
        ticket6,
        ticket7,
        ticket8,
      ],
      url: "https://ticmeal.vercel.app/",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <FaChevronRight />,
    prevArrow: <FaChevronLeft />,
  };

  return (
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
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project-btn"
                >
                  Ver Página
                </a>
                <button 
                  className="view-project-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

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
                <Slider {...sliderSettings}>
                  {selectedProject.images.map((image, index) => (
                    <div key={index} className="slide">
                      <img src={image} alt={`${selectedProject.title} - ${index + 1}`} />
                    </div>
                  ))}
                </Slider>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 