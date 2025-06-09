import { useState, useEffect } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
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

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo">Nahuel</div>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>Sobre Mí</a>
          <a href="#skills" onClick={closeMenu}>Habilidades</a>
          <a href="#projects" onClick={closeMenu}>Proyectos</a>
          <a href="#blog" onClick={closeMenu}>Blog</a>
          <a href="#contact" onClick={closeMenu}>Contacto</a>
          <button 
            className="dark-mode-toggle"
            onClick={() => {
              setDarkMode(!darkMode);
              closeMenu();
            }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 