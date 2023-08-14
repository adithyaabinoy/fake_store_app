import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  productsList: "",
};

export const fetchProductsList = createAsyncThunk("productsList", async () => {
  const response = await fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => console.log(data));
  return response;
});

const productsReducer = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProductsList.pending]: (state) => {
      state.loading = true;
    },
    [fetchProductsList.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsList = action.payload;
    },
    [fetchProductsList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productsReducer.reducer;
