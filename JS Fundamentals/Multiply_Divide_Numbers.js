function multiplyNumber(number1, number2) {
    let finalNumber1 = Number(number1);
    let finalNumber2 = Number(number2);

    return finalNumber1 * finalNumber2;
}

function divideNumber(number1, number2) {
    let finalNumber1 = Number(number1);
    let finalNumber2 = Number(number2);

    return finalNumber1 / finalNumber2;
}

let numberX = 2;
let numberY = 3;

if(numberX <= numberY){
    console.log(multiplyNumber(numberX, numberY));
}

else if(numberY <= numberX){
    console.log(divideNumber(numberX,numberY));
}


