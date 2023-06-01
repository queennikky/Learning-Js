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
const password = '34567890'

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
} else{
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
} else if (password.length >=7) {
  console.log("Your password is strong");
} else {
  console.log("Your pssword is weak");
}

//whether a number is positive, negative or zero

const num = 0

if (num >= 0) {
  console.log(`${num} is a POSITIVE number`);
} else if (num < 0) {
  console.log(`${num} is a NEGATIVE Number`);
} else {
  console.log("This is Zero");
}
// even or odd

if (num % 2 === 0){
  console.log("This is EVEN");
}else {
  console.log("This is ODD");
}

//if you are less than 18 - welcome to the baby section
// 18 and 50  welcome to the club
// 50+ - welcome to the vip section

const myAge = 51

if (age <= 18) {
  console.log(`Welcome to baby section`);
}else if ( myAge > 50) {
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
// //Null
// //Undefined
