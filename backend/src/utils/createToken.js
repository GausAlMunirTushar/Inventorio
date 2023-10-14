const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

/**
 * Create a JSON Web Token (JWT) with the provided data.
 * @param {Object} data - The data to be included in the token payload.
 * @returns {string} - The JWT token.
 */

function createToken(data) {
    try {
        const expiresIn = 24 * 60 * 60; // 24 hours in seconds
        const payload = {
            exp: Math.floor(Date.now() / 1000) + expiresIn,
            data: data,
        };
        return jwt.sign(payload, jwtSecret);
    } catch (error) {
        console.error('Error creating JWT:', error);
        throw error;
    }
}

module.exports = createToken;
