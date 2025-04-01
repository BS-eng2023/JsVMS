"use strict";
import golbalData from "../golbalData.js";
import dom from "../dom.js";

function populateFilters(carsData) {
    const brandFilter = document.getElementById('brand-filter');
    const fuelFilter = document.getElementById('fuel-filter');
    
    const brands = new Set();
    const fuels = new Set();
    
    carsData.forEach(car => {
        brands.add(car.attributes["Marken"]);
        fuels.add(car.attributes["Kraftstoffe :"]);
    });
    
    brands.forEach(brand => {
        dom.create({
            type: "option",
            content: brand,
            parent: brandFilter,
          });
         });
    
    fuels.forEach(fuel => {
        dom.create({
            type: "option",
            content: fuel,
            parent: fuelFilter,
          });
    });
}
export default populateFilters;
