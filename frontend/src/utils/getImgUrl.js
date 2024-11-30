function getImgUrl(name) {
  return new URL(`../assets/libros/${name}`, import.meta.url);
}

export { getImgUrl };
