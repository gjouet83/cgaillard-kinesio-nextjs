const imageLoader = ({ src, width, quality }) => {
  return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default imageLoader;
