let punshes = {
    0: {
        name: "Punsh - The American Pie",
        type: "Strong",
        contents: "Some Apple Pie, Whiskey, Vodka, Orange Juice and some other things...",
        description: "By original recipe from the American Pie franchise, this punsh includes everything you would want in a college/university party."
    },
    1: {
        name: "Brendy Punsh",
        type: "Medium",
        contents: "Brendy, Apple Juice, Ice, Avocado Juice, some other strange fruits...",
        description: "The casual Brendy Punsh, quite expensive, nothing interesting here..."
    },
    2: {
        name: "Just Punsh it",
        type: "Sweet",
        contents: "Very Little Vodka, Orange Juice, Apple Juice, Banana Juice, Ice.",
        description: "A very comfortable taste for the lovers of weakly alchoholic drinks. The Just Pinsh It punsh is a sweet multi-vitamol drink, which cannot drunk you."
    }
};

renderAllPunshesInHTML(punshes);
renderSinglePunshInHTML(punshes, "Punsh – The American Pie");

function renderAllPunshesInHTML(punshes) {
    let navBarItemsDiv = $('<div class="navbar-items">');
    for (let index in punshes) {
       let punsh = punshes[index];

       let navBarItemDiv = $('<div class="navbar-item">')
           .append('<h4>' + punsh['name'] + '</h4>');
       navBarItemsDiv
           .append(navBarItemDiv);
    }
    $('.navbar')
        .append(navBarItemsDiv);
}

function renderSinglePunshInHTML(punshes, punshName) {
    for (let index in punshes) {
        let punsch = punshes[index];

        let punshName = punshes[index]['name'];

        let contentHeaderDiv = $('<div class="content-header">')
            .append('<div class="content-heading">' + punsch['name'] + '</div>');
        //$('.content-heading').cursor.pointerType;
        let punschDataDiv = $(' <div class="punsh-data">');

        let punschTypeDiv = $('<div class="punsh-type">')
            .append('<label>Type: </label>')
            .append('<h6>' + punsch['type'] + '</h6>');

        let punschContentsDiv = $(' <div class="punsh-contents">')
            .append('<label>Contents: </label>')
            .append('<p> ' + punsch['contents'] + ' </p>');

        let descriptionDiv = $('<div class="punsh-description">')
            .append('<label>Description: </label>')
            .append('<p>' + punsch['description'] + ' </p>');

        punschDataDiv
            .append(punschTypeDiv)
            .append(punschContentsDiv)
            .append(descriptionDiv);

        $('.content')
            .append(contentHeaderDiv)
            .append(punschDataDiv);
    }
}