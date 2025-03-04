"use strict";

import elements from "./elements.js";
import compSelectbox from "./components/selectbox.js";
import createInputField from "./components/inputData.js";
import createCheckboxes from "./components/checkboxes.js";

const brands = [
  {
    markenname: "Volkswagen",
    modelle: [
      {
        name: "Golf",
        baujahre: [1974, 2025],
        moeglicheKW: [60, 300],
      },
      {
        name: "Polo",
        baujahre: [1975, 2025],
        moeglicheKW: [44, 207],
      },
      {
        name: "Passat",
        baujahre: [1973, 2025],
        moeglicheKW: [75, 280],
      },
      {
        name: "Tiguan",
        baujahre: [2007, 2025],
        moeglicheKW: [90, 240],
      },
    ],
    Infos:
      "Volkswagen ist eine der größten Automarken der Welt und bekannt für ihre Zuverlässigkeit und Qualität. Die Marke wurde 1937 gegründet und hat ihren Sitz in Wolfsburg, Deutschland.",
  },
  {
    markenname: "BMW",
    modelle: [
      {
        name: "3er",
        baujahre: [1975, 2025],
        moeglicheKW: [75, 130, 220, 500],
      },
      {
        name: "5er",
        baujahre: [1972, 2025],
        moeglicheKW: [110, 270, 600],
      },
      {
        name: "X3",
        baujahre: [2003, 2025],
        moeglicheKW: [105, 240, 350, 500],
      },
      {
        name: "X5",
        baujahre: [1999, 2025],
        moeglicheKW: [150, 270, 380, 600],
      },
    ],
    Infos:
      "BMW steht für Bayerische Motoren Werke und ist bekannt für seine sportlichen Fahrzeuge und innovative Technik. Die Marke wurde 1916 gegründet und hat ihren Hauptsitz in München, Deutschland.",
  },
  {
    markenname: "Mercedes-Benz",
    modelle: [
      {
        name: "C-Klasse",
        baujahre: [1993, 2025],
        moeglicheKW: [75, 510],
      },
      {
        name: "E-Klasse",
        baujahre: [1946, 2025],
        moeglicheKW: [90, 612],
      },
      {
        name: "S-Klasse",
        baujahre: [1972, 2025],
        moeglicheKW: [120, 630],
      },
      {
        name: "GLC",
        baujahre: [2015, 2025],
        moeglicheKW: [120, 510],
      },
    ],
    Infos:
      "Mercedes-Benz ist eine Luxusautomarke, die für ihre hochwertigen Fahrzeuge und fortschrittliche Technologie bekannt ist. Die Marke gehört zur Daimler AG und hat ihren Sitz in Stuttgart, Deutschland.",
  },
  {
    markenname: "Audi",
    modelle: [
      {
        name: "A3",
        baujahre: [1996, 2025],
        moeglicheKW: [66, 400],
      },
      {
        name: "A4",
        baujahre: [1994, 2025],
        moeglicheKW: [75, 450],
      },
      {
        name: "Q5",
        baujahre: [2008, 2025],
        moeglicheKW: [120, 367],
      },
      {
        name: "Q7",
        baujahre: [2005, 2025],
        moeglicheKW: [150, 500],
      },
    ],
    Infos:
      "Audi ist bekannt für seine Kombination aus Leistung und Luxus. Die Marke gehört zum Volkswagen-Konzern und hat ihren Sitz in Ingolstadt, Deutschland.",
  },
  {
    markenname: "Ford",
    modelle: [
      {
        name: "Focus",
        baujahre: [1998, 2025],
        moeglicheKW: [75, 280],
      },
      {
        name: "Fiesta",
        baujahre: [1976, 2025],
        moeglicheKW: [44, 200],
      },
      {
        name: "Mustang",
        baujahre: [1964, 2025],
        moeglicheKW: [150, 700],
      },
      {
        name: "Explorer",
        baujahre: [1990, 2025],
        moeglicheKW: [120, 400],
      },
    ],
    Infos:
      "Ford ist ein amerikanischer Automobilhersteller, der 1903 gegründet wurde. Die Marke ist bekannt für ihre Innovationen in der Automobilindustrie und ihre breite Palette an Fahrzeugen.",
  },
];

const car = {};

