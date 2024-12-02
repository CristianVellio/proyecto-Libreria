import { useState } from "react";
import CardLibro from "../libros/CardLibro";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFetchAllLibrosQuery } from "../../redux/features/libros/librosAPI";

const categorias = [
  "Elige un genero",
  "Negocios",
  "Libros",
  "Marketing",
  "Ficcion",
  "Terror",
  "Aventura",
];

export const MasVendidos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("Elige un genero");
  const { data: libros = [] } = useFetchAllLibrosQuery();

  const librosFiltrados =
    categoriaSeleccionada === "Elige un genero"
      ? libros
      : libros.filter(
          (libro) => libro.categoria === categoriaSeleccionada.toLowerCase()
        );

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Mas Vendidos</h2>
      {/* flitro por categoria */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          name="categoria"
          id="categoria"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {librosFiltrados.length > 0 &&
          librosFiltrados.map((libro, index) => (
            <SwiperSlide key={index}>
              <CardLibro libro={libro} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MasVendidos;
