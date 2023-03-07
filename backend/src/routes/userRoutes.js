const express = require('express');
const Auth = require('../middlewares/auth')
const userRoutes = express.Router();
const {
    registration, 
    login, 
    profileUpdate,
    profileDetails,
    recoverVerifyEmail,
    recoverVerifyOtp,
    recoverReset} = require('../controllers/user/userController')

// User Routes
userRoutes.post('/registration', registration);
userRoutes.post('/login', login);
userRoutes.post('/profileUpdate', Auth, profileUpdate);
userRoutes.get('/profileDetails', Auth, profileDetails);
userRoutes.get('/recoverVerifyEmail/:email', recoverVerifyEmail)
userRoutes.get('/recoverVerifyOtp/:email/:otp', recoverVerifyOtp)
userRoutes.post('/recoverReset', recoverReset)

module.exports = userRoutes;