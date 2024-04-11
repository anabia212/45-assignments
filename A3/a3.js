var personName = "anabia";
console.log("lowercase", personName.toLowerCase());
console.log("uppercase", personName.toUpperCase());
console.log("titlecase", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
