// console.log('Hello world');
// console.log('Welcome to class');

// //JS VARIABLES AND VALUES (var,let and const)
// let x = 2;
// x = 9;
// const y =4;
// //y = 30; can not
// console.log(x);
// console.log(y);
// //conventions and rules in naming var
// //have a logical var name
// const b = 'Adenike'
// const firstName = 'Adenike'
// //compound names - camelcasing
// const lastName = 'Ajibola'
// //illegal number, you can start with _ and $
// // const $year = 2003
// // const age = 4
// // const A = 5
// // console.log(AGE);

// const country = 'Nigeria';
// let state ='lagos state';
// console.log(country);
// console.log(state);
// state = 'Abia State';
// console.log(state);
// //JS DATA TYPES - (Primitive, complex)
// //Strings -text -quotes -strings

const firstName = "John";
const lastName = "Doe";
const middleName = "Owen";
const currentJob = "Product Manager";
const email = "nikkycraft01@gmail.com";
//String Concatenation - joining of strins +
const fullName = firstName + " " + lastName + " " + middleName;
console.log(fullName);
//My name is john and i work as a Product Manager
const description = "My name is " + firstName + "I work as a " + currentJob;
console.log(description);
// You can message on this email, nikkycraft.com
const desc = "You can msg me on this email," + email;
console.log(desc);
//Getting Characters -string[position]
console.log(firstName[2]);
console.log(currentJob[8]);
//String length
console.log(firstName.length);
console.log(description.length);
//String Methods
//Transform -
console.log(fullName.toUpperCase);
console.log(fullName.toLowerCase);

//extracting parts of a string - slice substring,substr

const email2 = "nikkycraft01@gmail.com";
//string.slice[start, end]
console.log(email2.slice(0, 10));
console.log(email2.slice(5, 11));
console.log(email.slice(-5, -1));
console.log(email2.substring(0, 8));

//string.substring(start, count of cters)
console.log(email2.substr(0, 12));

//replace string content - replace replaceALL
console.log(email2.replace("nikkycraft", "funsho"));
console.log(email2.replaceAll("a", "h"));
//includes, indexOf, lastIndexOf, trim,concat,
//trimStart, trimend, startsWith, EndsWith
console.log(email2.includes("nikky"));
console.log(email2.indexOf("a"));
console.log(email2.lastIndexOf("a"));
const user = "      Nikkycraft      ";
const password = "    1234567891011    ";

// //Numbers
// //Boolean
// //Null
// //Undefined
const author = "Chinua achebe";
const book = "Things fall apart";
const year = 1996;
const bookDesc =
  "The Book " + book + " Was written by " + author + " in the year " + year;
console.log(bookDesc);

//template literals -

const bookDescription2 = `The book ${book} was written by ${author} in the year ${year}`
//My favourite Author is chinua achebe

const fav =`My favourite author is ${author}`;
console.log(fav);