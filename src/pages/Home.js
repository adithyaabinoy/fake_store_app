import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from "../redux/productsReducer";
import Card from "../Components/Card";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [productList, setProductList] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsList()).then((data) => setProductList(data.payload));
  }, []);
  console.log(productList);

  return (
    <div className="home_container">
      {productList && productList.length > 0
        ? productList.map((e, i) => {
            return (
              <Link to="/products/1">
              <Card
                key={i}
                image={e.image}
                rating={e.rating.rate}
                title={e.title}
                category={e.category}
                price={e.price}
              />
              </Link>
            );
          })
        : "loadingdata"}
    </div>
  );
};

export default Home;
