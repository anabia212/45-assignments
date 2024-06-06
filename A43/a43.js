function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Anabia", "Ana", "Bia"];
var copy_magician_names = magicians_names.slice();
var copy_great_magicians = make_great(copy_magician_names);
console.log("original array\n");
show_magicians(magicians_names);
console.log("\ncopied array\n");
show_magicians(copy_great_magicians);
