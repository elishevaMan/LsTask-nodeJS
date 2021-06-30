const express = require("express");
const app = express();
const employeeRouter = require('./Routes/employee');
const userRouter = require('./Routes/user');
const db = require("./db");

app.use(express.json());
db.connect();

app.use('/employees', employeeRouter);
app.use('/users', userRouter);

app.listen(3020, () => {
    console.log("server up");
})