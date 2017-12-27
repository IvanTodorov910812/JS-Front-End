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
    $('.result').show();
    attachAccordeonEvents();
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



