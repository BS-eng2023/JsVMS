// API endpoints for vehicle CRUD operations.

'use strict';

import express from 'express';
const router = express.Router();
import database from '../db/connection.js';
const { getAllVehicles, getVehicleById } = require("../controllers/vehicleController.js");


router.get("/", getAllVehicles);
router.get("/:id", getVehicleById);

export default router;