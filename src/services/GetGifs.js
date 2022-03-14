const api_key = "INSERT API KEY FROM GIPHY";

export default function getGifs({ keyword = "panda" } = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { url } = image.images.downsized;
        const { title, id } = image;

        return { title, id, url };
      });
      return gifs;
    });
}
