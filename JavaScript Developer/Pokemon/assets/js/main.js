function convertPokemonToHtml(pokemon){
    return `
        <li class="pokemon">
            <span class="number">`+pokemon.name+`</span>
            <span class="name">Bulbasaur</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                    alt="`+pokemon.name+`">
            </div>
        </li>`
}
    const pokemonListHTML = document.getElementById('pokemonList');
    pokeApi.getPokemons().then((pokemonList) => {
        const newList = pokemonList.map((pokemon) => {
            return convertPokemonToHtml(pokemon);
        })
        const newHtml = newList.join('');
        pokemonListHTML.innerHTML += newHtml;
     })

