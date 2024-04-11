//storing name in lower case, upper case, and title case
let personName= "anabia";
console.log("lowercase", personName.toLowerCase());
console.log("uppercase", personName.toUpperCase());
console.log("titlecase", personName.replace(/\b\w/g,c=> c.toUpperCase()));
//revealing my fav number
let favNumber=2;
console.log(`My favourite number is ${favNumber}`);