let locationRender = {
    name: 'Dianabad',
    longitude: '95.242',
    latitude: '94.123',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Bulbasaur',
            power: 1000,
            evolvedFrom: 'Something',
            evolvesTo: 'Something else'
        }
    }
};
renderDataInHTML(locationRender);

function renderDataInHTML(location) {
    let containerDiv = $('<div class="container">');
    let resultDiv = $('<div class="result">');
    let locationDiv = $('<div class="location">');
    let pokemonsDiv = $('<div class="pokemons">');

    renderLocation(locationDiv, location);
    renderPokemons(pokemonsDiv, location['pokemons']);

    resultDiv.append(pokemonsDiv);
    resultDiv.append(locationDiv);
    containerDiv.append(resultDiv);
    $('body').append(containerDiv);
}

function renderLocation(locationDiv, location) {

    let locationName = $('<h1 class="location-name">Location: '+ location['name'] + '</h1>');

    let locationCoordinatesDiv = $('<div class="location-coordinates">');
    locationCoordinatesDiv
        .append('<h2 class="location-longitude">Longitude: '+ location['longitude'] +'</h2>')
        .append('<h2 class="location-latitude">Latitude: '+ location['latitude'] +'</h2>')
    ;

    locationDiv.append(locationName);
    locationDiv.append(locationCoordinatesDiv);
}

function renderPokemons(pokemonsDiv, pokemons) {
    if(!pokemons){
        return;
    }

    for(let index in pokemons ){
        let pokemon = pokemons[index];

        let pokemonDiv = $('<div class="pokemon">');

        let pokemonTitleDiv = $('<div class="pokemon-title">'+ pokemon['name'] +'</div>');

        let pokemonStatsDiv = $('<div class="pokemon-stats">')
            .append('<div class="pokemon-name">Name: ' + pokemon['name'] + '</div>')
            .append('<div class="pokemon-power">Power: ' + pokemon['power'] + 'pp</div>')
            .append('<div class="pokemon-evolved-from">Envolved From: ' + pokemon['evolvedFrom'] + '</div>')
            .append('<div class="pokemon-evolves-to">Envolves To: ' + pokemon['evolvesTo'] + '</div>')
        ;

        pokemonDiv
            .append(pokemonTitleDiv)
            .append(pokemonStatsDiv);

        pokemonsDiv.append(pokemonDiv);
    }
}