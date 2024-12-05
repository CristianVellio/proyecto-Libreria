function getImgUrl(name) {
  return new URL(`../../public/assets/Libros/${name}`, import.meta.url);
}

export { getImgUrl };
