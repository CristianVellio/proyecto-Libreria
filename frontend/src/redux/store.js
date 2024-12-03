import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import libroApi from "./features/libros/librosAPI";
import pedidoApi from "./features/pedidos/pedidosApi";

export const store = configureStore({
  reducer: {
    carrito: cartReducer,
    [libroApi.reducerPath]: libroApi.reducer,
    [pedidoApi.reducerPath]: pedidoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(libroApi.middleware, pedidoApi.middleware),
});
