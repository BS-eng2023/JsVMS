 // FUNKTIONEN
 const initAddCar = () => { 
console.log("auto selection script");
      /*save images*/
      document.getElementById("carPhotos").addEventListener("change", function () {
      const preview = document.getElementById("imagePreview");
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

    
      function getSelectedFeatures() {
        const checkboxes = document.querySelectorAll("input[name='features']:checked");
        return Array.from(checkboxes).map((checkbox) => checkbox.value);
      }
      const models = {
        BMW: ["1er", "3er", "5er", "7er", "X1", "X3", "X5", "X7"],
        Mercedes: ["A-Klasse","C-Klasse","E-Klasse", "S-Klasse","GLC", "GLE","G-Klasse"],
        Audi: ["A1", "A3", "A4", "A6", "Q3", "Q5", "Q7", "R8"],
        Volkswagen: ["Golf", "Passat", "Tiguan", "Touareg", "Polo", "Arteon"],
        Ford: ["Fiesta", "Focus", "Mondeo", "Mustang", "Kuga", "Ranger"],
        Toyota: ["Yaris", "Corolla", "Camry", "RAV4", "Land Cruiser", "Supra"],
        Opel: ["Corsa", "Astra", "Insignia", "Mokka", "Grandland"],
        Skoda: ["Fabia", "Octavia", "Superb", "Kodiaq", "Karoq"],
        Tesla: ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck"],
      };
      document.getElementById("brand").addEventListener("change", function () {
        const selectedBrand = this.value;
        const modelSelect = document.getElementById("model");
        modelSelect.innerHTML = `<option value="">-- Bitte Modell wählen --</option>`;
        modelSelect.disabled = !selectedBrand;

        if (selectedBrand) {
          models[selectedBrand].forEach((model) => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
          });
        }
      });

      // Color Selection Handling
      document.getElementById("color").addEventListener("change", function () {
        const selectedOption = this.options[this.selectedIndex];
        this.style.backgroundColor = selectedOption.dataset.color;
        this.style.color = selectedOption.value === "Black" ? "white" : "black";
        });
    // Save Car Data with Photos
    async function saveCarData() {
        const fileInput = document.getElementById("carPhotos");
        const files = fileInput.files;

        const readFileAsBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
          });
        };

     
        try {
          const photos = await Promise.all(Array.from(files).map(readFileAsBase64));

        const carsData = {
          carId: "car-" + Date.now(),
          userId: "UserId to be created",
          attributes:
          {
          creationDate: new Date().toISOString(),
          modificationDate: new Date().toISOString(),
          brand: document.getElementById("brand").value,
          model: document.getElementById("model").value,
          category: document.getElementById("category").value,
          mileage: document.getElementById("mileage").value,
          power: document.getElementById("power").value,
          fuel: document.getElementById("fuel").value,
          seats: document.getElementById("seats").value,
          doors: document.getElementById("doors").value,
          transmission: document.getElementById("transmission").value,
          emission: document.getElementById("emission").value,
          firstRegistration: document.getElementById("firstRegistration").value,
          color: document.getElementById("color").value,
          features: getSelectedFeatures(),
          },
          imageURL:"imageURL to be added ",
          photos: photos
         
        };

          const blob = new Blob([JSON.stringify(carsData, null, 2)], {
          type: "application/json",
        });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${carsData.carId}.json`;
        a.click();
        } catch (error) {
            console.error("Error reading files:", error);
            alert("Fehler beim Hochladen der Fotos. Bitte versuchen Sie es erneut.");
          }
        }
 
    
  }
        export function initAddCar() {}

        document.addEventListener("DOMContentLoaded", initAddCar);
