
        // Callback
      //  'use strict';

        const render = response => {
            const elMain = document.querySelector('main');
            elMain.innerHTML = '';

            for (let country of response.countries) {
                const container = document.createElement('div');
                container.className = 'container';
                elMain.append(container);

                const elHeader = document.createElement('h2');
                elHeader.innerHTML = country.name;
                container.append(elHeader);

                const elPop = document.createElement('p');
                elPop.innerHTML = (country.population / 1e6).toFixed(2) + 'Mio';
                container.append(elPop);
            }

        }

        const xhr = new XMLHttpRequest();
        xhr.open('get', './asstes/cars.json');
        xhr.addEventListener('load', () => {
            if (xhr.status == 200) {
                let response = JSON.parse(xhr.response);
                render(response);
            } else {
                console.warn('Es gab ein Problem');
            }
        })

        // FUNKTIONEN
        const init = () => {
            // Erst absenden, wenn das DOM fertig geladen ist
            xhr.send();
            const button = document.querySelector("#applyFilters");

            // Füge ein Click-Event hinzu
            button.addEventListener("click", function () {
                let right= document.querySelector(".right");
                right.classList.toggle("rightSearchClicked");
            });

            fetch('carList02.json')
            .then(response => response.json())
            .then(data => {
                carsData = data;
                //populateFilters();
                displayCars(data);
            })
            .catch(error => console.error('Error loading the JSON file:', error));

        function displayCars(cars) {
            const container = document.querySelector('.main');
            container.innerHTML = '';
            cars.forEach(car => {
                const carElement = document.createElement('div');
                carElement.className = 'car-listing';
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

        }

        // INIT
        document.addEventListener('DOMContentLoaded', init);

