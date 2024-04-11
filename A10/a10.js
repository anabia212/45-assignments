//storing name in lower case, upper case, and title case
var personName = "anabia";
console.log("lowercase", personName.toLowerCase());
console.log("uppercase", personName.toUpperCase());
console.log("titlecase", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//revealing my fav number
var favNumber = 2;
console.log("My favourite number is ".concat(favNumber));
