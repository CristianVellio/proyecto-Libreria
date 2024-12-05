import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import news1 from "../../../public/assets/news/news-1.png";
import news2 from "../../../public/assets/news/news-2.png";
import news3 from "../../../public/assets/news/news-3.png";
import news4 from "../../../public/assets/news/news-4.png";

const noticias = [
  {
    id: 1,
    titulo: "Cumbre Mundial sobre el Clima Pide Acción Urgente",
    descripcion:
      "Líderes mundiales se reúnen en la Cumbre Mundial sobre el Clima para discutir estrategias urgentes para combatir el cambio climático, centrándose en la reducción de emisiones de carbono y el fomento de soluciones de energía renovable.",
    imagen: news1,
  },
  {
    id: 2,
    titulo: "Anuncian un Gran Avance en Tecnología de IA",
    descripcion:
      "Investigadores han anunciado un gran avance en inteligencia artificial, con nuevos avances que prometen revolucionar industrias desde la salud hasta las finanzas.",
    imagen: news2,
  },
  {
    id: 3,
    titulo: "Nueva Misión Espacial Busca Explorar Galaxias Distantes",
    descripcion:
      "La NASA ha revelado planes para una nueva misión espacial que tendrá como objetivo explorar galaxias distantes, con la esperanza de descubrir información sobre los orígenes del universo.",
    imagen: news3,
  },
  {
    id: 4,
    titulo:
      "Los Mercados Bursátiles Alcanzan Máximos Históricos en Medio de la Recuperación Económica",
    descripcion:
      "Los mercados bursátiles globales han alcanzado máximos históricos a medida que continúan surgiendo señales de recuperación económica tras los desafíos planteados por la pandemia global.",
    imagen: news4,
  },
  {
    id: 5,
    titulo:
      "Innovador Nuevo Smartphone Lanzado por Empresa Líder en Tecnología",
    descripcion:
      "Una empresa líder en tecnología ha lanzado su último modelo de smartphone, que cuenta con tecnología de vanguardia, mejorada duración de la batería y un nuevo diseño elegante.",
    imagen: news2,
  },
];

const Noticias = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Noticias</h2>

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
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {noticias.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-12">
              <div className="py-4">
                <Link to="/">
                  <h3 className="text-lg font-medium hover:text-blue-500 mb-4">
                    {item.titulo}
                  </h3>
                </Link>
                <div className="w-4 h-[4px] bg-primary mb-5"></div>
                <p className="text-sm text-gray-600">{item.descripcion}</p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Noticias;
