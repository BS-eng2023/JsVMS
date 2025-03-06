"use strict";

//// add car script
import elements from "./elements.js";
import addCar from "./addCar.js";
import addUser from "./addUser.js";
import logIn from "./logIn.js";
//import populateFilters from "./components/populateFilters.js";
import displayCars from "./components/displayCars.js";
import applyFilters from "./components/applyFilters.js";
import login from "./logIn.js";

//disable add new car button //
const addNewCarButton = document.getElementById("addNewCar");
addNewCarButton.title = "Bitte zuerst anmelden!";
addNewCarButton.disabled = true;

const domMapping = () => {
  elements.main = document.querySelector(".main");
  elements.main.innerHTML = "";
  elements.logIn = document.querySelector("#logIn");
  elements.addNewCar = document.querySelector("#addNewCar");
  elements.addNewUser = document.querySelector("#addNewUser");
};

const appendEventListeners = () => {
  elements.logIn.addEventListener("click", logIn);
  elements.addNewCar.addEventListener("click", addCar);
  elements.addNewUser.addEventListener("click", addUser);
};

function populateFilters(carsData) {
  const brandFilter = document.getElementById("brand-filter");
  const fuelFilter = document.getElementById("fuel-filter");

  const brands = new Set();
  const fuels = new Set();

  carsData.forEach((car) => {
    brands.add(car.attributes["Marken"]);
    fuels.add(car.attributes["Kraftstoffe :"]);
  });

  brands.forEach((brand) => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandFilter.appendChild(option);
  });

  fuels.forEach((fuel) => {
    const option = document.createElement("option");
    option.value = fuel;
    option.textContent = fuel;
    fuelFilter.appendChild(option);
  });
}

const init = () => {
  //add car script
  domMapping();
  appendEventListeners();
  login();
  
  fetch("../assets/json/sample_cars.json")
    .then((response) => response.json())
    .then((data) => {
      elements.data = data;
      populateFilters(data);
      displayCars(data);
    })
    .catch((error) => console.error("Error loading the JSON file:", error));

  //to display Filter bar on the right side
  const buttonDisplayFilter = document.querySelector("#displayfilter");
  buttonDisplayFilter.addEventListener("click", function () {
    let right = document.querySelector(".right");
    right.classList.toggle("rightSearchClicked");
  });
  //to apply Filter
  const buttonApllyFilter = document.querySelector(".applyFilters");
  buttonApllyFilter.addEventListener("click", function () {
    applyFilters(elements.data);
  });
};

// INIT
document.addEventListener("DOMContentLoaded", init);
