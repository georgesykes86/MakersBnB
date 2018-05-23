'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    User.hasMany(models.Listing, {
      foreignKey: "user_id",
      onDelete: 'CASCADE'
    });
  };
  return User;
};
