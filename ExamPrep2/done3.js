//PROBLEM3

let continentsForEvents = {
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
            },
            Vatican: {
                name: "Vatican",
                capital: "Vatican City",
                officialLanguage: "Italian",
                population: 1000,
                area: 0.44,
                politicalStatus: "Monarchy",
                monarch: "Francis",
                officialCurrency: "Euro(EUR)"
            }
        }
    },
    Asia: {
        name: "Asia",
        countries: {
            Russia: {
                name: "Russia",
                capital: "Moscow",
                officialLanguage: "Russian",
                population: 144463451,
                area: 17075200,
                politicalStatus: "Republic",
                president: "Vladimir Putin",
                officialCurrency: "Russian ruble(RUB)"
            },
            China: {
                name: "China",
                capital: "Beijing",
                officialLanguage: "Chinese",
                population: 1403500365,
                area: 9596961,
                politicalStatus: "Republic",
                president: "Xi Jinping",
                officialCurrency: "Renminbi(CNY)"
            }
        }
    }
};

function showData(){
    $('.continent-data').show();
    $('.continent-country').show();

}

function hideData() {
    $('.continent-data').hide();
    $('.continent-country').hide();
}

function clearData() {
    $('.continent-data').empty();
    $('.continent-country').empty();
}

function attachEvents(continents) {
    attachContinentEvents(continents);
}

function attachContinentEvents(continents){
    $('.continent').click(function (e) {
        e.preventDefault();

        if($(this).hasClass('shown')){
            $(this).removeClass('shown');

            hideData();
            clearData();
        }else{
            clearData();

            $(this).parent().find('.shown').removeClass('shown');
            $(this).addClass('shown');

            let continentName = $(this).find('.continent-title').text();

            renderSingleContinentInHTML(continents[continentName]);

            attachCountryEvents(continents[continentName]);
            showData();
        }
    })
}

function attachCountryEvents(continent) {
    $('.dropdown-select').change(function (e) {
        e.preventDefault();

        let countryName = $(this).val();

        clearData();

        renderSingleCountryInHTML(continent['countries'][countryName]);
    })
}

renderAllContinentsInHTML(continents);
attachEvents(continents); //pass the continents object