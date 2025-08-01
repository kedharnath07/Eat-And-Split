import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchapi from './Util';

function ProductDet() {
  const { id } = useParams();
  const [pro] = useFetchapi();

  if (!pro || pro.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h4 className="text-muted">Loading product...</h4>
      </div>
    );
  }

  const product = pro.find((ele) => ele.id == id);

  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h4 className="text-danger">Product not found!</h4>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div
        className="card mx-auto p-4 shadow-lg rounded-4"
        style={{ maxWidth: '700px', border: 'none' }}
      >
        {/* Image */}
        <div className="text-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>

        {/* Product Title */}
        <h2 className="fw-bold text-center mb-2">{product.title}</h2>

        {/* Meta Info */}
        <div className="text-center text-muted mb-3">
          <small>Category: <span className="text-dark fw-medium">{product.category}</span></small><br />
          <small>Estimated Delivery: <strong>2-4 Days</strong></small>
        </div>

        {/* Rating */}
        {product.rating?.rate && (
          <div className="text-center mb-3">
            <span className="badge bg-warning text-dark fs-6 px-3 py-2">
              ★ {product.rating.rate} / 5 ({product.rating.count} reviews)
            </span>
          </div>
        )}

        {/* Price */}
        <h3 className="text-success fw-bold text-center mb-3">${product.price}</h3>

        {/* Description */}
        <p className="lead text-center text-secondary mb-4 px-3">
          {product.description}
        </p>

        {/* Additional Features */}
        <div className="text-center mb-4">
          <span className="badge bg-light text-dark border me-2">Free Shipping</span>
          <span className="badge bg-light text-dark border me-2">7-Day Return</span>
          <span className="badge bg-light text-dark border">Trusted Seller</span>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn btn-primary px-4 py-2 rounded-pill shadow-sm">Add to Cart</button>
          <button className="btn btn-outline-success px-4 py-2 rounded-pill">Buy Now</button>
        </div>

        {/* Footer Actions */}
        <div className="text-center mt-4 text-muted small">
          <i className="bi bi-heart me-2"></i>
          <i className="bi bi-share-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default ProductDet;
