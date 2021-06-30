const { deleteOne } = require('../Models/employee');
const employee = require('../Models/employee');
const Employee = require('../Models/employee');

class EmployeeController {

    constructor() {
    }

    getAll = async (req, res) => {
        try {
            let employeesRes = await Employee.find();
            res.send(employeesRes);
        }
        catch (err) {
            res.status(500).json((err) => { err: err })
        }
    }

    insert = async (req, res) => {
        try {
            let tmp = JSON.parse(req.body.body);
            let employee = new Employee(tmp)
            employee.id = employee.firstName + employee.lastName +employee.phone;
            let newEmployee = await employee.save();
            res.send(newEmployee);
        }
        catch (err) {
            res.status(500).json((err) => { err: err })
        }
    }

    putEmployee = async (req, res) => {
        try {
            let empl = JSON.parse(req.body.body);
            empl.id = empl.firstName + empl.lastName +empl.phone;
            debugger
            let changedEmpl = await Employee.findOneAndUpdate(empl.id, empl, { useFindAndModify: false });
            res.send(changedEmpl);
        }
        catch (err) {
            res.send(err);
        }
    }

    deleteEmployee = async (req, res) => {
        try {
            let enpId = req.params.id;
            let deletedEmpl = await Employee.deleteOne({ id: enpId });
            res.send(deletedEmpl);
        }
        catch (err) {
            res.send(err);
        }
    }
}
module.exports = new EmployeeController();