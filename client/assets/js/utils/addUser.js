"use strict";
import compSelectbox from "../components/selectbox.js";
import createInputField from "../components/inputData.js";
import createCheckboxes from "../components/checkboxes.js";
import User from "../classes/user.js";
import userApi from "../APIs/userApi.js";

import golbalData from "../golbalData.js";
import elements from "../elements.js";
import dom from "../dom.js";
//import uuidv4  from "uuid";
//import { v4 as uuidv4 } from 'uuid';
//const { v4: uuidv4 } = require('uuid');

const addUser = () => {
  const createNumber = (min, max) => ~~(Math.random() * (max - min + 1) + min);

  elements.main.innerHTML = "";
  const elSelect = dom.create({
    type: "h2",
    parent: elements.main,
    content: "Benutzer einfugen",
  });

  const formElement = dom.create({
    type: "form",
    parent: elements.main,
    cssClassName: "userForm",
  });

  createInputField(
    formElement,
    "Benutzer Name:",
    "userName",
    "text",
    "benutzername"
  );
  createInputField(
    formElement,
    "Passwort:",
    "userPassword",
    "password",
    "password"
  );
  createInputField(
    formElement,
    "Email Adresse:",
    "userMail",
    "mail",
    "muster@mustermail.de"
  );
  createInputField(
    formElement,
    "Benutzer Adresse:",
    "userAddress",
    "text",
    "Adresse"
  );
  createInputField(
    formElement,
    "Handynummer:",
    "userPhoneNumber",
    "number",
    "0176543210000"
  );
  compSelectbox(
    formElement,
    "UserType",
    golbalData.userType,
    () => {}
  );

  const saveUserDataButton = document.createElement("button");
  saveUserDataButton.className = "adduser";
  saveUserDataButton.style.fontSize = "18px"; // Set font size
  //Button.onclick = saveCarData; // Assign function

  // Create icon element
  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-save"); // Add FontAwesome classes

  // Set button text
  saveUserDataButton.appendChild(icon);
  saveUserDataButton.appendChild(document.createTextNode("   Einfügen"));
  elements.main.appendChild(saveUserDataButton);

  function getFormData() {
    const form = document.querySelector(".userForm");
    console.log(form);
    const formData = new FormData(form);
    const userData = {};
    console.log("formData", formData);

    formData.forEach((value, key) => {
      if (userData[key]) {
        // Handle multiple selections like checkboxes
        if (!Array.isArray(userData[key])) {
          userData[key] = [userData[key]];
        }
        userData[key].push(value);
      } else {
        userData[key] = value;
      }
    });
    console.log(userData);
    //return data;
    /* user data object*/
    let userID = "user-" + Date.now() + createNumber(100, 999);
    //const userID = uuidv4();

    golbalData.currentUserId = userID;
    const jsonUser = {
      _id: userID,
      ...userData,
    };
    //use the user class
    //console.log("jsonUser", jsonUser);

    // const newUser = new User();

    const newUser = User.fromJson(jsonUser);

    console.log("newUser", newUser);
    userApi.createUser(newUser)
      .then((response) => {
        console.log("response :", response);
        const users = response.map((user) => User.fromJson(user));
        const createdUser = User.fromJson(response);
       // console.log("Users:", users);
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
      });

    /*          // Save the document to PouchDB
            const db = new PouchDB('my_database');

            db.put(userFromJson).then(response => {
                console.log("Vehicle saved:", response);
            }).catch(error => {
                console.error("Error saving vehicle:", error);
            }); */

    /*   filename="../json/cars";
             writeFileSync(`${filename}.json`, JSON.stringify(user, null, 2)); */

    /*   //function saveJSON() {
                console.log("Current Page Directory:", window.location.href);

             const xhr = new XMLHttpRequest();
             //xhr.open("POST", "./cars.json", true);
             //xhr.open("POST", "../json/cars.json", true);
             xhr.open("POST", "http://127.0.0.1:5501/index.html", true);

             xhr.setRequestHeader("Content-Type", "application/json");
                      xhr.onreadystatechange = function () {
                 if (xhr.readyState === 4 && xhr.status === 200) {
                     console.log("JSON updated successfully:", xhr.responseText);
                 }
             };
         
             xhr.send(JSON.stringify(user)); */
    //}

    const blob = new Blob([JSON.stringify(jsonUser, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${jsonUser.userId}.json`;
    a.click();
  }

  document.querySelector(".adduser").addEventListener("click", function () {
    const formData = getFormData();
  });
};
export default addUser;
