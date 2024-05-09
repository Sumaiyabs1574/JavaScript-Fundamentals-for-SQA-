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


// Functions



// Functions
function CompanyName() {
  console.log('BS23');
}
CompanyName()
CompanyName()
CompanyName()

// Function to calculate the area of a rectangle

function calculateRectangleArea(length, width)
{
  return length * width;
}

const length = 5;
const width = 3;
const area = calculateRectangleArea(length, width);
console.log("The area of the rectangle is: " + area);



//funtion for calculator program

function calculator(operation, num1, num2) {
  switch(operation) {
      case '+':
          return num1 + num2;
      case '-':
          return num1 - num2;
      case '*':
          return num1 * num2;
      case '/':
          if (num2 !== 0) {
              return num1 / num2;
          } else {
              return "Error: Division by zero!";
          }
      default:
          return "Error: Invalid operation!";
  }
}

var result = calculator('+', 5, 3);
console.log("Result:", result);
  

//Arrow functions 
const cArea = (w,h) => w*h;
const w = 5;
const h = 3;
const a = cArea(w,h);
console.log("Area of the rectangle:",a);



// Coding Challenge #1


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins!");
    }
};
console.log("TEST DATA 1:");
checkWinner(avgDolphins1, avgKoalas1);

console.log("\nTEST DATA 2:");
checkWinner(avgDolphins2, avgKoalas2);


// Introduction to Arrays


// Creating an array
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];


console.log(fruits[0]); 
console.log(fruits[2]); 

// Modifying 
fruits[1] = 'Grapes';
console.log(fruits); 

// Adding elements 
fruits.push('Pineapple');
console.log(fruits); 

// Removing the last element from an array
let lastFruit = fruits.pop();
console.log(lastFruit); 
console.log(fruits); 


//  index of an element
let index = fruits.indexOf('Orange');
console.log(index);


const jim = ['bs23','sumaiya','habib'];
console.log(jim.length);



// Coding Challenge #2


function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
      return bill * 0.15;
  } else {
      return bill * 0.20;
  }
}
const bills = [125, 555, 44];
const tips = bills.map(bill => calcTip(bill));
const total = bills.map((bill, index) => bill + tips[index]);
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", total);






//  object


let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};
    console.log(car.brand);
    console.log(car.brand);
    console.log(car.model);




//Coding Challenge #3
let mark = {
  fullName: 'Mark Miller',
  mass: 78, 
  height: 1.69 ,
};

let john = {
  fullName: 'John Smith',
  mass: 92, 
  height: 1.95 ,
};


mark.calcBMI = function() {
  this.bmi = this.mass / (this.height * this.height);
  return this.bmi;
};

john.calcBMI = function() {
  this.bmi = this.mass / (this.height * this.height);
  return this.bmi;
};

mark.calcBMI();
john.calcBMI();


if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else {
  console.log("Both have the same BMI.");
}


// for Loop

var campus = "BAUET";
for (var i = 0; i < 5; i++) {
    console.log(campus);
}

//loop in arry
let numbers = [1, 2, 3, 4, 5];


for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


//while loop


let counter = 0;
while (counter < 5) {
    console.log("Counter is:", counter);
    counter++; 
}
console.log("Loop ended.");


//break and contineue 


for (let i = 0; i < 10; i++) {
  if (i === 5) {
      break; 
  }
  console.log(i);
}

// continue

for (let i = 0; i < 10; i++) {
  if (i === 5) {
      continue; 
  }
  console.log(i);
}










