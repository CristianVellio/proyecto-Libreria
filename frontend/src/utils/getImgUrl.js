const getImgUrl = (name) => {
  const baseUrl = "https://tu-dominio.com/assets/libros/"; // Cambia a tu URL base
  return `${baseUrl}${name}`;
};

export { getImgUrl };
