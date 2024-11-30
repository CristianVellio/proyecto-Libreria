import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  productosCarrito: [],
};

const cartSlice = createSlice({
  name: "carrito",
  initialState: initialState,
  reducers: {
    anadirACarrito(state, action) {
      const libroExistente = state.productosCarrito.find(
        (item) => item._id === action.payload._id
      );
      if (!libroExistente) {
        state.productosCarrito.push(action.payload);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Libro añadido al Carrito!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else
        Swal.fire({
          position: "center",
          icon: "error",
          title: "El libro ya se encuentra en el Carrito!",
          showConfirmButton: false,
          timer: 2000,
        });
    },
    quitarDelCarrito(state, action) {
      state.productosCarrito = state.productosCarrito.filter(
        (item) => item._id !== action.payload._id
      );
    },
    limpiarCarrito(state) {
      state.productosCarrito = [];
    },
  },
});

export const { anadirACarrito, quitarDelCarrito, limpiarCarrito } =
  cartSlice.actions;
export default cartSlice.reducer;
