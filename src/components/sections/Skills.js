import { FaNodeJs, FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiDjango, SiFlask, SiMysql } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>
              <span className="tech-icon"><SiDjango /></span>
              <span>Django</span>
            </li>
            <li>
              <span className="tech-icon"><SiFlask /></span>
              <span>Flask</span>
            </li>
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
              <span className="tech-icon"><SiMysql /></span>
              <span>MySQL</span>
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
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills; 