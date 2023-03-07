const OTPModel = require('../../models/otpModel');
const sendMail = require('../../utility/sendMail');

const userVerifyEmail = async (request, dataModel) => {
    try {
        // Email Account Query
        let email = request.params.email;
        let OTPCode = Math.floor(10000 + Math.random() * 90000)
        let userCount = (await  dataModel.aggregate([{$match: {email: email}}, {$count: "total"}]))
        if(userCount.length > 0){
            //OTP Insert
            await OTPModel.create({
                email: email,
                otp: OTPCode
            })
            // Send Mail
            let sendMail = await sendMail(email, "Your PIN Code is " + OTPCode, "Inventro App Verification")
            return {
                status: "success",
                data: sendMail
            }
        }
        else{
            return {
                status: "fail",
                data: "User Not Found"
            }
        }

    }
    catch(error){
        return {
            status: "fail",
            data: error.toString()
        }
    }
}

module.exports = userVerifyEmail;