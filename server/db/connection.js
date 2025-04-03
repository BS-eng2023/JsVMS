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

    saveUser(userData) {
        const dbUsers = dbConn.use('vms');
        
        const userDoc = {
            _id: `user_${Date.now()}`,
            type: 'user',
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            address: userData.address,
            userType: userData.type,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }; 
         
 /*      const userDoc = {
            "_id": "user_123456789",
            "type": "user",
            "name": "John Doe",
            "email": "john@example.com",
            "phone": "123-456-7890",
            "address": "123 Main St",
            "userType": "Customer",
            "createdAt": "2023-05-20T12:00:00.000Z",
            "updatedAt": "2023-05-20T12:00:00.000Z",
          };  */
         

        return dbUsers.insert(userData);
    },

    loadUser(userId) {
        const dbUsers = dbConn.use('vms');
        return dbUsers.get('vms');
    },

    loadAllUsers() {
        const dbUsers = dbConn.use('vms');
        
        return dbUsers.list({ include_docs: true }).then(
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
    }
};

export default database;