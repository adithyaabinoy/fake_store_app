import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";
import productdetailsReducer from "./productdetailsReducer";

const store = configureStore({
  reducer: {
    productsList: productsReducer,
    productDetails: productdetailsReducer
  },
});

export default store;
