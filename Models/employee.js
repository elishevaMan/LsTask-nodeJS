const mongoose = require("mongoose");
const schema = mongoose.Schema;

let employeeSchema = new schema({
    id: String,
    firstName: String,
    lastName: String,
    phone: String,
    address: String,
    startDate: String,
    role: String,
    image: String,
})

module.exports = mongoose.model('employees', employeeSchema);


