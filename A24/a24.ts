let name_1 : string = "anabia"
let name_2 : string = "asma"
let name_3 : string = "fazila"

if (name_1==name_3){
    console.log("names are equal")
}
else{
    console.log("names are not equal")
}

if (name_1!=name_2){
    console.log("names are equal")
}
if (name_1!=name_3){
    console.log("names are equal")
}

let age_1 : number = 18
let age_2 : number = 22

if (age_1==18){
    console.log("eligible for vote")
}
if (age_1!=22){
    console.log("eligible for vote in orlder category")
}

if(age_1<=age_2){
    console.log("younger")
}
if(age_1>=age_2){
    console.log("older")
}

if (age_1==18 && age_2==22){
    console.log("person is eligible for vote")
}
if (age_1==18 || age_2!=22){
    console.log("person is not eligible for vote")
}

let country : string =["pakistan","india","japan","china"] 
if (country.includes("pakistan")){
    console.log("pakistan is in the country list")
}
if (!country.includes("america")){
    console.log("america is not in the country list")
}
