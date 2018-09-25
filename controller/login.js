const Sequelize = require('sequelize');
const Model = require('../models');
const bcrypt = require('bcrypt-nodejs');
const User = Model.user;


const create = async (req, res, next) => {

    try {
        const user = {
            email: req.body.email,
            password: req.body.password
        };
        const userData = await User.findOne({
            where: {
                email: user.email
            }
        });

        const data = userData.dataValues;
        if (!bcrypt.compareSync(user.password, data.password)) throw new Error('Incorrect Password');
        if (data && bcrypt.compareSync(user.password, data.password)) {
            delete data.password;
            res.status(200).json(data);
        }
    }
    catch (err) {
        next(err);
    }

};


module.exports.create = create;