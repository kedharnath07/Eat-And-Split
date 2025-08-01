import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center text-md-start"
      style={{
        background: 'linear-gradient(to right, #f8f9fa, #e0f7fa)',
        minHeight: '100vh',
        padding: '50px 0',
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          
          {/* Text Content */}
          <div className="col-md-6 mt-5 mt-md-0">
            <h1 className="display-5 fw-bold text-dark mb-4">
              Welcome to FlashDrop
            </h1>
            <p className="text-muted mb-4 lead">
              Get the best products delivered to your doorstep with lightning speed. Enjoy exclusive discounts, daily deals, and seamless checkout.
            </p>
            <Link to="/products">
              <button className="btn btn-success btn-lg px-5 py-3 rounded-pill shadow-sm">
                Start Shopping
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
              className="img-fluid rounded-5 shadow-sm w-100 max-w-500"
              alt="Shopping illustration"
              style={{ maxWidth: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
