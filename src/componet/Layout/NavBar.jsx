import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar bg-white shadow-sm sticky-top py-3">
      <div className="container-fluid px-4 d-flex flex-wrap justify-content-between align-items-center">

        
        <NavLink className="navbar-brand fw-bold text-primary fs-4 d-flex align-items-center me-4" to="/">
          <i className="fas fa-bolt text-warning me-2"></i> FlashDrop
        </NavLink>

        
        <div className="d-flex flex-wrap gap-3 align-items-center me-auto">
          <NavLink to="/" className="text-dark text-decoration-none fw-semibold">Home</NavLink>
          <NavLink to="/about" className="text-dark text-decoration-none fw-semibold">About</NavLink>
          <NavLink to="/contact" className="text-dark text-decoration-none fw-semibold">Contact</NavLink>
          <NavLink to="/products" className="text-dark text-decoration-none fw-semibold">Products</NavLink>
        </div>

        
        <div className="d-flex gap-2 mt-2 mt-sm-0">
          <NavLink to="/login" className="btn btn-outline-primary rounded-pill px-4">
            Login
          </NavLink>
          <NavLink to="/register" className="btn btn-primary rounded-pill px-4">
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
