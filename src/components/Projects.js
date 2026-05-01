import React from 'react';

function Projects() {
  return (
    <div id="projects" className="projects">

      <div className="section-header">
        <span className="section-tag">Portofoli</span>
        <h2 className="section-title">Projektet e Realizuara</h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">

        <div className="project-card">
          <div className="project-img">🛒</div>
          <div className="project-body">
            <div className="project-type">E-Commerce</div>
            <h3 className="project-title">Online Shop</h3>
            <p className="project-desc">Platforme me autentifikim, shporte blerjesh dhe panel administrativ.</p>
            <div className="project-techs">
              <span className="project-tech">React.js</span>
              <span className="project-tech">Laravel</span>
              <span className="project-tech">MySQL</span>
            </div>
            <a href="https://github.com/blendinamuhadri/nexwear" target="_blank" rel="noreferrer" className="project-link">Shiko Projektin →</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">📋</div>
          <div className="project-body">
            <div className="project-type">Hotel Booking App</div>
            <h3 className="project-title">BookIT</h3>
            <p className="project-desc">Aplikacion per rezervim dhomash.</p>
            <div className="project-techs">
              <span className="project-tech">React.js</span>
              <span className="project-tech">Spring Boot</span>
              <span className="project-tech">Mysql</span>
            </div>
            <a href="https://github.com/blendinamuhadri/BookIT" target="_blank" rel="noreferrer" className="project-link">Shiko Projektin →</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">💬</div>
          <div className="project-body">
            <div className="project-type">Travel</div>
            <h3 className="project-title">Travel Blog</h3>
            <p className="project-desc">Aplikacion web per blog udhetimesh.</p>
            <div className="project-techs">
              <span className="project-tech">JavaScript</span>
              <span className="project-tech">PHP</span>
              <span className="project-tech">MySQL</span>
            </div>
            <a href="https://github.com/aldamuhadri/ProjektiWeb" target="_blank" rel="noreferrer" className="project-link">Shiko Projektin →</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;