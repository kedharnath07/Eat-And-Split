import React from "react";
import Shimmer from "./Shimmer";
import ProductCard from "./ProductCard";
import useFetchapi from "./Util";
import { filterByCategory, filterBySearch } from "./filterUtils";

function Products() {
  const [
    pro, isLoading, errmsg, textsearch, filterditems,
    GetProd, setfilterditems, seterrmsg, setpro, settextserach
  ] = useFetchapi();

  function ProDec(id) {
    const updated = pro.map((ele) => ele.id === id
      ? { ...ele, discount: Math.max(0, ele.discount - 1) }
      : ele);
    setpro(updated);
    setfilterditems(updated);
  }

  function ProInc(id) {
    const updated = pro.map((ele) => ele.id === id
      ? { ...ele, discount: ele.discount + 1 }
      : ele);
    setpro(updated);
    setfilterditems(updated);
  }

  function Handlesearch() {
    const updateditems = filterBySearch(pro, textsearch);
    setfilterditems(updateditems);
  }

  function HandleCategory(category) {
    const updateditems = filterByCategory(pro, category);
    setfilterditems(updateditems);
  }

  return (
    <>
      {/* Category & Search Controls */}
      <div className="container-fluid mt-3">
        <div className="row gy-3 justify-content-center">

          {/* Category Buttons Group 1 */}
          <div className="col-12 col-md-4 d-flex flex-wrap justify-content-center gap-2">
            <button className="btn btn-outline-dark" onClick={() => HandleCategory('tv')}>
              <i className="fa-solid fa-tv"></i>
            </button>
            <button className="btn btn-outline-dark" onClick={() => HandleCategory('audio')}>
              <i className="fa-solid fa-volume-high"></i>
            </button>
            <button className="btn btn-outline-dark" onClick={() => HandleCategory('laptop')}>
              <i className="fa-solid fa-laptop"></i>
            </button>
          </div>

          {/* Category Buttons Group 2 */}
          <div className="col-12 col-md-4 d-flex flex-wrap justify-content-center gap-2">
            <button className="btn btn-outline-dark" onClick={() => HandleCategory('mobile')}>
              <i className="fa-solid fa-mobile-screen-button"></i>
            </button>
            <button className="btn btn-outline-dark" onClick={() => HandleCategory('gaming')}>
              <i className="fa-solid fa-gamepad"></i>
            </button>
            <button className="btn btn-outline-dark" onClick={() => HandleCategory('appliances')}>
              <i className="fa-solid fa-blender"></i>
            </button>
          </div>

          {/* Search Bar */}
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="input-group w-100" style={{ maxWidth: "400px" }}>
              <input
                type="search"
                placeholder="Search items"
                className="form-control"
                value={textsearch}
                onChange={(e) => settextserach(e.target.value)}
              />
              <button className="btn btn-info" onClick={Handlesearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Display */}
      <div className="container mt-5">
        <div className="row g-4">
          {isLoading && <Shimmer />}
          {!errmsg && !isLoading && filterditems.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard
                product={item}
                onIncrement={() => ProInc(item.id)}
                onDecrement={() => ProDec(item.id)}
              />
            </div>
          ))}
          {errmsg && <h1 className="text-danger text-center">{errmsg}</h1>}
        </div>
      </div>
    </>
  );
}

export default Products;
