import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import classroom1 from '../../assets/classroom/classroom1.png';
import classroom2 from '../../assets/classroom/classroom2.png';
import classroom3 from '../../assets/classroom/classroom3.png';
import classroom4 from '../../assets/classroom/classroom4.png';
import classroom5 from '../../assets/classroom/classroom5.png';
import classroom6 from '../../assets/classroom/classroom6.png';
import classroom7 from '../../assets/classroom/classroom7.png';
import classroom8 from '../../assets/classroom/classroom8.png';
import classroom9 from '../../assets/classroom/classroom9.png';
import classroom10 from '../../assets/classroom/classroom10.png';
import classroom11 from '../../assets/classroom/classroom11.png';

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
      title: "Aula virtual para seguimiento de prácticas profesionalizantes",
      shortDescription: "Aula virtual para gestión de profesores y alumnos",
      fullDescription: `Aula virtual desarrollada para facilitar el seguimiento de prácticas profesionalizantes entre profesores y estudiantes. Incluye funcionalidades avanzadas como:

          • API RESTful desarrollada con Node.js y Express
          • Autenticación basada en JWT y control de acceso por roles (administrador, docente, alumno)
          • Base de datos MongoDB utilizando Mongoose para modelado flexible de datos
          • Sistema de notificaciones en tiempo real mediante WebSockets para avisos, comentarios y cambios de estado
          • Documentación de la API con Swagger para facilitar la integración y mantenimiento
          • Tests automatizados con Jest para asegurar la calidad del código y prevenir errores
          • Gestión de usuarios, materias, prácticas y evaluaciones
          • Interfaz amigable para la carga y seguimiento de reportes por parte de los estudiantes
          • Panel de control para docentes con estadísticas y control de entregas
          • Arquitectura escalable y organizada siguiendo buenas prácticas de desarrollo backend`,
      technologies: ["Node.js", "Express", "MySQL", "JWT", "React"],
      images: [
        classroom1,
        classroom2,
        classroom3,
        classroom4,
        classroom5,
        classroom6,
        classroom7,
        classroom8,
        classroom9,
        classroom10,
        classroom11
      ],
    },
    {
      id: 2,
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