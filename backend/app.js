const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
const connectDB = require('./src/config/database');

// Create an Express app
const app = express();

// Connect to the database
connectDB();

// Middleware stack for security
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(cors());

// Body parser for JSON
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({limit: '50mb'}));

// Request Rate Limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3000,
});
app.use(limiter);

// Routes
const userRoutes = require('./src/routes/userRoutes');
app.use('/api/v1', userRoutes);

// Not Found Handler
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    data: 'Not Found',
  });
});

module.exports = app;

