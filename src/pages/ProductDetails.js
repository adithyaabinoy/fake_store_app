import React from "react";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  return (
    <div className="productdetails">
      <div className="productdetail_image">
        <img
          src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
        />
      </div>
      <div className="productdetail_container">
        <p className="productdetail_title">n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
        <p className="productdetail_category">Electronics</p>
        <p className="productdetail_price">999</p>
        <p className="productdetail_description">n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
        <div className="productdetail_buttons">
        <button className="add_btn">Add to basket</button>
        <button className="add_btn">Wishlist</button>
        </div>
       
      </div>
    </div>
  );
};

export default ProductDetails;
