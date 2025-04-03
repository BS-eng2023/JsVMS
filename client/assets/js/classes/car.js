//import Vehicle from './vehicle';
import Vehicle from '/assets/js/classes/Vehicle.js';

class Car extends Vehicle {
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
        },
        noOfSeats = 5
    } = {}) {
        super({
            _id,
            userId,
            creationDate,
            modificationDate,
            imageURL,
            attributes
        });
        
        this.noOfSeats = noOfSeats;
    }

 

    
   // Static method to create Car instance from JSON
   static fromJson(json) {
    return new Car({
        _id: json.carId,
        userId: json.userId,
      //  userId: "user"+(json.carId),
        creationDate: new Date(json.creationDate),
        modificationDate: new Date(json.modificationDate),
        imageURL: json.imageURL,
        attributes: {
            title: json.attributes.title,
            brand: json.attributes.Marken,
            model: json.attributes.Modelle,
            yearOfManufacture: parseInt(json.attributes.Baujahre) || 0,
            enginePower: parseInt(json.attributes['Leistung (kW)']) || 0,
            mileAge: parseInt(json.attributes.mileage) || 0,
            fuelType: json.attributes['Kraftstoffe :'],
            firstRegistration: json.attributes.firstRegistration,
            color: json.attributes['Auto Farbe :'],
            features: json.attributes.features || [],
        },
        noOfSeats: parseInt(json.attributes.seats) || 5
    });
}

    // Additional convenience methods
    addFeature(feature) {
        if (!this.attributes.features.includes(feature)) {
            this.attributes.features.push(feature);
        }
        return this; // for method chaining
    }

    removeFeature(feature) {
        this.attributes.features = this.attributes.features.filter(f => f !== feature);
        return this; // for method chaining
    }
}

export default Car;

