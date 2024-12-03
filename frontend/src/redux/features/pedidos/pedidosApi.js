import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../../../utils/baseURL";

const pedidoApi = createApi({
  reducerPath: "pedidoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/pedidos`,
    credentials: "include",
  }),
  tagTypes: ["Pedidos"],
  endpoints: (builder) => ({
    createPedido: builder.mutation({
      query: (nuevoPedido) => ({
        url: "/",
        method: "POST",
        body: nuevoPedido,
      }),
    }),
    getPedidoPorEmail: builder.query({
      query: (email) => ({
        url: `/email/${email}`,
      }),
      providesTags: ["Pedidos"],
    }),
  }),
});

export const { useCreatePedidoMutation, useGetPedidoPorEmailQuery } = pedidoApi;

export default pedidoApi;
