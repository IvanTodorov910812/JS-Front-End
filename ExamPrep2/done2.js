let continentsForHTML = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            }
        }
    }
};

renderDataInHTML(continentsForHTML);
function renderDataInHTML(continents) {
    renderAllContinentsInHTML(continents);
}

function renderAllContinentsInHTML(continets){
    for(let key in continets){
        let continent = continets[key];

        let continentDiv = $('<div class="continent">')
            .append('<h5 class="continent-title">' + continent['name'] + '</h5>');

        $('.continents').append(continentDiv);

        renderSingleContinentInHTML(continent);
    }
}

function renderSingleContinentInHTML(continent) {
//RENDER CONTINENT DATA
    let countriesDiv = $('<div class="countries">');

    let dropDownSelect = $('<select class="dropdown-select">')
        .append('<option disabled selected value> -- select an option -- </option>');

    let countries = continent['countries'];

    for (let key in countries) {
        let country = countries[key];

        dropDownSelect
            .append('<option value="' + country['name'] + '">' + country['name'] + '</option>');
        renderSingleCountryInHTML(country);
    }

    countriesDiv.append(dropDownSelect);

    //RENDER IMAGE
    let continentImageDiv = $('<div class="continent-image">')
        .append('<img src="images/' + continent['name'].toLowerCase() + '.png">');

    $('.continent-data')
        .append('<h2 class="continent-title">' + continent['name'] + '</h2>')
        .append('<h3 class="continent-title">Countries</h3>')
        .append(countriesDiv)
        .append(continentImageDiv);
}
function renderSingleCountryInHTML(country) {
    let countryTitle = $('<div class="country-title">')
        .append('<h2>' + country['name'] + '</h2>');

    let countryData = $('<div class="country-data">')
        .append('<div class="country-capital"><strong>Capital:</strong> <div>' + country['capital'] + '</div></div>')
        .append('<div class="country-official-language"><strong>Official Language:</strong><div>' + country['officialLanguage'] + '</div></div>')
        .append('<div class="country-population"><strong>Population:</strong> <div>' + country['population'] + '</div></div>')
        .append('<div class="country-area"><strong>Area:</strong> <div>' + country['area'] + ' km<sup>2</sup></div></div>')
        .append('<div class="country-political-status"><strong>Political Status:</strong><div>' + country['politicalStatus'] + '</div></div>');

    if (country['politicalStatus'] === 'Republic') {
        countryData
            .append('<div class="country-president"><strong>President:</strong><div>' + country['president'] + '</div></div>');
    } else {
        countryData
            .append('<div class="country-monarch"><strong>Monarch:</strong><div>' + country['monarch'] + '</div></div>');
    }
    countryData
        .append('<div class="country-official-currency"><strong>Official Currency:</strong><div>' + country['officialCurrency'] + '</div></div>');

    $('.continent-country')
        .append(countryTitle)
        .append(countryData);
}


