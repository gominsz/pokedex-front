const axios = require("axios");

const fetchPokemon = () => {
  const url = "http://localhost:4444/pokemon/14/informations;";

  fetch(url).then((response) => console.log(response.json()));
};

fetchPokemon();
