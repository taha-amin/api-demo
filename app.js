// import functions

import { getPokedex } from './fetch.js';

// grab DOM elements
const template = document.querySelector('#template');
const selectEl = document.querySelector('select');
const listEl = document.querySelector('#list');

async function loadPokedex() {
    const pokedex = await getPokedex();

    listEl.classList.add('pokemon');

    for (let pokemon of pokedex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const image = clone.querySelector('img');
        const type = clone.querySelector('h6');

        name.textContent = 'Name :' + pokemon.pokemon;

        type.textContent = 'Egg :' + pokemon.egg_group_1;
        image.src = pokemon.url_image;
        image.alt = pokemon.pokedex;

        listEl.appendChild(clone);
    }
}

// get user input and console log user clicked
selectEl.addEventListener('change', (e) => {
    console.log('user clicked');
});


// set event listeners
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state


