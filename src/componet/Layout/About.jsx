import React from 'react';

function About() {
  return (
    <div className="container d-flex justify-content-center align-items-start min-vh-100 bg-light py-5">
      <div className="card shadow-lg p-4 rounded-4" style={{ maxWidth: '800px', width: '100%' }}>
        <div className="card-body">
          <h2 className="text-center text-primary fw-bold mb-4">FlashDrop</h2>

          <p className="fs-5 text-muted">
            <strong>FlashDrop</strong> is a modern, user-friendly online shopping platform designed to offer a seamless and efficient shopping experience. Built with React and Bootstrap, it provides a clean interface and fast interactions for both customers and admins.
          </p>

          <hr />

          <h5 className="text-dark fw-semibold mt-4">🔧 Key Features:</h5>
          <ul className="list-unstyled fs-6">
            <li>🛒 Product listing and category filtering</li>
            <li>🔍 Search functionality with real-time filtering</li>
            <li>👤 Login/Register authentication</li>
            <li>🧾 My Data section for user-specific info</li>
            <li>🧑‍💼 Employee list (admin-related component)</li>
          </ul>

          <hr />

          <h5 className="text-dark fw-semibold mt-4">🎯 Project Goal</h5>
          <p className="fs-6 text-muted">
            The main aim of eKart is to simulate an e-commerce shopping experience with features like login, registration, product browsing, and basic user management — ideal for learning full-stack development concepts.
          </p>

          <hr />

          <h5 className="text-dark fw-semibold mt-4">👨‍💻 Developed By:</h5>
          <p className="fs-6">
            <strong>Kedharnath</strong><br />
            Email: <a href="mailto:Kedharnath907@gmail.com">Kedharnath907@gmail.com</a><br />
            Phone: 8919755409
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
