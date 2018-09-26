'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    comment: DataTypes.STRING,
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  
  User.beforeCreate(encryptPassword);

  return User;
};


function encryptPassword(user, options, callback) {
  if (user.password) {
    const salt = bcrypt.genSaltSync(10);
    user.encrypted_password = bcrypt.hashSync(user.password, salt);
    user.password = user.encrypted_password;
  }
  console.log('password has been encryted.')
}