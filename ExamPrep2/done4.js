function getAllContinents(){
    let requestUrl = 'https://continental-drift.firebaseio.com/continents.json';

    $.get(requestUrl)
        .then(renderAllContinentsInHTML)
        .catch((err) => console.log(err));
}

//function getSingleContinent(continentName) {
//    let requestUrl = 'https://continental-drift.firebaseio.com/continents/' + continentName + '.json';
//
//    $.get(requestUrl)
//        .then(renderAllContinentsInHTML)
//        .catch((err) => console.log(err));
//}
//
//function getSingleCountry(continentName, countryName) {
//    let requestUrl = 'https://continental-drift.firebaseio.com/continents/' + continentName +'
//    '/countries/' + countryName + '.json';
//
//    $.get(requestUrl)
//        .then(renderSingleCountryInHTML)
//        .catch((err) => console.log(err));
//}

getAllContinents();