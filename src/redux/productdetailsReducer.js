import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: "",
    productDetails: ""
};

export const fetchproductDetails = createAsyncThunk("productDetails", async() => {
const response = await fetch("https://fakestoreapi.com/products/1")
.then((data) => data.json())
.then((data) => data)
return response
})


const productdetailsReducer = createSlice({
    name: "productDetails",
    initialState,
    extraReducers : {
        [fetchproductDetails.pending] : (state) => {
            state.loading = true;
        },
        [fetchproductDetails.fulfilled]: (state,action) => {
            state.loading = false;
            state.productDetails = action.payload;
        },
        [fetchproductDetails.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        
    },
});

export default productdetailsReducer.reducer;