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

