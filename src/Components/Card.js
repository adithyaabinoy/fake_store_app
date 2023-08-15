import React from "react";
import "../styles/Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Card = ({ category, image, price, rating, title }) => {
  return (
    <div className="cards">
      <div className="card_image">
        <img className="product_images" src={image} alt="" />
      </div>
      <div className="product_details">
        <p className="product_rating">
          {rating}
          <FontAwesomeIcon icon={faStar} />
        </p>
        <p className="product_title">{title}</p>
        <p className="product_category">{category}</p>
        <p className="product_price">
          <span>₹ {price}</span>{" "}
          <span>
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
