import { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const result = await emailjs.sendForm(
        'service_8hi3scn', // Reemplazar con tu Service ID de EmailJS
        'template_rzsdeel', // Reemplazar con tu Template ID de EmailJS
        form.current,
        'x7CMrMthi32Y_hKmj' // Reemplazar con tu Public Key de EmailJS
      );

      if (result.text === 'OK') {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: '¡Mensaje enviado con éxito!'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="contact" id="contact">
      <h2>Contacto</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p>¿Interesado en trabajar juntos? ¡Hablemos!</p>
          <div className="social-links">
            <a href="https://github.com/nahuelmendez6" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/nahuel-alejandro-mendez-maturano-87b207285" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://x.com/nahumendz" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
        <form ref={form} className="contact-form" onSubmit={handleFormSubmit}>
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
          <button 
            type="submit" 
            className="submit-btn"
            disabled={status.loading}
          >
            {status.loading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
          {status.message && (
            <div className={`form-status ${status.success ? 'success' : status.error ? 'error' : ''}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact; 