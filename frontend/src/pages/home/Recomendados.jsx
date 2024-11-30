import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardLibro from "../libros/CardLibro";

export const Recomendados = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch("libros.json")
      .then((res) => res.json())
      .then((data) => setLibros(data));
  }, []);
  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Recomendaciones para ti</h2>

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
        {libros.length > 0 &&
          libros.slice(8, 18).map((libro, index) => (
            <SwiperSlide key={index}>
              <CardLibro libro={libro} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Recomendados;
