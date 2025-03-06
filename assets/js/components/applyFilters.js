"use strict";
import golbalData from "./golbalData.js";
import elements from "../elements.js";
import displayCars from "./displayCars.js";


function applyFilters(carsDatas) {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const brandFilter = document.getElementById('brand-filter').value;
    const fuelFilter = document.getElementById('fuel-filter').value;
    
    const filteredCars = carsDatas.filter(car => {
        return (
            (car.attributes["title"].toLowerCase().includes(searchQuery)) &&
            (brandFilter === '' || car.attributes ["Marken"]=== brandFilter) &&
            (fuelFilter === '' || car.attributes["Kraftstoffe :"] === fuelFilter)
        );
    });
    if (filteredCars.length>0){
    displayCars(filteredCars);
    }
else {
    const container = document.querySelector(".main");
    container.innerHTML = ""; 
    const Element = document.createElement("div");
    Element.className = "car-listing";
    Element.innerText = "              No Results Found!!   ";
    container.appendChild(Element);
        }
    }
export default applyFilters;


