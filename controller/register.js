const Sequelize = require('sequelize');
const Model = require('../models')

const errmsg = 'Email exists in the database.'

const register = async (req, res, next) => {
    try {
        // const encryted = Model.user.authenticate(req.body);

        if (req.body) {
            const user = {
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            }
            const emailValid = await Model.user.findOne({
                where: {
                    email: user.email
                }
            });
            if (emailValid) {
                res.status(500).json(errmsg)
                throw new Error(errmsg)
            } else {
                await Model.user.create(user);
                delete user.password;
                res.status(200).json(user);
            }
        }
    }
    catch (err) {
        console.log(err)
    }

}

module.exports.register = register;