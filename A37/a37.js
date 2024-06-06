function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I LOVE TYPESCRIPT"; }
    console.log("Creating a ".concat(size, " shirt with a ").concat(printMessage, " printed on it"));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I LOVE JAVASCRIPT");
