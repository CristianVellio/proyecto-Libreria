import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import libroApi from "./features/libros/librosAPI";

export const store = configureStore({
  reducer: {
    carrito: cartReducer,
    [libroApi.reducerPath]: libroApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(libroApi.middleware),
});
