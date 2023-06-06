// // console.log('Hello world');
// // console.log('Welcome to class');

// // //JS VARIABLES AND VALUES (var,let and const)
// // let x = 2;
// // x = 9;
// // const y =4;
// // //y = 30; can not
// // console.log(x);
// // console.log(y);
// // //conventions and rules in naming var
// // //have a logical var name
// // const b = 'Adenike'
// // const firstName = 'Adenike'
// // //compound names - camelcasing
// // const lastName = 'Ajibola'
// // //illegal number, you can start with _ and $
// // // const $year = 2003
// // // const age = 4
// // // const A = 5
// // // console.log(AGE);

// // const country = 'Nigeria';
// // let state ='lagos state';
// // console.log(country);
// // console.log(state);
// // state = 'Abia State';
// // console.log(state);
// // //JS DATA TYPES - (Primitive, complex)
// // //Strings -text -quotes -strings

// const firstName = "John";
// const lastName = "Doe";
// const middleName = "Owen";
// const currentJob = "Product Manager";
// const email = "nikkycraft01@gmail.com";
// //String Concatenation - joining of strings +
// const fullName = firstName + " " + middleName + " " + lastName;
// console.log(fullName);
// //My name is john and i work as a Product Manager
// const description = "My name is " + firstName + "I work as a " + currentJob;
// console.log(description);
// // You can message on this email, nikkycraft.com
// const desc = "You can msg me on this email," + email;
// console.log(desc);
// //Getting Characters -string[position]
// console.log(firstName[2]);
// console.log(currentJob[8]);
// //String length
// console.log(firstName.length);
// console.log(description.length);
// //String Methods
// //Transform -
// console.log(fullName.toUpperCase);
// console.log(fullName.toLowerCase);

// //extracting parts of a string - slice substring,substr

// const email2 = "nikkycraft01@gmail.com";
// //string.slice[start, end]
// console.log(email2.slice(0, 10));
// console.log(email2.slice(5, 11));
// console.log(email.slice(-5, -1));
// console.log(email2.substring(0, 8));

// //string.substring(start, count of cters)
// console.log(email2.substr(0, 12));

// //replace string content - replace replaceALL
// console.log(email2.replace("nikkycraft", "funsho"));
// console.log(email2.replaceAll("a", "$"));
// //includes, indexOf, lastIndexOf, trim,concat,
// //trimStart, trimend, startsWith, EndsWith
// console.log(email2.includes("nikky"));
// console.log(email2.indexOf("a"));
// console.log(email2.lastIndexOf("a"));
// const user = "      Nikkycraft      ";
// const password = "    1234567891011    ";
// console.log(user.length, password.length);

// const formattedUser = user.trim();
// const formattedPassword = password.trimStart();
// console.log(formattedUser.length);
// console.log(formattedPassword.length);

// const ad = 'adenike'
// console.log(ad.startsWith('d'));
// console.log(ad.endsWith('s'));
// //concat -appendix end eg
// const job = "frontend"
// //frontend developer
// console.log(job.concat(" ", "developer", "is Rare"));
// const book = "Things fall apart";
// const year = 1996;
// const author = "Chinua achebe";

// const bookDesc =
//   "The Book " + book + " Was written by " + author + " in the year " + year;
// console.log(bookDesc);

// //template literals -

// const bookDescription2 = `The book ${book} was written by ${author} in the year ${year}`;
// //My favourite Author is chinua achebe

// const fav = `My favourite author is ${author}`;
// //

// // //Numbers - 5 6.3 4500
// //math operators - + - * / ** %
// console.log(6 % 2); // 0
// console.log(5 % 2); // 1

// console.log(5 / 2);2.5
// // order of operation - bedmas,
// //
// console.log(6 / 3 + 5);// 7 -2

// let balance = 500;
// const t1 = 20;
// const t2 = 100;
// const d1 = 200;

// console.log(5 + 6 * 2 - 3);// 5 + 12 - 3 // 17 -3 14
// // -1 3 3 5
// total = total + 10;
// total += 10;
// total += 5;

// //decrease the val of total by 12
// total = total - 12;
// total -= 12;

// const Country = "Nigeria";
// const continent = "Africa";
// let population = 100000000;

// console.log(country, continent, population);
// const isIsland = false;
// const language ="English"

// population /=2;
// //console.log(population / 2);
// console.log(population);
// population++;
// console.log(population);

// //template literals
// //description - Nigeria is in Africa and it's population of 567892346 people speak English
// const Description =  `${country}, is in ${continent} and its population of ${population}`

// // 'hello' -
// // /4.0
// // strings to numbers
// const str = "90";
// console.log(typeof str);
// const converted = number(str);.
// console.log(typeof converted);

// //numbers to string

// const num = 900000;
// console.log(typeof num);
// const converted2 = String(num);
// console.log(typeof converted2);

// //type coercion
// const num1 = 8;
// const num2 = "2";

