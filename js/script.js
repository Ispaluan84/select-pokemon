
const pokemonSelect = document.getElementById('pokemon-select')
const btn = document.getElementById('get-pokemon')
const infoPokemon = document.getElementById('info-pokemon');

btn.addEventListener('click', () => {
    const selectedPokemon = pokemonSelect.value
fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)

    .then (response => {
        if (!response.ok) {
            throw new Error('Ha sido imposible cargar la página')
        } return response.json();
    })

    .then (data => { 
        infoPokemon.innerHTML =`
        <img src="${data.sprites.front_default}" alt="${data.name}"/>
        <h2>${data.name}</h2>
        <p><strong>Altura:</strong>${data.height}
        <p><strong>Peso:</strong>${data.weight}`

        }).catch(error => console.error(error))
        
        })
    