const express = require('express');
const userRoutes = express.Router();
const {
    registration, 
    login, 
    profileUpdate} = require('../controllers/user/userController')

userRoutes.post('/registration', registration)

userRoutes.get('/', (req, res) => {
    res.status(200).json({status: "success"
    })
})

module.exports = userRoutes;