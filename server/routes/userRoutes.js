// API endpoints for user registration and login.
'use strict';

import express from 'express';
const router = express.Router();
import database from '../db/connection.js';
import User from '../classes/user.js';

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