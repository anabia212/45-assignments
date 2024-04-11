let guestList: string[] = ["Asma","Sumera","Fazila"];
let message = "please attend the dinner tonight"
let cantAttend = ["Sumera"];
console.log(`${cantAttend} cant attend the dinner`);
let newGuest = "Anabia";
guestList [guestList.indexOf(cantAttend[0])] = newGuest;
guestList.map((item)=>(console.log(`dear ${item} you are invited to the wedding`)));
