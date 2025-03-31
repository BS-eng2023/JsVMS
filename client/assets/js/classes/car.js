// Assuming Vehicle is imported from the Vehicle module
 import Vehicle from './Vehicle';

class Car extends Vehicle {
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
        updatedAt = new Date(),
        noOfDoors = 0,
        noOfSeats = 0,
        airConditioning = false
    } = {}) {
        super({
            vehicleId,
            vehicleType,
            brand,
            model,
            yearOfManufacture,
            price,
            mileAge,
            color,
            location,
            fuelType,
            carCondition,
            nextInspectionDate,
            transmissionType,
            enginePower,
            sellerId,
            sold,
            imagePath,
            createdAt,
            updatedAt
        });
        
        this.noOfDoors = noOfDoors;
        this.noOfSeats = noOfSeats;
        this.airConditioning = airConditioning;
    }

    // Getters and Setters
    getNoOfDoors() { return this.noOfDoors; }
    setNoOfDoors(noOfDoors) { this.noOfDoors = noOfDoors; }

    getNoOfSeats() { return this.noOfSeats; }
    setNoOfSeats(noOfSeats) { this.noOfSeats = noOfSeats; }

    isAirConditioning() { return this.airConditioning; }
    setAirConditioning(airConditioning) { this.airConditioning = airConditioning; }
/* 
    // Implement the abstract method
    getVehicleTypeDetails() {
        return [
            this.getVehicleId(),
            this.getVehicleType()?.name || '',
            this.getBrand(),
            this.getModel(),
            this.getYearOfManufacture(),
            this.getPrice(),
            this.getMileAge(),
            this.getColor()?.name || '',
            this.getLocation(),
            this.getFuelType()?.name || '',
            this.getCarCondition()?.name || '',
            this.getNextInspectionDate(),
            this.getTransmissionType()?.name || '',
            this.getEnginePower(),
            this.getSellerId(),
            this.isSold(),
            this.getImagePath(),
            this.getCreatedAt(),
            this.getUpdatedAt(),
            this.getNoOfDoors(),
            this.getNoOfSeats(),
            this.isAirConditioning()
        ].join(this.CSV_SEPARATOR) + '\n';
    } */
}

export default Car;