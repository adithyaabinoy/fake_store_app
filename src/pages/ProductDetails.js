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
    <>
      {details && details.length > 0
        ? details.map((e, i) => {
          console.log("hello");
            return (
              <div className="productdetails">
                
                <p>{e.title}</p>
                <div className="productdetail_image">
                  <img
                    src={e.image}
                    alt=""
                  />
                </div>
                <div className="productdetail_container">
                  <p className="productdetail_title">
                    n publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </p>
                  <p className="productdetail_category">Electronics</p>
                  <p className="productdetail_price">999</p>
                  <p className="productdetail_description">
                    n publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </p>
                  <div className="productdetail_buttons">
                    <button className="add_btn">Add to basket</button>
                    <button className="add_btn">Wishlist</button>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default ProductDetails;
