export const BASE_URL = "https://pokeapi.co/";

const createUrl = (base, path) => `${base}${path}`;

export const getUrl = () => [
  createUrl(BASE_URL, "/api/v2/pokemon/"),
  {
    method: "GET",
  }
];


// "https://api.mercadolibre.com/sites/MLA/search?q=sombreros"

// "https://pokeapi.co/api/v2/pokemon/

export const request = (url, options) => {
  // we can swap out fetch with another library later on if needed
  return fetch(url, options);
}

