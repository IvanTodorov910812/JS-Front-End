//PROBLEM 1
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

renderAllPunsches(punshes);
renderSinglePunsh(punshes, "Punsh - The American Pie");

function renderAllPunsches(punshes) {
    for(let index in punshes){
        let punsch = punshes[index];
        console.log(punsch['name']);
    }
}

function renderSinglePunsh(punshes, punschName) {
    for(let index in punshes){
        let punsch = punshes[index];
        let punschName = punsch['name'];
        console.log(punschName);
        console.log('Type: ' + punsch['type']);
        console.log('Contents: ' + punsch['contents']);
        console.log('Description: ' + punsch['description']);
    }
}


//PROBLEM 2
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
//PROBLEM 3
let punshes = {
    0: {
        name: "One Punsh Man",
        type: "Strong",
        contents: "Very little Vodka, Very little Brendy, Very little Wine, Very little Whiskey, Very little Tequila and a lot of Watermelon Juice.",
        description: "This punsh was discovered in an unknown house party, when there was almost no alcohol left, and the people had to combine a little from every alchohol. One Punsh of this is enough to knock you down for good, hence the name."
    },
    1: {
        name: "Wine Punsh",
        type: "Sweet",
        contents: "Wine, Apple Juice, Ice.",
        description: "Casual Wine Punsh, for the ladies that love wine. It is not very strong, it is actually sweet. Sweet enough to make them sweetly drunk and playful."
    },
    2: {
        name: "Punsh Out",
        type: "Sweet",
        contents: "Champagne, Watermellon Juice, Ice.",
        description: "This is a very sweet, almost non-alchoholic, punsh. Very suitable for ladies, which want to keep their manners but have a little fun at a party."
    }
};

function attachPunshesEvents(punshes) {
    $('.navbar-item').click(function (e) {
        e.preventDefault();

        $(this).addClass('clicked');

        if($(this).hasClass('clicked')){
            $(this).removeClass('clicked')
            let punshNameClicked = $(this).find(`h4`).text();
        }
        for(let index in punshes){
            let punsh = punshes[index];
        }
    })
}


function attachBackEvents(punshes) {
    $('.content-heading').click(function (e) {
        e.preventDefault();

        let punshName = $(this).find(`h4`).val();
        $('.content').empty();
        renderAllPunshesInHTML(punshes);
    })
}

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
    let punshName = punshes[index]['name'];
    for(let index in punshes) {
        let punsch = punshes[index];

        let contentHeaderDiv = $('<div class="content-header">')
            .append('<div class="content-heading">' + punsch['name'] + '</div>');

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

renderAllPunshesInHTML(punshes);
renderSinglePunshInHTML(punshes, punshName);
attachPunshesEvents(punshes);
//PROBLEM 4
