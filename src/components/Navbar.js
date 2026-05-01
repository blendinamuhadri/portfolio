import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">YN</div>
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;