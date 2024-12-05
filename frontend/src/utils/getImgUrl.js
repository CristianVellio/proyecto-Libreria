const getImgUrl = (name) => {
  const baseUrl = "https://proyecto-libreria.vercel.app/assets/libros/"; // Cambia a tu URL base
  return `${baseUrl}${name}`;
};

export { getImgUrl };
