function show_magicians(magicians: string[]){
    magicians.forEach(name=> console.log(name));

}
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}
let magicians_names=["Anabia","Ana","Bia"]

let copy_magician_names = magicians_names.slice();
let copy_great_magicians= make_great(copy_magician_names);

console.log("original array\n")
show_magicians(magicians_names);

console.log("\ncopied array\n")
show_magicians(copy_great_magicians);
