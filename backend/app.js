const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Security Middlewares import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Security Middlwares Implementation
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// Body parser Implementation
app.use(bodyParser.json())

// Request Rate Limit
const limiter = rateLimit({
    windowMS: 15*60*1000,
    max: 3000
});

app.use(limiter)

// Routes Import 
const userRoutes = require('./src/routes/userRoutes')
// Base Routing Implement
app.use('/api/v1/user', userRoutes);

// Undefined Route Implement
app.use('*', (req, res) => {
    res.status(404).json({
        status: "fail",
        data: "Not Found"
    })
})

module.exports = app;