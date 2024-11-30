import { useEffect, useState } from "react";

const categorias = [
  "Elige un genero",
  "Negocios",
  "Ficcion",
  "Terror",
  "Aventura",
];

export const MasVendidos = () => {
  const [libros, setLibros] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("Elige un genero");

  useEffect(() => {
    fetch("libros.json")
      .then((res) => res.json())
      .then((data) => setLibros(data));
  }, []);

  const librosFiltrados =
    categoriaSeleccionada === "Elige un genero"
      ? libros
      : libros.filter(
          (libro) => libro.categoria === categoriaSeleccionada.toLowerCase()
        );

  console.log(librosFiltrados);

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
      {librosFiltrados.map((libro, index) => (
        <div key={index}>{libro.titulo}</div>
      ))}
    </div>
  );
};

export default MasVendidos;
