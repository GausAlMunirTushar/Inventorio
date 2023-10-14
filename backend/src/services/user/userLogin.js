const createToken = require('../../utils/createToken');

const userLogin = async (request, dataModel) => {
    try {
        let data = await dataModel.aggregate([
            {$match: request.body}, {$project: {_id: 0, email:1, firstName: 1, lastName: 1, mobileNumber: 1, photo: 1}}
        ])
        if(data.length > 0) {
            let token = await createToken(data[0]['email'])
            return {
                status: "success",
                token: token,
                data: data[0]
            }
        }
        else {
            return {status: "unauthorized"}
        }
    }
    catch(error){
        return {
            status: "fail",
            data: error.toString()
        }
    }
}
module.exports = userLogin;