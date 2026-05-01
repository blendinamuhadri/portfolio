import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  };

  emailjs.send(
    'service_wa10e94',
    'template_8dhjuyq',
    templateParams,
    'Co3BRTUBKaLu26OC4'
  )
  .then(() => {
    setStatus('success');
    setLoading(false);
    setFormData({ name: '', email: '', message: '' });
  })
  .catch((error) => {
    console.log('EmailJS Error:', error);
    setStatus('error');
    setLoading(false);
  });
};
  return (
    <div id="contact" className="contact">

      <div className="section-header">
        <span className="section-tag">Kontakti</span>
        <h2 className="section-title">Na Kontakto</h2>
        <div className="section-line"></div>
      </div>

      <div className="contact-wrap">

        <div className="contact-info">
          <h3>Le te flasim!</h3>
          <p>
            Jam e hapur per mundesi te reja, kolaborime
            dhe projekte interesante. Mos hezito te me kontaktosh.
          </p>
          <div className="contact-links">
            <a href="mailto:blendinamuhadri2019@gmail.com" className="contact-link">
              📧 blendinamuhadri2019@gmail.com
            </a>
            <a href="https://github.com/blendinamuhadri" target="_blank" rel="noreferrer" className="contact-link">
              💻 github.com/blendinamuhadri
            </a>
            <a href="https://linkedin.com/in/blendinamuhadri" target="_blank" rel="noreferrer" className="contact-link">
              🔗 linkedin.com/in/blendinamuhari
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Emri</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Emri juaj"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Mesazhi</label>
            <textarea
              name="message"
              className="form-textarea"
              placeholder="Shkruani mesazhin tuaj..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {status === 'success' && (
            <p style={{ color: '#C8A96E', fontSize: '0.88rem' }}>
              ✅ Mesazhi u dergua me sukses!
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#ff6b6b', fontSize: '0.88rem' }}>
              ❌ Dicka shkoi gabim. Provo perseri.
            </p>
          )}

          <button type="submit" className="form-btn" disabled={loading}>
            {loading ? 'Duke derguar...' : 'Dergo Mesazhin'}
          </button>
        </form>

      </div>
    </div>
  );
}

export default Contact;