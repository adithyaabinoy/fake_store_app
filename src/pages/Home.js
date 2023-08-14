import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from "../redux/productsReducer";

const Home = () => {
  const [productList, setProductList] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsList()).then((data) => setProductList(data));
  }, []);
  console.log(productList);

  return <div></div>;
};

export default Home;
