const getGif = async (category) => {
  const search_page = "https://api.giphy.com/v1/gifs/search";
  const api_key = "StwuWPHcyIRLC3vYvrbJL9WS15lYeMEZ";

  const url = `${search_page}?api_key=${api_key}&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};

export default getGif;
