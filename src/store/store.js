import { configureStore } from "@reduxjs/toolkit";
import categories from "./reducers/categoriesSlice";
import products from "./reducers/productsSlice";

export const store = configureStore({
  reducer: {
    categories: categories,
    products: products,
  },
});
