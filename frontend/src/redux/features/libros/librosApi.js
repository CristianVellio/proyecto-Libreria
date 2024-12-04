import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../../../utils/baseURL";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseURL()}/api/libros`,
  credentials: "include",
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      Headers.set("authorization", `Bearer ${token}`);
    }
    return Headers;
  },
});

const librosApi = createApi({
  reducerPath: "librosApi",
  baseQuery,
  tagTypes: ["Libros"],
  endpoints: (builder) => ({
    fetchAllLibros: builder.query({
      query: () => "/",
      providesTags: ["Libros"],
    }),
    fetchLibroById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Libros", id }],
    }),
    addLibro: builder.mutation({
      query: (nuevoLibro) => ({
        url: `/crear-libro`,
        method: "POST",
        body: nuevoLibro,
      }),
      invalidatesTags: ["Libros"],
    }),
    updateLibro: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/editar/${id}`,
        method: "PUT",
        body: rest,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Libros"],
    }),
    deleteLibro: builder.mutation({
      query: (id) => ({
        url: `/eliminar/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Libros"],
    }),
  }),
});

export const {
  useFetchAllLibrosQuery,
  useFetchLibroByIdQuery,
  useAddLibroMutation,
  useUpdateLibroMutation,
  useDeleteLibroMutation,
} = librosApi;
export default librosApi;
