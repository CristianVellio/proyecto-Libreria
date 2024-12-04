import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import librosApi from "./features/libros/librosApi";
import pedidoApi from "./features/pedidos/pedidosApi";

export const store = configureStore({
  reducer: {
    carrito: cartReducer,
    [librosApi.reducerPath]: librosApi.reducer,
    [pedidoApi.reducerPath]: pedidoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(librosApi.middleware, pedidoApi.middleware),
});
