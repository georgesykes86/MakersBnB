'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.SERIAL,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING,
      notNull: true
    },

    email: {
      type: DataTypes.TEXT,
      primaryKey: true
    },

    phone_nr: {
      type: DataTypes.NUMERIC,
      primaryKey: true
    }

  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
