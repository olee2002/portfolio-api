const Sequelize = require('sequelize');
const Model = require('../models');
const bcrypt = require('bcrypt-nodejs');
const User = Model.user;


const create = async (req, res, next) => {
    res.set("Content-Type", "application/json")
    try {
        const user = {
            email: req.body.email,
            password: req.body.password
        };
        console.error('pw', req.body, req.body.password)
        const userData = await User.findOne({
            where: {
                email: user.email
            }
        });
        if (!userData) {
            const err = 'Email Not Found!';
            res.status(404).json(err);
        }
        const data = userData.dataValues;
        if (data && bcrypt.compareSync(user.password, data.password)) {
            delete data.password;
            res.status(200).json(data);
        } else {
            res.status(404).json('Incorrect Password!');
        }
    }
    catch (err) {
        next(err);
    }

};


module.exports.create = create;