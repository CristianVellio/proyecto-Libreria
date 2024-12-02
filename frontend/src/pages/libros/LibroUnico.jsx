import { getImgUrl } from "../../utils/getImgUrl";

const LibroUnico = () => {
  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{libro.titulo}</h1>
      <div className="">
        <div>
          <img
            src={`${getImgUrl(libro.coverImg)}`}
            alt={libro.titulo}
            className="mb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default LibroUnico;
