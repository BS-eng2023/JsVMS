'use strict';

import express from 'express';
const router = express.Router();
import database from '../db/connection.js';
import fs from 'fs';
import path from 'path';

// File path for saving car views
const carViewsPath = path.join(process.cwd(), 'carViews.json');

// API endpoints for car operations
router.post('/saveCar', (request, response) => {
    const carData = request.body;
    
    database.saveCar(carData).then(
     //   database.loadAllCars
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
        });
    });
});

// Endpoint to save car views
router.post("/saveCarView", (req, res) => {
    const view = req.body;

    fs.readFile(carViewsPath, "utf8", (err, data) => {
        let carViews = [];

        if (!err && data) {
            try {
                carViews = JSON.parse(data);
            } catch (parseError) {
                console.error("Error parsing existing data:", parseError);
            }
        }

        carViews.push(view);

        fs.writeFile(carViewsPath, JSON.stringify(carViews, null, 2), (writeErr) => {
            if (writeErr) {
                console.error("Error writing to file:", writeErr);
                return res.status(500).send({ error: "Failed to save car view" });
            }

            res.status(200).send({ message: "Car view saved successfully!" });
        });
    });
});

router.get('/loadAllCars', (request, response) => {
    database.loadAllCars().then(
        payload => response.json({
            status: 'success',
            payload
        })
    ).catch(err => {
        console.warn(err);
        response.json({
            status: 'error',
            error: err.message
        });
    });
});

router.get('/getCar/:carId', (request, response) => {
    database.getCar(request.params.carId).then(
        payload => response.json({
            status: 'success',
            payload
        })
    ).catch(err => {
        console.warn(err);
        response.json({
            status: 'error',
            error: err.message
        });
    });
});

router.get('/getCarsByUser/:userId', (request, response) => {
    database.getCarsByUser(request.params.userId).then(
        payload => response.json({
            status: 'success',
            payload
        })
    ).catch(err => {
        console.warn(err);
        response.json({
            status: 'error',
            error: err.message
        });
    });
});

router.post('/updateCar', (request, response) => {
    database.updateCar(request.body).then(
        database.loadAllCars
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
        });
    });
});

router.post('/removeCar', (request, response) => {
    database.removeCar(request.body).then(
        database.loadAllCars
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
        });
    });
});

router.post('/searchCars', (request, response) => {
    database.searchCars(request.body).then(
        payload => response.json({
            status: 'success',
            payload
        })
    ).catch(err => {
        console.warn(err);
        response.json({
            status: 'error',
            error: err.message
        });
    });
});

export default router;