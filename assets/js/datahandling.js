'use strict';

import elements from './elements.js';

const datahandling = {
    loadLocalStorage(itemName, payload = []) {
        let loaded = localStorage.getItem(itemName);
        payload = loaded ? JSON.parse(loaded) : payload;

        return payload;
    },
    saveContent(contents) {
        localStorage.setItem('contents', JSON.stringify(contents));
    },
    appendContent(evt) {
        evt.preventDefault();

        let contents = datahandling.loadLocalStorage('contents');

        const myFormData = new FormData(elements.form);

        // Daten initialisieren
        const payload = {
            isDraft: 'off',
        };

        // Daten Zusammentragen
        for (let entry of myFormData.entries()) {
            let key = entry[0];
            let value = entry[1];

            payload[key] = value;
        }

        contents.push(payload);

        // Daten schreiben
        localStorage.setItem('contents', JSON.stringify(contents));

    }
}


export default datahandling;