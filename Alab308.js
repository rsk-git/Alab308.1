// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;


// Here's another example of how this 
  //is divisible by 5
const isdivisibleby5 = (n1%5 ==0) && (n2 % 5 ==0) && (n3 % 5 ==0) && (n4 % 5 ==0);
console.log ('Are these numberes divisible by 5 ?', isdivisibleby5);

//first number is larger than the last. Cache the result in a variable.
const firstnumberlarger =(n1 >n4);
console.log('Is first number larger than the last?', firstnumberlarger);

//Accomplish the following arithmetic chain:
//Subtract the first number from the second number.
//Multiply the result by the third number.
//Find the remainder of dividing the result by the fourth number.

const arithmeticchain = ((n2-n1)*n3)%n4
console.log('The remainder is:', arithmeticchain);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isAbove25 = arithmeticchain >25;
console.log('Is the number over 25:',isAbove25);



//SECOND ASSIGNMENT

const distance = 1500; // miles
const fuelBudget = 175; // dollars
const fuelCostPerGallon = 3; // dollars

// Define fuel efficiency (miles per gallon) for different speeds
const efficiency55 = 30; // miles per gallon at 55 mph
const efficiency60 = 28; // miles per gallon at 60 mph
const efficiency75 = 23; // miles per gallon at 75 mph

// // How many gallons of fuel will you need for the entire trip?
// // Will your budget be enough to cover the fuel expense?
// // How long will the trip take, in hours?
// Function to calculate gallons needed
function calculateGallons(distance, efficiency) {
    return distance / efficiency;
}

// Function to calculate total fuel cost
function calculateFuelCost(gallons, fuelCostPerGallon) {
    return gallons * fuelCostPerGallon;
}

// Function to calculate trip duration
function calculateDuration(distance, speed) {
    return distance / speed;
}

// Speeds in miles per hour
const speed55 = 55;
const speed60 = 60;
const speed75 = 75;

// Calculations for 55 mph
const gallons55 = calculateGallons(distance, efficiency55);
const fuelCost55 = calculateFuelCost(gallons55, fuelCostPerGallon);
const duration55 = calculateDuration(distance, speed55);
const budgetSufficient55 = fuelCost55 <= fuelBudget;

// Calculations for 60 mph
const gallons60 = calculateGallons(distance, efficiency60);
const fuelCost60 = calculateFuelCost(gallons60, fuelCostPerGallon);
const duration60 = calculateDuration(distance, speed60);
const budgetSufficient60 = fuelCost60 <= fuelBudget;

// Calculations for 75 mph
const gallons75 = calculateGallons(distance, efficiency75);
const fuelCost75 = calculateFuelCost(gallons75, fuelCostPerGallon);
const duration75 = calculateDuration(distance, speed75);
const budgetSufficient75 = fuelCost75 <= fuelBudget;

// Log results
console.log(`Traveling at 55 mph:`);
console.log(`- Gallons needed: ${gallons55.toFixed(2)}`);
console.log(`- Fuel cost: $${fuelCost55.toFixed(2)}`);
console.log(`- Duration: ${duration55.toFixed(2)} hours`);
console.log(`- Budget sufficient: ${budgetSufficient55 ? "Yes" : "No"}`);

console.log(`\nTraveling at 60 mph:`);
console.log(`- Gallons needed: ${gallons60.toFixed(2)}`);
console.log(`- Fuel cost: $${fuelCost60.toFixed(2)}`);
console.log(`- Duration: ${duration60.toFixed(2)} hours`);
console.log(`- Budget sufficient: ${budgetSufficient60 ? "Yes" : "No"}`);

console.log(`\nTraveling at 75 mph:`);
console.log(`- Gallons needed: ${gallons75.toFixed(2)}`);
console.log(`- Fuel cost: $${fuelCost75.toFixed(2)}`);
console.log(`- Duration: ${duration75.toFixed(2)} hours`);
console.log(`- Budget sufficient: ${budgetSufficient75 ? "Yes" : "No"}`);

// Determine the good option
let goodOption = '';
if (budgetSufficient55 && (fuelCost55 < fuelCost60 || !budgetSufficient60) && (fuelCost55 < fuelCost75 || !budgetSufficient75)) {
   goodOption = '55 mph';
} else if (budgetSufficient60 && (fuelCost60 < fuelCost75 || !budgetSufficient75)) {
    goodOption = '60 mph';
} else if (budgetSufficient75) {
    bestOption = '75 mph';
} else {
    goodOption = 'none (budget not sufficient for any speed)';
}

console.log(`\nThe best option based on the fuel efficiency and budget is: ${goodOption}`);














