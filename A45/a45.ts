function create_car(manufacturer, model, ...options){
    let car={
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(option=>{
        let[key,value]=option.split(":");
        car[key.trim()]=value.trim();

    });
    return car;
}
let my_car= create_car("toyota","corolla"," color:black", "sunroof: True", "Year: 2023");
console.log(my_car)