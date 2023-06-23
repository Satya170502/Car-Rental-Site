let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
//--------------------------------------------------------------
let price = document.getElementById("price");
let Model = document.getElementById("Model");
let Mark = document.getElementById("Mark");
let Year = document.getElementById("Year");
let Doors = document.getElementById("Doors");
let AC = document.getElementById("AC");
let Transmission = document.getElementById("Transmission");
let Fuel = document.getElementById("Fuel");
let imgy = document.getElementById("imgy");
let cars = {
    "Audi": {
        "Price": "₹4500",
        "Model": "Audi",
        "Mark": "A1",
        "Year": 2012,
        "Doors": "4/5",
        "AC": "Yes",
        "Transmission": "Manual",
        "Fuel": "Petrol",
        "imgurl": "https://car-rental-ten.vercel.app/static/media/audia1.d038cf70b700e34e607a.jpg"
    },
    "VU": {
        "Price": "₹3000",
        "Model": "Golf 6",
        "Mark": "Volkswagen",
        "Year": 2008,
        "Doors": "4/5",
        "AC": "Yes",
        "Transmission": "Manual",
        "Fuel": "Diesel",
        "imgurl": "https://car-rental-ten.vercel.app/static/media/golf6.595c0bbfc7ce2e50aa05.jpg"
    },
    "Toyota": {
        "Price": "₹2500",
        "Model": "Camry",
        "Mark": "Toyota",
        "Year": 2006,
        "Doors": "4/5",
        "AC": "Yes",
        "Transmission": "Automatic",
        "Fuel": "Hybrid",
        "imgurl": "https://car-rental-ten.vercel.app/static/media/toyotacamry.3d493a56558c50b677cc.jpg"
    },
    "BMW": {
        "Price": "₹5500",
        "Model": "320",
        "Mark": "BMW",
        "Year": 2012,
        "Doors": "4/5",
        "AC": "Yes",
        "Transmission": "Manual",
        "Fuel": "Diesel",
        "imgurl": "https://car-rental-ten.vercel.app/static/media/bmw320.84ab73b0c9133418f907.jpg"
    },
    "Benz": {
        "Price": "₹7000",
        "Model": "Benz GLK",
        "Mark": "Mercedes",
        "Year": 2006,
        "Doors": "4/5",
        "AC": "Yes",
        "Transmission": "Manual",
        "Fuel": "Diesel",
        "imgurl": "https://car-rental-ten.vercel.app/static/media/benz.0a6153731a2c1a68054a.jpg"
    },
    "VWCC": {
        "Price": "₹2800",
        "Model": "Passat CC",
        "Mark": "Volkswagen",
        "Year": 2008,
        "Doors": "4/5",
        "AC": "Yes",
        "Transmission": "Automatic",
        "Fuel": "Petrol",
        "imgurl": "https://car-rental-ten.vercel.app/static/media/passatcc.bd82bd1deac8c11e3c4d.jpg"
    }
}
let btnl = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6"];
function color(b) {
    for (let item of btnl) {
        if (item === b) {
            document.getElementById(item).classList.add("colored-button");
        }
        else {
            document.getElementById(item).classList.remove("colored-button");
        }
    }
}
function description(item) {
    price.textContent = cars[item]["Price"];
    Model.textContent = cars[item]["Model"];
    Mark.textContent = cars[item]["Mark"];
    Year.textContent = cars[item]["Year"];
    Doors.textContent = cars[item]["Doors"];
    AC.textContent = cars[item]["AC"];
    Transmission.textContent = cars[item]["Transmission"];
    Fuel.textContent = cars[item]["Fuel"];
    imgy.src = cars[item]["imgurl"];
}
btn1.onclick = function () {
    color("btn1");
    description("Audi");
}
btn2.onclick = function () {
    color("btn2");
    description("VU");
}
btn3.onclick = function () {
    color("btn3");
    description("Toyota");
}
btn4.onclick = function () {
    color("btn4");
    description("BMW");
}
btn5.onclick = function () {
    color("btn5");
    description("Benz");
}
btn6.onclick = function () {
    color("btn6");
    description("VWCC");
}