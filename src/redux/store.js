import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";

const store = configureStore({
  reducer: {
    productsList: productsReducer,
  },
});

export default store;