// //console.log(num1 + num2); //15 87
// console.log();

// // //Boolean

//control flow
// conditional statement
// if(condition){code}
// const password = "219rtyuiot";
// if (password.length)
const password = "34567890";

if (password.length > 6 && password.includes("@")) {
  console.log("your password is strong");
}

const country = "Nigeria";
const continent = "Africa";
const population = 12;
const isIsland = false;
const language = "French";

// Adenike speaks english has less than 50 people and is not an island
//You should live in Portugal
//Portugal does not meet your criteria
if (language === "English" && population < 50 && isIsland) {
  console.log(`You should live in $(country)`);
} else {
  console.log(`${country} does not meet your criteria`);
}
const age = 18;
// >= 18

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are not one");
}
//
// if (condition)else if (another condition){}else{}

// recommended >7 and include @, strong > 7 and weak

if (password.length >= 7 && password.includes("@")) {
  console.log("Your password is recommended");
} else if (password.length >= 7) {
  console.log("Your password is strong");
} else {
  console.log("Your pssword is weak");
}

//whether a number is positive, negative or zero

const num = 0;

if (num >= 0) {
  console.log(`${num} is a POSITIVE number`);
} else if (num < 0) {
  console.log(`${num} is a NEGATIVE Number`);
} else {
  console.log("This is Zero");
}
// even or odd

if (num % 2 === 0) {
  console.log("This is EVEN");
} else {
  console.log("This is ODD");
}

//if you are less than 18 - welcome to the baby section
// 18 and 50  welcome to the club
// 50+ - welcome to the vip section

const myAge = 51;

if (age <= 18) {
  console.log(`Welcome to baby section`);
} else if (myAge > 50) {
  console.log("welcome to VIP SECTION");
} else {
  console.log("Welcome to the club");
}

//SWITCH STATEMENT
const day = 67;
switch (day) {
  case 1:
    console.log(MONDAY);
    break;
  case 2:
    console.log(TUESDAY);
    break;
  case 3:
    console.log(WEDNESDAY);
    break;
  case 4:
    console.log(THURSDAY);
    break;
  case 5:
    console.log(FRIDAY);
    break;
  case 6:
    console.log(SATURDAY);
    break;
  case 7:
    console.log(SUNDAY);
    break;
}

const grade = "a";
switch (grade) {
  case "A":
  case "a":
    console.log("EXCELLENT");
    break;
  case "B":
  case "b":
    console.log("VERY GOOD");
    break;
  case "C":
  case "c":
    console.log("GOOD");
    break;
  case "D":
  case "d":
    console.log("FAIR");
    break;
  case "E":
  case "e":
    console.log("POOR");
    break;
  case "F":
  case "f":
    console.log("FAIL");
    break;
  default:
    console.log("NOT A VALID GRADE");
    break;
}

// bmi = mass / height ** 2

const marsksHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnsWeight = 92;

const marksBmi = markWeight / marsksHeight ** 2;
const johnsBmi = johnHeight / johnHeight ** 2;
console.log(marksBmi, johnsBmi);

const markHigherBmi = marksBmi > johnsBmi;


if (marksBmi > johnsBmi) {
  console.log(`marks's BMI ${marksBmi.toFixed(2)}`
  )
  
} else {
  console.log(`John's BMI`);
}
// Ternary operator
//if(condition){code 1}else{code 2}

//condition ? action 1 : action 2

15 > 7 ? console.log("Yes") : console.log("NO");

const num2 = 46;

num % 2 === 0
  ? console.log("This is An EVEN number")
  : console.log("This is an ODD number");

//LOOPS - repitive tasks  do.. while loop- for , while,

// for (initializer let i = 0; condition i < 5; increment i++ ){code}

for (let i = 0; i < 5; i++) {
  console.log(`in the loop ${i}`);
}
console.log("outside of the loop");

// initializer
//whille(condition){code increment}
// // sum of

let x = 0;
while (x < 20) {
  console.log("HELLO");
  x++;
}
let y = 0;
do {
  console.log("HEY");
  y++;
} while (y < 5);

// variables and value
// primitive data types - strings, strings methods
// number, math operators, logical,comparison
// booleans - truthy and falsy val
// null and undefined
// conditional statements
// loops

// funtions
const var1 = 'John' 

// funtion declaration
function myFuntion() {
  console.log("HELLO CLASS");
  console.log("YOU ARE WELCOME");
}
 myFuntion();

function greet(name = "User", age = 18) {
  console.log("WELCOME" + name + age);
} 
greet("John", 69);
greet("Adenike", 7);
greet("Emmanuel", 52);
greet();
greet("feyi");

// calculate the age of users
//2023 - year

function calcAge(year) {
  const age = 2023 - year;
  console.log(`Your age is ${age}`);
} 
calcAge(1960);
calcAge(2000);

function sumNums(a, b) {
  console.log(`the sum of ${a} and $(b) is $(a + b)`);
}
sumNums(4.5, 78);
sumNums(-45, 87);

