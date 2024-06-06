var current_users = ["admin", "asma", "fazila", "manha", "tayyaba"];
var new_users = ["admin", "zufishan"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, ", that name is taken"));
    }
    else {
        console.log("yes ".concat(new_one_user, ", is still available in the list"));
    }
});
