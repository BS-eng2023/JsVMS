// Sequelize connection configuration
'use strict';

import nano from "nano";
import cred from './credentials.json' with {type: 'json'};
import settings from './settings.js';

let dbConn = nano(`http://${cred.dbUser}:${cred.dbPW}@${cred.dbURL}:${cred.dbPort}`);
dbConn = dbConn.db;

const database = {
    init() {
        return dbConn.list().then(
            dbNames => {
                const checkAndCreate = dbName => {
                    if (!dbNames.includes(dbName))
                        return dbConn.create(dbName);
                };
                return Promise.all(settings.dbNames.map(checkAndCreate));
            }
        ).then(
            () => console.log('Databases checked and created')
        );
    },

//////////////////////////////
    // user DB methods//
//////////////////////////////

    saveUser(userData) {
        const dbUsers = dbConn.use('vms');
                return dbUsers.insert(userData);
    },

    loadUser(userId) {
        const dbUsers = dbConn.use('vms');
        return dbUsers.get('vms');
    },
///
    loadAllUsers() {
        const dbUsers = dbConn.use('vms');
        
        return dbUsers.list({ include_docs: true,
            startkey: 'user-',
            endkey: 'user-\uffff'  // \uffff ensures we get all IDs starting with 'car-'

            
         }).then(
            result => result.rows.map(row => row.doc)
        );
    },

    removeUser(user) {
        const dbUsers = dbConn.use('vms');
        return dbUsers.destroy(user._id, user._rev);
    },

    updateUser(userId, updateData) {
        const dbUsers = dbConn.use('vms');
        
        return dbUsers.get(userId).then(
            doc => {
                const updatedDoc = {
                    ...doc,
                    ...updateData,
                    updatedAt: new Date().toISOString()
                };
                return dbUsers.insert(updatedDoc);
            }
        );
    },


    //////////////////////////////
    // car DB methods//
    //////////////////////////////
        saveCar(carData) {
            const dbCars = dbConn.use('vms');  'vms'
            return dbCars.insert(carData);
        },
    
        loadCar(carId) {
            const dbCars = dbConn.use('vms');
            return dbCars.get(carId); // Directly get by carId
        },
    
        loadAllCars() {
            const dbCars = dbConn.use('vms');
            
            return dbCars.list({ include_docs: true ,
                startkey: 'car-',
                endkey: 'car-\uffff'  // \uffff ensures we get all IDs starting with 'car-'
            }).then(
                result => result.rows.map(row => row.doc)
            );
        },
    
        removeCar(car) {
            const dbCars = dbConn.use('vms');
            return dbCars.destroy(car._id, car._rev);
        },
    
        updateCar(carId, updateData) {
            const dbCars = dbConn.use('vms');
            
            return dbCars.get(carId).then(
                doc => {
                    const updatedDoc = {
                        ...doc,
                        ...updateData,
                        modificationDate: new Date().toISOString() // Using car's modificationDate
                    };
                    return dbCars.insert(updatedDoc);
                }
            );
        },
    
        // Additional car-specific methods
        getCarsByUser(userId) {
            const dbCars = dbConn.use('vms');
            
            return dbCars.find({
                selector: {
                    userId: userId
                }
            }).then(result => result.docs);
        },
    
        searchCars(searchParams) {
            const dbCars = dbConn.use('vms');
            
            return dbCars.find({
                selector: {
                    $or: [
                        { 'attributes.Marken': searchParams.make },
                        { 'attributes.Modelle': searchParams.model },
                        { 'attributes.Baujahre': searchParams.year },
                        { 'attributes.Kraftstoffe :': searchParams.fuelType }
                    ]
                }
            }).then(result => result.docs);
        }
    };
    


export default database;