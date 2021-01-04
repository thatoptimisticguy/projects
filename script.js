'use strict';
/*
let hasDriversLicense = false; 
const passTest = true;


if(passTest) hasDriversLicense = true; 
if(hasDriversLicense) console.log('I have a driver\'s license');


function logger() {
    console.log('My name is Rohan');
}

logger();//invoking the function
logger();
logger();


function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`; 
    //console.log(juice);
    return juice; 
}

var output = fruitProcessor(9,10);
console.log(output);


console.log(calcAge1(1994));

//function declaration
function calcAge1(birthYear){
    return 2037 - birthYear; 
}


//function expression 
const calcAge2 = function(birthYear){ //anonymous function
    return 2037 - birthYear; 
}
console.log(calcAge2(1994));

//Arrow Function 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1994); 

console.log(age3);

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear; 
    const retirement = 58 - age;
    
    return `${firstname} retires in ${retirement} years`; 
}

console.log(yearsUntilRetirement(1994, 'Rohan')); 
console.log(yearsUntilRetirement(2000, 'Pranav')); 



function cutFruitPieces(fruit){
    return fruit*4; 
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges); 

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`; 
    //console.log(juice);
    return juice; 
}

var output = fruitProcessor(2,3);
console.log(output);
*/

//Coding Challenge - Functions 
const calcAvg = (Dolphins, Koalas) => {
    const avgDolphins = Dolphins/3; 
    const avgKoalas = Koalas/3;
    checkWinner(avgDolphins, avgKoalas); 
}

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins > 2*avgKoalas){
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
    }
    else if(avgDolphins === avgKoalas){
        console.log(`Its a draw as both teams have the score as ${avgDolphins} vs ${avgKoalas}`);
    }
    else if(avgKoalas> 2*avgDolphins){
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
    }
    else{
        console.log('There is no winner');
    }
}

let Dolphins = 44+23+71;
let Koalas = 5+994+999; 
calcAvg(Dolphins, Koalas);

