var guestList = ["Asma", "Sumera", "Fazila"];
var message = "please attend the dinner tonight";
var cantAttend = ["Sumera"];
console.log("".concat(cantAttend, " cant attend the dinner"));
var newGuest = "Anabia";
guestList[guestList.indexOf(cantAttend[0])] = newGuest;
guestList.map(function (item) { return (console.log("dear ".concat(item, " you are invited to the wedding"))); });
