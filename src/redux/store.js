import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";

const store = configureStore({
  reducer: {
    productsReducer: productsReducer,
  },
});

export default store;
