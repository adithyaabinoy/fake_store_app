import React, { useEffect, useState } from "react";
import "../styles/ProductDetails.css";
import { useDispatch } from "react-redux";
import { fetchproductDetails } from "../redux/productdetailsReducer";

const ProductDetails = () => {
  const [details, setDetails] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchproductDetails()).then((data) => setDetails(data.payload));
  }, []);
  console.log(details);

  return (
    <div className="productdetails">
      <div className="productdetail_image">
        <img src={details.image} alt="" />
      </div>
      <div className="productdetail_container">
        <p className="productdetail_title">{details.title}</p>
        <p className="productdetail_category">{details.category}</p>
        <p className="productdetail_price">{details.price}</p>
        <p className="productdetail_description">{details.description}</p>
        <div className="productdetail_buttons">
          <button className="add_btn">Add to basket</button>
          <button className="add_btn">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
