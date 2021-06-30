const express = require('express');
const rout = express.Router();
const controller = require('../Controllers/employeeController');

rout.get('/', controller.getAll);
rout.post('/', controller.insert);
rout.put('/', controller.putEmployee);
rout.delete('/:id', controller.deleteEmployee);

module.exports = rout;