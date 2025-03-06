"use strict";
import elements from "./elements.js";
import createInputField from "./components/inputData.js";

const login = () => {
    elements.main.innerHTML = "";
    const elSelction = document.createElement("h2");
    elSelction.innerHTML = "Anmelden";
    elements.main.append(elSelction);
    const formElement  = document.createElement("form");
    formElement.className = 'userForm'; 
    elements.main.appendChild(formElement);
    createInputField(formElement, "Benutzer Name:","userName","text","benutzername");
    createInputField(formElement, "Passwort:","userPassword","password","password");

    const loginButton = document.createElement("button");
    loginButton.className = 'userLogin'; 
    loginButton.style.fontSize = "18px"; // Set font size
    //Button.onclick = saveCarData; // Assign function

    // Create icon element
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-sign-in"); // Add FontAwesome classes

    // Set button text
    loginButton.appendChild(icon);
    loginButton.appendChild(document.createTextNode("  Anmelden"));
    elements.main.appendChild(loginButton);


    const logInButton = document.getElementById("logIn");
    const addNewCarButton = document.getElementById("addNewCar");
    
    // Standardmäßig deaktiviert
    addNewCarButton.title = "Bitte zuerst anmelden!";
    addNewCarButton.disabled = true;
    
    let isLoggedIn = false;
    
    logInButton.addEventListener("click", function () {
        // Hier sollte eine echte Login-Überprüfung erfolgen
        //const loginSuccess = confirm("Login erfolgreich?"); // Simulierte Login-Bestätigung
        let loginSuccess=false;
    // Login function
        function login(username, password) {
            fetch('../assets/json/users.json')
            .then(response => response.json())
            .then(data => {
                elements.data=data;
                populateFilters(data);
                displayCars(data);
            })
            .catch(error => console.error('Error loading the JSON file:', error));
            // Find the user in the array
            // car.attributes ["Marken"]
            const user = users.find(user => user.attributes.userName === username);

            // Check if the user exists and the password matches
            if (user && user.attributes.userPassword === password) {
                return "Login successful! Welcome, " + user.attributes.userName + "!";
                loginSuccess=true;
            } else {
                return "Invalid username or password. Please try again.";
            }
        }    
        if (loginSuccess) {
            isLoggedIn = true;
            addNewCarButton.disabled = false;
            addNewCarButton.title = "Jetzt können Sie ein neues Auto hinzufügen!";
            //logInButton.disabled = true;
        }
    });
}
export default login;
