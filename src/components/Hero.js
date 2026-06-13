import React from 'react';
import profileImg from '../IMG_7614.jpeg';

function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="hero-container">

        <div>
          <div className="hero-tag">Full Stack Developer</div>
          <h1 className="hero-name">Blendina<br />Muhadri</h1>
          <p className="hero-subtitle">Universiteti UBT — Viti i Trete</p>
          <p className="hero-desc">
            Studente e apasionuar pas teknologjise ne Shkenca Kompjuterike
            dhe Inxhinieri ne UBT. E fokusuar ne Full Stack Development,
            gjithmone e hapur per te mesuar skills te reja dhe gati
            per te kontribuar ne projekte reale.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">Projektet e Mia</a>
            <a href="#contact" className="btn-outline">Kontakto</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-number">5+</div>
              <div className="stat-label">Projekte</div>
            </div>
            <div>
              <div className="stat-number">3</div>
              <div className="stat-label">Muaj Trajnim</div>
            </div>
            <div>
              <div className="stat-number">7+</div>
              <div className="stat-label">Teknologji</div>
            </div>
          </div>
        </div>

        <div className="hero-avatar">
          <img src={profileImg} alt="Blendina Muhadri" className="hero-avatar-img" />
        </div>

      </div>
    </div>
  );
}

export default Hero;