const addCar = () => {
  elements.main.innerHTML = "";

  const elSelction = document.createElement("h2");
  elSelction.innerHTML = "Auto einfugen";
  // container.className = 'column';
  elements.main.append(elSelction);
  const formElement  = document.createElement("form");
  formElement.className = 'carForm'; 
  elements.main.appendChild(formElement);

  const selMarken = compSelectbox(
    formElement,
    "Marken",
    brands.map((brand) => brand.markenname),
    (evt) => {
      let brand = brands.find((brand) => brand.markenname == evt.target.value);
      let modelle = brand.modelle.map((modell) => modell.name);
      selModelle.update(modelle);
    }
  );

  const selModelle = compSelectbox(formElement, "Modelle", null, (evt) => {
    let brand = brands.find((brand) => brand.markenname == selMarken.value);
    let modell = brand.modelle.find(
      (modell) => modell.name == evt.target.value
    );

    // Baujahre
    let baujahre = [];
    for (let i = modell.baujahre[0]; i < modell.baujahre[1]; i++) {
      baujahre.push(i);
    }
    selBaujahre.update(baujahre);

    // kW
    selKW.update(modell.moeglicheKW);
  });

  const selBaujahre = compSelectbox(formElement, "Baujahre", null, () => {});

  const selKW = compSelectbox(formElement, "Leistung (kW)", null, () => {});

  createInputField(formElement,"Leistung (PS):","power","number","z. B. 115 PS" );
  createInputField(formElement, "Kilometerstand:","mileage","number","z. B. 104000 km");

  const kraftstoffe = [
    "-- Bitte wählen --",
    "Benzin",
    "Diesel",
    "Elektro",
    "Hybrid",
  ];
  const selKraftstoffe = compSelectbox( formElement,"Kraftstoffe :",kraftstoffe, () => {}  );

  createInputField(formElement,"Anzahl der Sitze:","seats","number","z. B. 5" );
  createInputField(formElement,"Erstzulassung:","firstRegistration", "month"  );


  // Example usage:
  const features = [
    "ABS",
    "Alloy wheels",
    "Bluetooth",
    "CD player",
    "Central locking",
    "Daytime running lights",
    "Electric windows",
    "ESP",
    "Isofix",
    "Navigation system",
    "Rain sensor",
    "USB port",
    "Winter tyres",
  ];

  createCheckboxes(formElement, "exampleCheckbox", features);

  createInputField(formElement,"Fotos hochladen::","carPhotos","file");


    const carPreview = document.createElement("div");
    carPreview.className = 'imagePreview'; 
    carPreview.innerHTML = "Card Image"; // Clear previous previews
    elements.main.appendChild(carPreview);


       /*save images*/
       document.getElementById("carPhotos").addEventListener("change", function () {
        const preview = document.querySelector('.imagePreview');
        preview.innerHTML = ""; // Clear previous previews
  
        Array.from(this.files).forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.maxWidth = "400px";
            img.style.margin = "5px";
            preview.appendChild(img);
          };
          reader.readAsDataURL(file);
        });
      });
  
 

const saveCarsDataButton = document.createElement("button");
saveCarsDataButton.className = 'saveButton'; 
saveCarsDataButton.style.fontSize = "18px"; // Set font size
//Button.onclick = saveCarData; // Assign function

// Create icon element
const icon = document.createElement("i");
icon.classList.add("fas", "fa-save"); // Add FontAwesome classes

// Set button text
saveCarsDataButton.appendChild(icon);
saveCarsDataButton.appendChild(document.createTextNode(" Speichern"));
elements.main.appendChild(saveCarsDataButton);


   function getFormData() {
    const form = document.querySelector('.carForm');
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        if (data[key]) {
            // Handle multiple selections like checkboxes
            if (!Array.isArray(data[key])) {
                data[key] = [data[key]];
            }
            data[key].push(value);
        } else {
            data[key] = value;
        }
    });
    //return data;

    const carsData = {
        carId: "car-" + Date.now(),
        userId: "UserId to be created",
        attributes:data,
        imageURL:"imageURL to be added ",
             };

        const blob = new Blob([JSON.stringify(carsData, null, 2)], {
        type: "application/json",
      });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${carsData.carId}.json`;
      a.click();
      } 
    


// Example Usage
document.querySelector('.saveButton').addEventListener("click", function () {
    const formData = getFormData("car-form");
    console.log(formData);
});

}

export default addCar;
