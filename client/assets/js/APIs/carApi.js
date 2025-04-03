'use strict';

const carApi = {
    saveCarView(visit) {
        return fetch('/saveCarView', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(visit)
        }).then(
            result => result.json()
        ).then(
            result => result.payload
        );
    },

    createCar(carData) {
        return fetch('/saveCar', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer your-token' // Add if using auth
            }, 
            body: JSON.stringify(carData)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => Promise.reject(err));
            }
            return response.json();
        })
        .then(data => data.payload);
    },

    getCar(carId) {
        return fetch(`/api/cars/${carId}`)
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => Promise.reject(err));
            }
            return response.json();
        })
        .then(data => data.payload);
    },

    getCarsByUser(userId) {
        return fetch(`/api/users/${userId}/cars`)
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => Promise.reject(err));
            }
            return response.json();
        })
        .then(data => data.payload);
    },

    updateCar(carId, carData) {
        return fetch(`/api/cars/${carId}`, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer your-token' // Add if using auth
            },
            body: JSON.stringify(carData)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => Promise.reject(err));
            }
            return response.json();
        })
        .then(data => data.payload);
    },

    deleteCar(carId) {
        return fetch(`/api/cars/${carId}`, {
            method: 'DELETE',
            headers: { 
                // 'Authorization': 'Bearer your-token' // Add if using auth
            }
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => Promise.reject(err));
            }
            return response.json();
        })
        .then(data => data.payload);
    },

    searchCars(searchParams) {
        return fetch('/api/cars/search', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer your-token' // Add if using auth
            },
            body: JSON.stringify(searchParams)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => Promise.reject(err));
            }
            return response.json();
        })
        .then(data => data.payload);
    }
};

export default carApi;