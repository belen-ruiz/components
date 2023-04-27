export const BASE_URL = "https://pokeapi";

export const limit = "limit=151";

export const path =  ".co/api/v2/pokemon/";

const createUrl = (base, path, limit) => `${base}${path}${limit}`;


export const getUrl = () => [
  createUrl(BASE_URL, path, limit),
  {
    method: "GET",
  }
];


// "https://api.mercadolibre.com/sites/MLA/search?q=sombreros"

// "https://pokeapi.co/api/v2/pokemon/

export const request = (url, options) => {
  // we can swap out fetch with another library later on if needed
   fetch("https://pokeapi.co/api/v2/pokemon/", []);
}

