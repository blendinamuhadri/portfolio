import React from 'react';

function Experience() {
  return (
    <div id="experience" className="experience">

      <div className="section-header">
        <span className="section-tag">Rruga Ime</span>
        <h2 className="section-title">Eksperienca</h2>
        <div className="section-line"></div>
      </div>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2025 — 2026</div>
          <div className="timeline-role">Full Stack Developer Trainee</div>
          <div className="timeline-place">Tectigon Academy — Prishtine, Kosove</div>
          <div className="timeline-desc">
            Trajnim ne zhvillimin Full Stack , ku mesova shume rreth zhvillimit te aplikacioneve web, duke punuar
            si ne frontend ashtu edhe ne backend.Projekti perfundimtar ishte nje platforme e-commerce me React.js , Laravel dhe MySQL.
          </div>
          <div className="timeline-badges">
            <span className="timeline-badge">HTML</span>
            <span className="timeline-badge">CSS</span>
            <span className="timeline-badge">JavaScript</span>
            <span className="timeline-badge">PHP</span>
            <span className="timeline-badge">MySQL</span>
            <span className="timeline-badge">Bootstrap</span>
            <span className="timeline-badge">jQUERY</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2023 — Present</div>
          <div className="timeline-role">Studime ne SHKI</div>
          <div className="timeline-place">Universiteti — Prishtine, Kosove</div>
          <div className="timeline-desc">
            Baza e programimit, algoritmave dhe strukturave te te dhenave.
            Projektet akademike ne PHP dhe Java.
          </div>
          <div className="timeline-badges">
            <span className="timeline-badge">PHP</span>
            <span className="timeline-badge">Java</span>
            <span className="timeline-badge">Algoritme</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;