// Linking a JavaScript File
let js = "amazing";
console.log(60 + 4 + 2 - 10);

//Values and Variables
console.log("Jim");
console.log(24);


let firstName = "Sumaiya";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2000;
console.log(typeof year);

console.log(typeof null);


// let, const and var
let age = 24;
age = 31;
const birthYear = 1991;

// Basic Operators
// Math operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);


const fastName = 'Sumaiya';
const lastName = 'Habib';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;



// Comparison operators
console.log(ageJonas > ageSarah); 
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// Coding Challenge #1

let markWeight = 88;
let markHeight = 1.79;
 
let johnWeight = 92;
let johnHeight = 1.95;
 
let markBMI = markWeight / (markHeight *markHeight);
let johnBMI = johnWeight / (johnHeight * johnHeight);
 
console.log("Marks BMI: ", markBMI);
console.log("Johns' BMI: ", johnBMI);
 
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);



// Taking Decisions: if / else Statements
var num = 6;
if (num%2==0) 
  console.log('Even number');
 else 
  console.log("Odd number");

// Taking Decisions: if / else Statements 2

const BirthYear = 2012;
let century;
if (BirthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}


// Coding Challenge #2




  // Logical Operators
const jimisaenginer = true; 
const hasGoodVision = true; 

console.log(jimisaenginer && hasGoodVision);
console.log(jimisaenginer || hasGoodVision);
console.log(!jimisaenginer);



// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy ');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy ');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy ');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy ');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy ');
}



//switch statement
var day = 'monday'
switch (day) {
    case 'monday': 
      console.log('Plan course structure');
      console.log('Go to coding meetup');
      break;
    case 'tuesday':
      console.log('Prepare theory videos');
      break;
    case 'wednesday':
    case 'thursday':
      console.log('Write code examples');
      break;
    case 'friday':
      console.log('Record videos');
      break;
    case 'saturday':
    case 'sunday':
      console.log('Enjoy the weekend :D');
      break;
    default:
      console.log('Not a valid day!');
  }


// Coding Challenge #4

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


