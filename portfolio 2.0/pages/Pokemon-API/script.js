'use strict';

const pokedex = document.getElementById('pokedex');
const pokeCache = {};

const displayPokemon = pokemon => {
  const pokemonString = pokemon
    .map(
      pokeman =>
        `
  <li class='card' onclick="selectPokemon(${pokeman.id})">
    <img class='card-img' src='${pokeman.image}'/>
    <h2 class='card-title'>${pokeman.id}. ${pokeman.name}</h2>
  </li>
  `
    )
    .join('');
  pokedex.innerHTML = pokemonString;
};

const selectPokemon = async id => {
  if (!pokeCache[id]) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokeman = await response.json();
    pokeCache[id] = pokeman;
    displayPopup(pokeman);
  }
  displayPopup(pokeCache[id]);
};

const displayPopup = pokeman => {
  // New image URL
  const image = pokeman.sprites['front_default'];
  // Map the type array
  const type = pokeman.types.map(type => type.type.name).join(', ');
  const htmlString = `
  <div class='popup'>
    <button id='closeBtn' onclick='closePopup()'>Close</button>
      <div class='card'>
        <img class='card-img' src='${image}'/>
        <h2 class='card-title'>${pokeman.id}. ${pokeman.name}</h2>
        <p><small>Height: ${pokeman.height} | Weight: ${pokeman.weight} | Type: ${type}</small></p>
      </div>
  </div>
  `;
  pokedex.innerHTML = htmlString + pokedex.innerHTML;
};

const closePopup = () => {
  const popup = document.querySelector('.popup');
  popup.parentElement.removeChild(popup);
};

// All Pokemon
const fetchPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
  const response = await fetch(url);
  const data = await response.json();
  const pokemon = data.results.map((result, index) => ({
    ...result,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }));
  displayPokemon(pokemon);
};
fetchPokemon();

// Gen 1 Pokemon
const fetchGen1 = () => {
  // Create empty array to hold the pokemon object promises
  const promises = [];

  // Loop through (1st gen.) pokemon objects
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
  }

  // Promise all pokemon objects to the results var.
  Promise.all(promises).then(results => {
    // Map pokemon data to get only name, id, image, and type
    const pokemon = results.map(data => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_default'],
      type: data.types.map(type => type.type.name).join(', '),
    }));
    displayPokemon(pokemon);
  });
};

// fetchPokemon();

// Gen 2 Pokemon
const fetchGen2 = () => {
  // Create empty array to hold the pokemon object promises
  const promises = [];

  // Loop through (2nd gen.) pokemon objects
  for (let i = 152; i <= 251; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
  }

  // Promise all pokemon objects to the results var.
  Promise.all(promises).then(results => {
    // Map pokemon data to get only name, id, image, and type
    const pokemon = results.map(data => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_default'],
      type: data.types.map(type => type.type.name).join(', '),
    }));
    displayPokemon(pokemon);
  });
};

// Gen 3 Pokemon
const fetchGen3 = () => {
  // Create empty array to hold the pokemon object promises
  const promises = [];

  // Loop through (3rd gen.) pokemon objects
  for (let i = 252; i <= 386; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
  }

  // Promise all pokemon objects to the results var.
  Promise.all(promises).then(results => {
    // Map pokemon data to get only name, id, image, and type
    const pokemon = results.map(data => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_default'],
      type: data.types.map(type => type.type.name).join(', '),
    }));
    displayPokemon(pokemon);
  });
};
// Gen 4 Pokemon
const fetchGen4 = () => {
  // Create empty array to hold the pokemon object promises
  const promises = [];

  // Loop through (3rd gen.) pokemon objects
  for (let i = 387; i <= 493; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
  }

  // Promise all pokemon objects to the results var.
  Promise.all(promises).then(results => {
    // Map pokemon data to get only name, id, image, and type
    const pokemon = results.map(data => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_default'],
      type: data.types.map(type => type.type.name).join(', '),
    }));
    displayPokemon(pokemon);
  });
};

// Gen 5 Pokemon
const fetchGen5 = () => {
  // Create empty array to hold the pokemon object promises
  const promises = [];

  // Loop through (3rd gen.) pokemon objects
  for (let i = 494; i <= 649; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
  }

  // Promise all pokemon objects to the results var.
  Promise.all(promises).then(results => {
    // Map pokemon data to get only name, id, image, and type
    const pokemon = results.map(data => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_default'],
      type: data.types.map(type => type.type.name).join(', '),
    }));
    displayPokemon(pokemon);
  });
};

// Gen 6 Pokemon
const fetchGen6 = () => {
  // Create empty array to hold the pokemon object promises
  const promises = [];

  // Loop through (6th gen.) pokemon objects
  for (let i = 650; i <= 721; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
  }

  // Promise all pokemon objects to the results var.
  Promise.all(promises).then(results => {
    // Map pokemon data to get only name, id, image, and type
    const pokemon = results.map(data => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_default'],
      type: data.types.map(type => type.type.name).join(', '),
    }));
    displayPokemon(pokemon);
  });
};

// Gen 7 Pokemon
const fetchGen7 = () => {
  // Create empty array to hold the pokemon object promises
  const promises = [];

  // Loop through (7th gen.) pokemon objects
  for (let i = 722; i <= 809; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
  }

  // Promise all pokemon objects to the results var.
  Promise.all(promises).then(results => {
    // Map pokemon data to get only name, id, image, and type
    const pokemon = results.map(data => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_default'],
      type: data.types.map(type => type.type.name).join(', '),
    }));
    displayPokemon(pokemon);
  });
};

// Gen 8 Pokemon
const fetchGen8 = () => {
  // Create empty array to hold the pokemon object promises
  const promises = [];

  // Loop through (8th gen.) pokemon objects
  for (let i = 810; i <= 898; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
  }

  // Promise all pokemon objects to the results var.
  Promise.all(promises).then(results => {
    // Map pokemon data to get only name, id, image, and type
    const pokemon = results.map(data => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_default'],
      type: data.types.map(type => type.type.name).join(', '),
    }));
    displayPokemon(pokemon);
  });
};
