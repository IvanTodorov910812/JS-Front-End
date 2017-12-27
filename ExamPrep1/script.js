//PROBLEM 1
let location = {
    name: 'Izgrev',
    longitude: '95.243',
    latitude: '94.231',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Wartortle',
            power: 500,
            evolvedFrom: 'Squirtle',
            evolvesTo: 'Blastoise'
        },
        2: {
            name: 'CherryBerry',
            power: 9999,
            evolvedFrom: 'Cherry',
            evolvesTo: 'Berry'
        }
    }
};
renderData(location);

function renderData(location) {
    console.log('Location: ' + location['name']);
    console.log('Longitude: ' + location['longitude'] + ' ' + 'Latitude: ' + location['latitude']);
    console.log('Pokemons:');
    let pokemons = location['pokemons'];
    if(pokemons){
        for(let index in pokemons ){
            let pokemon = pokemons[index];
            console.log('###Name: ' + pokemon['name']);
            console.log('###Power: ' + pokemon['power'] + 'pp');
            console.log('###Evolved From: ' + pokemon['evolvedFrom']);
            console.log('###Evolves To: ' + pokemon['evolvesTo']);
        }
    }
}

//PROBLEM 2

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


// PROBLEM 3

function attachEvents() {
    $('.location-form>button').click(function (e) {
        $('.result').show();

        e.preventDefault();

        let inputValue = $('.location-input').val();

        if (inputValue.length > 0) {
            $('.result').append('<div class="result-element">' + inputValue + '</div>');
        }

        $('.location-input').val('');
    });
}


// PROBLEM 4

function attachFormEvents() {
    $('.location-form>button').click(function (e) {
        e.preventDefault();

        let inputValue = $('.location-input').val();

        if (inputValue.length > 0) {
            obtainData(inputValue);
        }

        $('.location-input').val('');
    });
}

function obtainData(location){
    $
        .get('https://pokemoncodex.firebaseio.com/locations/'+ location +'.json')
        .then(renderLocationData)
        .catch(function (error) { console.log(error); });
    ;
}

function renderLocationData(location) {
    $('.result').empty();
    $('.result').show();

    if(!location){
        $('.result').append('<div class="error">Error loading location. </div>');
        return;
    }

    let locationDiv = $('<div class="location">');
    let pokemonsDiv = $('<div class="pokemons">');

    renderLocation(locationDiv, location);
    renderPokemons(pokemonsDiv, location['pokemons']);

    $('.result')
        .append(pokemonsDiv)
        .append(locationDiv);
    attachAccordeonEvents();
}

function attachAccordeonEvents() {
    $('.pokemon-title').click(function (e) {
        e.preventDefault();

        var $this = $(this);

        if($this.next().hasClass('show')){
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        }else {
            $this.parent().parent().find('.pokemon-stats').removeClass('show');
            $this.parent().parent().find('.pokemon-stats').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    })
}
attachFormEvents();

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