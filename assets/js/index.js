            "use strict";

            //// add car script
            import elements from './elements.js';
            import addCar from './addCar.js';
            import addUser from './addUser.js';
            import logIn from './logIn.js';

            //disable add new car button //
            const addNewCarButton = document.getElementById("addNewCar");
            addNewCarButton.title = "Bitte zuerst anmelden!";
            addNewCarButton.disabled = true;

            const domMapping = () => {
                 elements.main = document.querySelector('.main');
                 elements.main.innerHTML="";
                 elements.logIn = document.querySelector('#logIn');
                 elements.addNewCar = document.querySelector('#addNewCar');
                 elements.addNewUser = document.querySelector('#addNewUser');

           }

            const appendEventListeners = () => {
                elements.logIn.addEventListener('click', logIn);
                elements.addNewCar.addEventListener('click', addCar);
                elements.addNewUser.addEventListener('click', addUser);
            }
            ////

            function displayCars(cars) {
            const container = document.querySelector(".main");
            container.innerHTML = "";
            cars.forEach((car) => {
                const carElement = document.createElement("div");
                carElement.className = "car-listing";
                carElement.innerHTML = `
                    <h2>${car.title}</h2>
                        <div class="car-container">
                            <img src="${car.previewImage}"  class="car-image">
                            <div class="car-info">
                                <p><strong>Price:</strong> ${car.price.total.localized}</p>
                                <p><strong>Brand:</strong> ${car.brand} | <strong>Model:</strong> ${car.model}</p>
                                <p><strong>Category:</strong> ${car.category}</p>
                                <p><strong>Mileage:</strong> ${car.attributes["Mileage"]}</p>
                                <p><strong>Fuel:</strong> ${car.attributes["Fuel"]}</p>
                                <p><a href="${car.url}" target="_blank">View Listing</a></p>
                            </div>
                        </div>
                    `;
                container.appendChild(carElement);
            });
            }
            // FUNKTIONEN
            const init = () => {
            const xhr = new XMLHttpRequest();
            xhr.open("get", "./carList02.json");
            xhr.addEventListener("load", () => {
                if (xhr.status == 200) {
                let response = JSON.parse(xhr.response);
                //render(response);
                displayCars(response);
                } else {
                console.warn("Es gab ein Problem");
                }
            });
            // Erst absenden, wenn das DOM fertig geladen ist
            xhr.send();
            const button = document.querySelector("#applyFilters");

            // Füge ein Click-Event hinzu
            button.addEventListener("click", function () {
                let right = document.querySelector(".right");
                right.classList.toggle("rightSearchClicked");
            });

            ////add car script
            domMapping();
            appendEventListeners();
            ////
            };

            // INIT
            document.addEventListener("DOMContentLoaded", init);

            /*
                        fetch('./carList02.json')
                        .then(response => response.json())
                        .then(data => {
                            carsData = data;
                            //populateFilters();
                            displayCars(data);
                        })
                        .catch(error => console.error('Error loading the JSON file:', error));


                        function loadContent() {
            fetch('inputform.html') // Load another HTML file
            .then(response => response.text())
            .then(data => {
            const container=document.querySelector(".main");
            container.innerHTML="";
            const carElement=document.createElement("div");
            carElement.innerHTML=data;
            container.appendChild(carElement);
            })
            .catch(error => console.error('Error loading content:', error));

            }
            */
