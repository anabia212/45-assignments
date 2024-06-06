let users : string[] = ["admin",'asma',"fazila","manha","tayyaba"]
for(let user of users){
    if (user=="admin"){
        console.log("hello admin!would u like to see a status report?")
    }
    else {
        console.log(`hello ${user}, thank you for logging in again`)
    }

} 
