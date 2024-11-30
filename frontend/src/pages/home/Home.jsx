import { Banner } from "./Banner";
import { MasVendidos } from "./MasVendidos";
import Noticias from "./Noticias";
import Recomendados from "./Recomendados";

export const Home = () => {
  return (
    <>
      <Banner />
      <MasVendidos />
      <Recomendados />
      <Noticias />
    </>
  );
};
