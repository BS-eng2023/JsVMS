'use strict';

class Vehicle {
    // Constants
    static NO_VALUE_YET = ">noValueYet<";
    static NO_ID_YET = -1;
    
    constructor({
        _id = Vehicle.NO_ID_YET,
        userId = null,
        creationDate = new Date(),
        modificationDate = new Date(),
        imageURL = Vehicle.NO_VALUE_YET,
        attributes = {
            title: 'car',
            brand: Vehicle.NO_VALUE_YET,
            model: Vehicle.NO_VALUE_YET,
            yearOfManufacture: 0,
            enginePower: 0,
            mileAge: 0,
            fuelType: null,
            firstRegistration: Vehicle.NO_VALUE_YET,
            color: null,
            features: [],
            carPhotos: {}
        }
    } = {}) {
        this._id = _id;
        this.userId = userId;
        this.creationDate = creationDate;
        this.modificationDate = modificationDate;
        this.imageURL = imageURL;
        this.attributes = attributes;
    }

    // Getters and Setters
  /*   get vehicleId() { return this._vehicleId; }
    set vehicleId(value) { this._vehicleId = value; } */

    

    // Feature management methods
    addFeature(feature) {
        if (!this.attributes.features.includes(feature)) {
            this.attributes.features.push(feature);
        }
        return this; // Enable method chaining
    }

    removeFeature(feature) {
        this.attributes.features = this.attributes.features.filter(f => f !== feature);
        return this; // Enable method chaining
    }

    hasFeature(feature) {
        return this.attributes.features.includes(feature);
    }

    // Abstract method - to be implemented by subclasses
    getVehicleTypeDetails() {
        throw new Error("Method 'getVehicleTypeDetails()' must be implemented.");
    }
}

export default Vehicle;