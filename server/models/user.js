'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.TEXT,
    phone_nr: DataTypes.INTEGER(15)
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
