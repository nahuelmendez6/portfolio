import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { FaGithub, FaLinkedin, FaTwitter, FaNodeJs, FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, /*SiMongodb, SiPostgresql,*/ SiJenkins, SiDjango, SiFlask, SiMysql } from 'react-icons/si';

import classroom1 from './assets/classroom/classroom1.png';
import classroom2 from './assets/classroom/classroom2.png';
import classroom3 from './assets/classroom/classroom3.png';
import classroom4 from './assets/classroom/classroom4.png';
import classroom5 from './assets/classroom/classroom5.png';
import classroom6 from './assets/classroom/classroom6.png';
import classroom7 from './assets/classroom/classroom7.png';
import classroom8 from './assets/classroom/classroom8.png';
import classroom9 from './assets/classroom/classroom9.png';
import classroom10 from './assets/classroom/classroom10.png';
import classroom11 from './assets/classroom/classroom11.png';

import ticket1 from './assets/tickets/ticket1.png';
import ticket2 from './assets/tickets/ticket2.png';
import ticket3 from './assets/tickets/ticket3.png';
import ticket4 from './assets/tickets/ticket4.png';
import ticket5 from './assets/tickets/ticket5.png';
import ticket6 from './assets/tickets/ticket6.png';
import ticket7 from './assets/tickets/ticket7.png';


import profile from './assets/profile.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.nav-links') && !event.target.closest('.hamburger')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

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
          • Arquitectura escalable y organizada siguiendo buenas prácticas de desarrollo backend`
          ,
      technologies: ["Node.js", "Express", "MySQLs", "JWT", "React"],
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
      // demoLink: "#",
      // githubLink: "#"
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
      ],
      demoLink: "#",
      githubLink: "#"

    },
    // {
    //   id: 3,
    //   title: "Microservicio de Notificaciones",
    //   shortDescription: "Sistema de notificaciones en tiempo real utilizando WebSockets y Redis para manejo de eventos.",
    //   fullDescription: `Sistema de notificaciones en tiempo real con las siguientes características:
    //     • Spring Boot para el backend
    //     • WebSockets para comunicación en tiempo real
    //     • Redis para manejo de eventos
    //     • Sistema de colas con RabbitMQ
    //     • Monitoreo con Prometheus y Grafana
    //     • Alta disponibilidad y escalabilidad`,
    //   technologies: ["Java", "Spring Boot", "Redis", "WebSocket"],
    //   images: [
    //     "https://via.placeholder.com/800x400",
    //     "https://via.placeholder.com/800x400",
    //     "https://via.placeholder.com/800x400"
    //   ],
    //   demoLink: "#",
    //   githubLink: "#"
    // }
  ];

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
