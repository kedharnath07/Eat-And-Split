import React from 'react';
import { Link } from 'react-router-dom';

function UserRegister() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light px-3">
      <div className="card shadow-lg p-4 rounded-4 w-100" style={{ maxWidth: '420px' }}>
        <div className="card-body">
          <h2 className="text-center text-primary fw-bold mb-4 fs-2 fs-md-1">
            Create an Account
          </h2>

          <form>
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

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Re-enter your password"
                required
              />
            </div>

            {/* Register Button */}
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary rounded-pill py-2 w-100">
                Register
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-muted mb-0">
              Already a user?{' '}
              <Link to="/login" className="fw-bold text-decoration-none">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
