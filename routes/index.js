// routes/index.js

const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = require('./'); // Import routes dari folder routes
const { sequelize } = require('../models'); // Import Sequelize instance dan model

// Middleware untuk parsing JSON
app.use(express.json());
app.use('/', router); // Gunakan router untuk menangani rute

// Sinkronkan database ketika aplikasi dimulai
sequelize.sync()
  .then(() => console.log('Database synchronized with Sequelize'))
  .catch(err => console.error('Error synchronizing database with Sequelize:', err));

// Export handler untuk serverless function
module.exports.handler = serverless(app);
