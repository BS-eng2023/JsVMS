// API endpoints for vehicle CRUD operations.

const express = require("express");
const { getAllVehicles, getVehicleById } = require("../controllers/vehicleController.js");

const router = express.Router();

router.get("/", getAllVehicles);
router.get("/:id", getVehicleById);

module.exports = router;
