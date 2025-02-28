
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

        }

        // INIT
        document.addEventListener('DOMContentLoaded', init);

