const mongoose = require("mongoose");
const schema = mongoose.Schema;

let userSchema = new schema({
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

module.exports = mongoose.model('users', userSchema);


