const jwt = require('jsonwebtoken');

const createToken = async (data) => {
    let payload = {
        exp: Math.floor(Date.now() / 100 + (24*60*60)),
        data: data,
    }
    return await jwt.sign(payload, 'SecretKey123456789');
}

module.exports = createToken;