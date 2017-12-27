function multiplyNumber(number) {
    let finalNumber = Number(number);
    return finalNumber * 2;
}

let numbers = ['9', '2', '15', '20'];

for(let number of numbers){
    console.log(multiplyNumber(number));
    console.log(number)
}

console.log(multiplyNumber(numbers[2]));

