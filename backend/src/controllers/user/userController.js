const userModel = require('../../models/user/userModel')
const OTPSModel = require('../../models/user/otpModel')

// User Service 
const userCreate = require('../../services/user/userCreate');
const userDetails = require('../../services/user/userDetails');
const userLogin = require('../../services/user/userLogin');
const userReset = require('../../services/user/userReset');
const userUpdate = require('../../services/user/userUpdate');
const userVerifyEmail = require('../../services/user/userVerifyEmail');
const userVerifyOtp = require('../../services/user/userVerifyOtp')


//
const registration = async (req, res) => {
    let result = await userCreate(req, userModel)
    res.status(200).json(result)
}
 
const login = async (req, res) => {
    let result = await userLogin(req, userModel)
    res.status(200).json(result)
}
const profileUpdate = async (req, res) => {
    let result = await userUpdate(req, userModel)
    res.status(200).json(result)
}
const profileDetails = async (req, res) => {
    let result = await userDetails(req, userModel)
    res.status(200).json(result)
}
const recoverVerifyEmail = async (req, res) => {
    let result = await userVerifyEmail(req, userModel)
    res.status(200).json(result)
}
const recoverVerifyOtp = async (req, res) => {
    let result = await userVerifyOtp (req, userModel)
    res.status(200).json(result)
}

module.exports = {
    registration,
    login,
    profileUpdate,
    profileDetails,
    recoverVerifyEmail,
    recoverVerifyOtp
}