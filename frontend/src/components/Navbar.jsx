import { Link } from "react-router";
import { FaSearch, FaRegUser, FaRegHeart, FaBookReader } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";

const navegacion = [
  { name: "Tablero", href: "/tablero" },
  { name: "Pedidos", href: "/pedidos" },
  { name: "Pagina Carrito", href: "/carrito" },
  { name: "Terminar", href: "/terminar" },
];

export const Navbar = () => {
  const [estaDropDownAbierto, setEstaDropDownAbierto] = useState(false);
  const productosCarrito = useSelector(
    (state) => state.carrito.productosCarrito
  );

  const usuarioActual = false;
  return (
    <header className="max-w-screen-2xl mx-4 px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* lado izquierdo */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <FaBookReader className="size-6" />
          </Link>

          {/* busqueda */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <FaSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Buscar"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            ></input>
          </div>
        </div>

        {/* lado derecho */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {usuarioActual ? (
              <>
                <button
                  onClick={() => setEstaDropDownAbierto(!estaDropDownAbierto)}
                >
                  <img
                    src={avatarImg}
                    alt="avatar"
                    className={`size-7 rounded-full ${
                      usuarioActual ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/* mostrar DropDowns */}
                {estaDropDownAbierto && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navegacion.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setEstaDropDownAbierto(false)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <FaRegUser className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <FaRegHeart className="size-6" />
          </button>

          <Link
            to="/carrito"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md"
          >
            <FiShoppingCart className="" />
            {productosCarrito.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1 ">
                {productosCarrito.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1 ">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};
