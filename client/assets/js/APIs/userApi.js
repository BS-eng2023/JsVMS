'use strict';




const userApi = {
    savePageVisit(visit) {
        return fetch('/savePageVisit', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(visit)
        }).then(
            result => result.json()
        ).then(
            result => result.payload
        )
    },
    createUser(userData) {
        return fetch('/saveUser', {
            method: 'POST',
            headers: { 
                'content-Type': 'application/json',
                // 'Authorization': 'Bearer your-token' // Add if using auth
            }, 
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => Promise.reject(err));
            }
            return response.json();
        })
        .then(data => data.payload);
    },

    getUser(userId) {
        return fetch(`/api/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => Promise.reject(err));
            }
            return response.json();
        })
        .then(data => data.payload);
    },

    updateUser(userId, userData) {
        return fetch(`/api/users/${userId}`, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer your-token' // Add if using auth
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => Promise.reject(err));
            }
            return response.json();
        })
        .then(data => data.payload);
    },

    deleteUser(userId) {
        return fetch(`/api/users/${userId}`, {
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
    }
};

export default userApi;