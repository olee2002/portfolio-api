const Sequelize = require('sequelize');
const Model = require('../models');
const User = Model.user;
const errmsg = { error: 'Email exists in the database.' }

const create = async (req, res, next) => {
    try {
        // const encryted = User.authenticate(req.body);

        if (req.body) {
            const user = {
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            }
            const emailValid = await User.findOne({
                where: {
                    email: user.email
                }
            });
            if (emailValid) {
                res.json(errmsg)
                // throw new Error(errmsg)
            } else {
                await User.create(user);
                delete user.password;
                res.status(200).json(user);
            }
        }
    }
    catch (err) {
        console.log(err)
    }

}

module.exports.create = create;