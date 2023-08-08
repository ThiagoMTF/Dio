const offset = 0;
const limit = 10; 
const url = 'https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit='+limit;
const pokemonListHTML = document.getElementById('pokemonList');

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

//interface de comunicação de uma 'promisse'
//Por padrão o fetch usa o metodo GET
fetch(url)
    //semelhante ao TRY
    .then((response) => { return response.json(); })
    //then após then segue a ordem (primeiro then, quando acabar, executa o segundo then)
    .then((jsonBody) => { return jsonBody.results })
    .then((pokemonList) => {
        console.log(pokemonList);
        for (let index = 0; index < pokemonList.length; index++) {
            const pokemon = pokemonList[index];
            pokemonListHTML.innerHTML += convertPokemonToHtml(pokemon);           
        }
     })
    //catch error
    .catch((error) => { console.log(error); })
    //finally (sempre é executado)
    .finally(() => { console.log("Requisição concluida!"); })