//finland has 6 million people and its capital city is helsinki
function describecountry(country, population, capitalCity) {
  console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

describecountry("France", 12, "Paris");
describecountry("Belgium", 3, "Brussels");
describecountry("Russia", 65, "Moscow")

// checks if an email is valid or not
checkEmail("test@gmail.com")

function checkEmail(email) {
  if (email.includes("@")) {
  console.log(`${email} is a valid email address`);
 } else {
  console.log(`${email} is not a valid email`);
   }
}
checkEmail("abcdgoogle.com");


// HOISTING
// function expression
// const myAge = 90;
// console.log(myAge);

// myFunction2(4, 5)
const myFunction2 = function (a, b) {
  console.log("anything");
  console.log(a + b);
}
myFunction2(7, 8);
// return keyword

//create a function that cals average of the two teams
// d - 103, 93, 89
// k - 110, 87, 95

const calcAverage = function (a, b, c){
  const avg = (a + b + c) / 3;
  // return avg.toFixed(2);
  return Number(avg.toFixed(2));
}

const avgDolphins = calcAverage(123, 98, 89);
const avgKaola2 = calcAverage(110, 87, 95);
console.log(avgDolphins, avgKaola2);

//ARROW FUNCTION

// const name = ()=>{}

const logger = (a, b, c) => {
const total = a + b + c;
return total;
};

console.log(logger(4, 5, 7));
// logger(3, 4, 5)

// const difference = (a, b) => {
  // return a - b;
  // };
  const difference = (a, b) => a - b;

  console.log(difference(67, 50));

  // const calcAvg = (a, b, c) => {
  //   const avg = (a,)
  // }

  const a = 5;
  console.log(a);

  const local = () => {
    const a = 7;
    const b = 8;

    console.log(a);
  }
  local();
//console.log(b);
console.log(a);
// // arrays
//ARRAYS [elements, element, el]

const students = ["Mofe", "precious", "Sheu"];
console.log(students);
// arrays properties and methods
console.log(students.length);

//get element in arr
console.log(students[0]);
console.log(students[students.length - 1]);

// converting an array to a string
console.log(students.toString());
console.log(students.join(""));
// adding elements to an array - push , unshift
students.push("Ola");
students.push("Nike");
console.log(students.push('Funsho'));
console.log(students);

students.unshift("Ebuka");
students.unshift("Emma");

console.log(students);

//removing elements from an array pop shift
students.pop();
students.pop();
students.pop();

students.shift();
students.shift();
console.log(students);

console.log(students.sort());
console.log(students.reverse());
console.log(students.includes("Ola"));
console.log(students.includes("Mofe"));

// indexOf lastindexOf
const anotherStudents = ["Toyin", "Zainab"];
console.log(students.concat(anotherStudents, ["Ayo", "Ade", "Ade"]));

//includes, sort, pop, push, shift, unshift, 
//slice, splice, concat, join, toString

console.log(students.slice(0, 2)); // 0, 1
students [2];

const countries = ["Canada", "Germany", "Switzerland", "Ireland"];
console.log(countries.length);
countries.length > 5 ? console.log("country.length is greater than 4") : console.log(`is not greater than 5`);

let savings = 200000
const transactions = [5000, -10000, -100]
transactions.push(-2000);
transactions.push(50000);
console.log(transactions);
let debit = 0;
let credit = 0;

for (i = 0; i < transactions.length; i++) {
  //console.log(transactions[i]);
  // savings = savings + transaction[i]
  savings += transactions[i];
  if (transactions[i] < 0 ) {
    debit += transactions[i];
    console.log(`You have been debited ${transactions[i]}`);
  } else {
    credit += transactions[i];
    console.log(`You have been credited ${transactions[i]}`);
  }
}
console.log(`The total debit is ${debit}`);
console.log(`The total credit is ${credit}`);
console.log((`Your account balance is ${savings}`));

//filter, find, map, forEach
// higher order function, callback func
const friends = ["John", "Jane", "Adam", "Jennifer", "Owen"];
friends.includes("Lester");

friends.forEach((friend, index) => {
    console.log(`${index} The name of my friend is ${friend}`);
  });

  friends.forEach((f, index) => {
    console.log(f, index);
  });

  //map
  friends.map((val, index) => {
    console.log(index);
    if (val === "Jane" || val === 'Adam') {
      console.log(`${val} is my best friend`);
    } else {
      console.log(`${val} is just my friend`);
    }
  });

  //filter find
  const filteredFriends = friends.filter((friend) => {
    return friend.length > 6;
  });
  console.log(filteredFriends);

  //Find

  const foundUser = friends.find((friend) => {
    const user ="Anon";
    return friend.startsWith("J");
  });
  console.log(foundUser);

  const result = friends.filter((friend) => friend.length > 6);
  const result2 = friends.find((f) => f.startsWith("A"));

  console.log(result, result2);

// //Null
// //Undefined
