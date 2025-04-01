// Assuming these enums are defined elsewhere and imported
// import { Vehicletype, VehicleColor, FuelType, VehicleStatus, TransmissionType } from './enums';

class Vehicle {
    // Constants
    static NO_VALUE_YET = ">noValueYet<";
    static NO_ID_YET = -1;
   
    constructor({
        vehicleId = Vehicle.NO_ID_YET,
        vehicleType = null,
        brand = Vehicle.NO_VALUE_YET,
        model = Vehicle.NO_VALUE_YET,
        yearOfManufacture = 0,
        price = 0.0,
        mileAge = 0,
        color = null,
        location = Vehicle.NO_VALUE_YET,
        fuelType = null,
        carCondition = null,
        nextInspectionDate = Vehicle.NO_VALUE_YET,
        transmissionType = null,
        enginePower = 0,
        sellerId = Vehicle.NO_ID_YET,
        sold = false,
        imagePath = Vehicle.NO_VALUE_YET,
        createdAt = new Date(),
        updatedAt = new Date()
    } = {}) {
        this.vehicleId = vehicleId;
        this.vehicleType = vehicleType;
        this.brand = brand;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.price = price;
        this.mileAge = mileAge;
        this.color = color;
        this.location = location;
        this.fuelType = fuelType;
        this.carCondition = carCondition;
        this.nextInspectionDate = nextInspectionDate;
        this.transmissionType = transmissionType;
        this.enginePower = enginePower;
        this.sellerId = sellerId;
        this.sold = sold;
        this.imagePath = imagePath;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // Getters and Setters
    getVehicleId() { return this.vehicleId; }
    setVehicleId(vehicleId) { this.vehicleId = vehicleId; }

    getVehicleType() { return this.vehicleType; }
    setVehicleType(vehicleType) { this.vehicleType = vehicleType; }

    getBrand() { return this.brand; }
    setBrand(brand) { this.brand = brand; }

    getModel() { return this.model; }
    setModel(model) { this.model = model; }

    getYearOfManufacture() { return this.yearOfManufacture; }
    setYearOfManufacture(yearOfManufacture) { this.yearOfManufacture = yearOfManufacture; }

    getPrice() { return this.price; }
    setPrice(price) { this.price = price; }

    getMileAge() { return this.mileAge; }
    setMileAge(mileAge) { this.mileAge = mileAge; }

    getColor() { return this.color; }
    setColor(color) { this.color = color; }

    getLocation() { return this.location; }
    setLocation(location) { this.location = location; }

    getFuelType() { return this.fuelType; }
    setFuelType(fuelType) { this.fuelType = fuelType; }

    getCarCondition() { return this.carCondition; }
    setCarCondition(carCondition) { this.carCondition = carCondition; }

    getNextInspectionDate() { return this.nextInspectionDate; }
    setNextInspectionDate(nextInspectionDate) { this.nextInspectionDate = nextInspectionDate; }

    getTransmissionType() { return this.transmissionType; }
    setTransmissionType(transmissionType) { this.transmissionType = transmissionType; }

    getEnginePower() { return this.enginePower; }
    setEnginePower(enginePower) { this.enginePower = enginePower; }

    getSellerId() { return this.sellerId; }
    setSellerId(sellerId) { this.sellerId = sellerId; }

    isSold() { return this.sold; }
    setSold(sold) { this.sold = sold; }

    getImagePath() { return this.imagePath; }
    setImagePath(imagePath) { this.imagePath = imagePath; }

    getCreatedAt() { return this.createdAt; }
    setCreatedAt(createdAt) { this.createdAt = createdAt; }

    getUpdatedAt() { return this.updatedAt; }
    setUpdatedAt(updatedAt) { this.updatedAt = updatedAt; }

    // Abstract method - to be implemented by subclasses
    getVehicleTypeDetails() {
        throw new Error("Method 'getVehicleTypeDetails()' must be implemented.");
    }
/* 
    toString() {
        return `Vehicle{
            CSV_SEPARATOR='${this.CSV_SEPARATOR}',
            vehicleId=${this.vehicleId},
            vehicleType=${this.vehicleType},
            brand='${this.brand}',
            model='${this.model}',
            yearOfManufacture=${this.yearOfManufacture},
            price=${this.price},
            mileAge=${this.mileAge},
            color=${this.color},
            location='${this.location}',
            fuelType=${this.fuelType},
            carCondition=${this.carCondition},
            nextInspectionDate='${this.nextInspectionDate}',
            transmissionType=${this.transmissionType},
            enginePower=${this.enginePower},
            sellerId=${this.sellerId},
            sold=${this.sold},
            imagePath='${this.imagePath}',
            createdAt=${this.createdAt},
            updatedAt=${this.updatedAt}
        }`;
    } */
}

export default Vehicle;