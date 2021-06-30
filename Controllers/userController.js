const User = require('../Models/users');
// const loginFunctions = require('../loginFunctions');

class UserController {

    constructor() {
    }

    checkExistUser = (email) => {
        return new Promise((res, rej) => {
            User.forEach(user => {
                if (user.email == email) {
                    tmpDate = tmpDate.getISODate();
                    res(user);
                }
            })
            rej('user undefined');
        })
    }

    getByEmail = async (req, res) => {
        try {
            let empEmail = req.params.email;
            let password = req.params.password;
            let empl = await User.findOne({ email: empEmail, password: password });
            res.send(empl)
        }
        catch (err) {
            res.send(err);
        }
    }

    insert = async (req, res) => {
        try {
            let tmp = JSON.parse(req.body.body);
            let user = new User(tmp)
            user.id = user.firstName + user.lastName;
            let newUser = await user.save();
            res.send(newUser);
        }
        catch (err) {
            res.status(500).json((err) => { err: err })
        }
    }
}
module.exports = new UserController();