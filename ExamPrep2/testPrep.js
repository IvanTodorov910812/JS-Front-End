//let continents = {
//    Europe: {
//        name: "Europe",
//        countries: {
//            Bulgaria: {
//                name: "Bulgaria",
//                capital: "Sofia",
//                officialLanguage: "Bulgarian",
//                population: 7000000,
//                area: 111000,
//                politicalStatus: "Republic",
//                president: "Rumen Radev",
//                officialCurrency: "LEV(BGN)"
//            },
//            Vatican: {
//                name: "Vatican",
//                capital: "Vatican City",
//                officialLanguage: "Italian",
//                population: 1000,
//                area: 0.44,
//                politicalStatus: "Monarchy",
//                monarch: "Francis",
//                officialCurrency: "Euro(EUR)"
//            }
//        }
//    },
//    Asia: {
//        name: "Asia",
//        countries: {
//            Russia: {
//                name: "Russia",
//                capital: "Moscow",
//                officialLanguage: "Russian",
//                population: 144463451,
//                area: 17075200,
//                politicalStatus: "Republic",
//                president: "Vladimir Putin",
//                officialCurrency: "Russian ruble(RUB)"
//            },
//            China: {
//                name: "China",
//                capital: "Beijing",
//                officialLanguage: "Chinese",
//                population: 1403500365,
//                area: 9596961,
//                politicalStatus: "Republic",
//                president: "Xi Jinping",
//                officialCurrency: "Renminbi(CNY)"
//            }
//        }
//    }
//};
//
//renderAllContinents(continents);
//renderSingleContinent(continents['Europe']);
//renderSingleCountry(continents['Europe']['countries']['Bulgaria']);
//
//
//function renderAllContinents(continents) {
//    for(let key in continents){
//        let continent = continents[key];
//        console.log(continent['name']);
//    }
//}
//
//
//function renderSingleContinent(continent) {
//        console.log(continent['name']);
//        console.log('Countries:');
//        let countries = continent['countries'];
//        for(let key in countries){
//            let country = countries[key];
//            console.log('$$$' + country['name']);
//        }
//}
//
//function renderSingleCountry(country) {
//
//}


//----------------------------------------------Problem2--------------------------------------------------

let continents = {
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

renderDataInHTML(continents);

function renderDataInHTML(continents) {

}
