// API endpoints for user registration and login.
'use strict';

import express from 'express';
const router = express.Router();
import database from '../db/connection.js';
//import User from '../classes/user.js';

router.post('/saveUser', (request, response) => {
    const userData = request.body;
    
    // Create new user instance
   // const user = new User(userData);
   // console.log("user",userData);
    database.saveUser(userData).then(
        database.loadAllUsers
    ).then(
        payload => response.json({
            status: 'success',
            payload
        })
    ).catch(err => {
        console.warn(err);
        response.json({
            status: 'error',
            error: err.message
        })
    })
});
// Endpoint to save page visits to a local file
router.post("/savePageVisit", (req, res) => {
    const visit = req.body; // Data sent from the client

    // Read the existing file (if it exists) or initialize an empty list
    fs.readFile(filePath, "utf8", (err, data) => {
        let pageVisits = [];

        if (!err && data) {
            // Parse the existing data
            try {
                pageVisits = JSON.parse(data);
            } catch (parseError) {
              //  console.error("Error parsing existing data:", parseError);
            }
        }

        // Add the new visit
        pageVisits.push(visit);

        // Write the updated list back to the file
        fs.writeFile(filePath, JSON.stringify(pageVisits, null, 2), (writeErr) => {
            if (writeErr) {
               // console.error("Error writing to file:", writeErr);
                return res.status(500).send({ error: "Failed to save page visit" });
            }

           // console.log("Saved page visit:", visit);
            res.status(200).send({ message: "Page visit saved successfully!" });
        });
    });
});
router.get('/loadAllUsers', (request, response) => {
    database.loadAllUsers().then(
        payload => response.json({
            status: 'success',
            payload
        })
    ).catch(err => {
        console.warn(err);
        response.json({
            status: 'error',
            error: err.message
        })
    })
});

router.post('/removeUser', (request, response) => {
    database.removeUser(request.body).then(
        database.loadAllUsers
    ).then(
        payload => response.json({
            status: 'success',
            payload
        })
    ).catch(err => {
        console.warn(err);
        response.json({
            status: 'error',
            error: err.message
        })
    })
});

export default router;