import React from 'react';

function Skills() {
  return (
    <div id="skills" className="skills">

      <div className="section-header">
        <span className="section-tag">Kompetencat</span>
        <h2 className="section-title">Aftesite Teknike</h2>
        <div className="section-line"></div>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <div className="skill-cat">Frontend</div>
          <div className="skill-name">Ndertimi i Nderfaqeve</div>
          <div className="skill-tags">
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Bootstrap CSS</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-cat">Backend</div>
          <div className="skill-name">Logjika e Serverit</div>
          <div className="skill-tags">
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express.js</span>
            <span className="skill-tag">REST API</span>
            <span className="skill-tag">Laravel</span>
            <span className="skill-tag">Spring Boot</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-cat">Database</div>
          <div className="skill-name">Menaxhimi i te Dhenave</div>
          <div className="skill-tags">
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">PostgreSQL</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-cat">Tools</div>
          <div className="skill-name">Mjetet e Punes</div>
          <div className="skill-tags">
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Postman</span>
            <span className="skill-tag">Trello</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;