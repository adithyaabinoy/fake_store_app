import React from "react";
import "../styles/Cards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Card = ({ category, description, image, price, rating, title }) => {
  return (
    <div className="cards">
      <div className="card_image">
        <img className="product_images" src={image} alt="" />
      </div>
      <div className="product_details">
        <p className="product_rating">{rating}<FontAwesomeIcon icon={faStar} /></p>
        <p className="product_title">{title}</p>
        <p className="product_description">{description}</p>
        <p className="product_price">{price}</p>
      </div>
    </div>
  );
};

export default Card;
