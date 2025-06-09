import profile from '../../assets/profile.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="profile-image">
          <img src={profile} alt="Nahuel Mendez" />
        </div>
        <h1>Nahuel Mendez</h1>
        <h2>Full Stack Developer</h2>
        <p>Especializado en Backend Development</p>
      </div>
    </section>
  );
};

export default Hero; 