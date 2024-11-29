import bannerImg from "../../assets/banner.png";

export const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="banner" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          Nuevos Lanzamientos Esta Semana
        </h1>
        <p className="mb-10 ">
          Ya va siendo tiempo de actualizar tu lista de lectura, con algunos de
          nuestros ultimos y grandiosos lanzamientos del mundo literario. Desde
          estimulantes misterios hasta memorias cautivadoras, los lanzamientos
          de esta semana incluyen algo para todos
        </p>
        <button className="btn-primary">Suscribirse</button>
      </div>
    </div>
  );
};
