export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

    const resp = await fetch(url);

    const json = await resp.json();

    return json.results;
}

export async function getStarWarsCharacters() {
    let url = 'https://swapi.dev/api/people/1/';

    const resp = await fetch(url);

    const json = await resp.json();

    return json.results;
}