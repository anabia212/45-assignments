let current_users = ["admin","asma","fazila","manha","tayyaba"]
let new_users = ["admin","zufishan"]

new_users.forEach(new_one_user=>{
    let our_condition =current_users.some(current_one_user=>current_one_user.toLowerCase() === new_one_user.toLowerCase())



    if(our_condition){
        console.log(`sorry ${new_one_user}, that name is taken`)
    }else{
        console.log(`yes ${new_one_user}, is still available in the list`)
    }
})