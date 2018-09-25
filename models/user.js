'use strict';

const bcrypt = require('bcrypt');

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
  User.authenticate = authenticate;
  User.beforeCreate(encryptPassword);

  return User;
};



function authenticate(password) {
  if (bcrypt.compareSync(password, this.encrypted_password)) {
    console.log(this)
    return this;
  };
  return false;
}

function encryptPassword(user, options, callback) {
  if (user.password) {
    user.encrypted_password = bcrypt.hashSync(user.password, 10);
    user.password = user.encrypted_password;
  }
  console.log('encryted', user.encrypted_password)
}