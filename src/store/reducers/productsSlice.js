import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE__URL } from "../../api/api";

const initialState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
  error: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (limit, thunkAPI) => {
    const response = await axios.get(BASE__URL + `/products`, {
      params: {
        limit: limit,
        offset: 0,
      },
    });
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filteredByPrice: (state, { payload }) => {
      state.filteredProducts = state.products.filter(
        (product) => product.price < payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});

export const { filteredByPrice } = productsSlice.actions;

export default productsSlice.reducer;
