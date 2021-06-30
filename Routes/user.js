const express = require('express');
const rout = express.Router();
const controller = require('../Controllers/userController');

rout.get('/:email/:password', controller.getByEmail);
rout.post('/', controller.insert);

module.exports = rout;