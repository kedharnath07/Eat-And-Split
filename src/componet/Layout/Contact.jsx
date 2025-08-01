import React from 'react';

function Contact() {
  return (
    <div className="d-flex justify-content-center align-items-start min-vh-100 bg-light py-5 px-3">
      <div className="card shadow-lg p-4 rounded-4 w-100" style={{ maxWidth: '600px' }}>
        <div className="card-body">
          <h2 className="text-center text-primary fw-bold mb-4 fs-2 fs-md-1">Contact Us</h2>

          <form>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-semibold">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="form-label fw-semibold">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary rounded-pill py-2 w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
