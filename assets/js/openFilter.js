'use strict';

import elements from './elements.js';
import compSelectbox from './components/selectbox.js';

const brands = [
    {
        "markenname": "Volkswagen",
        "modelle": [
            {
                "name": "Golf",
                "baujahre": [1974, 2025],
                "moeglicheKW": [60, 300]
            },
            {
                "name": "Polo",
                "baujahre": [1975, 2025],
                "moeglicheKW": [44, 207]
            },
            {
                "name": "Passat",
                "baujahre": [1973, 2025],
                "moeglicheKW": [75, 280]
            },
            {
                "name": "Tiguan",
                "baujahre": [2007, 2025],
                "moeglicheKW": [90, 240]
            }
        ],
        "Infos": "Volkswagen ist eine der größten Automarken der Welt und bekannt für ihre Zuverlässigkeit und Qualität. Die Marke wurde 1937 gegründet und hat ihren Sitz in Wolfsburg, Deutschland."
    },
    {
        "markenname": "BMW",
        "modelle": [
            {
                "name": "3er",
                "baujahre": [1975, 2025],
                "moeglicheKW": [75, 130, 220, 500]
            },
            {
                "name": "5er",
                "baujahre": [1972, 2025],
                "moeglicheKW": [110, 270, 600]
            },
            {
                "name": "X3",
                "baujahre": [2003, 2025],
                "moeglicheKW": [105, 240, 350, 500]
            },
            {
                "name": "X5",
                "baujahre": [1999, 2025],
                "moeglicheKW": [150, 270, 380, 600]
            }
        ],
        "Infos": "BMW steht für Bayerische Motoren Werke und ist bekannt für seine sportlichen Fahrzeuge und innovative Technik. Die Marke wurde 1916 gegründet und hat ihren Hauptsitz in München, Deutschland."
    },
    {
        "markenname": "Mercedes-Benz",
        "modelle": [
            {
                "name": "C-Klasse",
                "baujahre": [1993, 2025],
                "moeglicheKW": [75, 510]
            },
            {
                "name": "E-Klasse",
                "baujahre": [1946, 2025],
                "moeglicheKW": [90, 612]
            },
            {
                "name": "S-Klasse",
                "baujahre": [1972, 2025],
                "moeglicheKW": [120, 630]
            },
            {
                "name": "GLC",
                "baujahre": [2015, 2025],
                "moeglicheKW": [120, 510]
            }
        ],
        "Infos": "Mercedes-Benz ist eine Luxusautomarke, die für ihre hochwertigen Fahrzeuge und fortschrittliche Technologie bekannt ist. Die Marke gehört zur Daimler AG und hat ihren Sitz in Stuttgart, Deutschland."
    },
    {
        "markenname": "Audi",
        "modelle": [
            {
                "name": "A3",
                "baujahre": [1996, 2025],
                "moeglicheKW": [66, 400]
            },
            {
                "name": "A4",
                "baujahre": [1994, 2025],
                "moeglicheKW": [75, 450]
            },
            {
                "name": "Q5",
                "baujahre": [2008, 2025],
                "moeglicheKW": [120, 367]
            },
            {
                "name": "Q7",
                "baujahre": [2005, 2025],
                "moeglicheKW": [150, 500]
            }
        ],
        "Infos": "Audi ist bekannt für seine Kombination aus Leistung und Luxus. Die Marke gehört zum Volkswagen-Konzern und hat ihren Sitz in Ingolstadt, Deutschland."
    },
    {
        "markenname": "Ford",
        "modelle": [
            {
                "name": "Focus",
                "baujahre": [1998, 2025],
                "moeglicheKW": [75, 280]
            },
            {
                "name": "Fiesta",
                "baujahre": [1976, 2025],
                "moeglicheKW": [44, 200]
            },
            {
                "name": "Mustang",
                "baujahre": [1964, 2025],
                "moeglicheKW": [150, 700]
            },
            {
                "name": "Explorer",
                "baujahre": [1990, 2025],
                "moeglicheKW": [120, 400]
            }
        ],
        "Infos": "Ford ist ein amerikanischer Automobilhersteller, der 1903 gegründet wurde. Die Marke ist bekannt für ihre Innovationen in der Automobilindustrie und ihre breite Palette an Fahrzeugen."
    }
];

const filter = {};

const openFilter = () => {

    elements.main.innerHTML = '';

    const selMarken = compSelectbox(
        elements.main,
        'Marken',
        brands.map(brand => brand.markenname),
        (evt) => {
            let brand = brands.find(brand => brand.markenname == evt.target.value);
            let modelle = brand.modelle.map(modell => modell.name);
            selModelle.update(modelle);
        }
    )

    const selModelle = compSelectbox(
        elements.main,
        'Modelle',
        null,
        evt => {

            let brand = brands.find(brand => brand.markenname == selMarken.value);
            let modell = brand.modelle.find(modell => modell.name == evt.target.value);

            // Baujahre
            let baujahre = [];
            for (let i = modell.baujahre[0]; i < modell.baujahre[1]; i++) {
                baujahre.push(i);
            }
            selBaujahre.update(baujahre);

            // kW
            selKW.update(modell.moeglicheKW);
        }
    )

    const selBaujahre = compSelectbox(
        elements.main,
        'Baujahre',
        null,
        () => { }
    )

    const selKW = compSelectbox(
        elements.main,
        'Leistung (kW)',
        null,
        () => { }
    )

}

export default openFilter;