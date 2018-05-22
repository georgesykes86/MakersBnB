'use strict';
module.exports = (sequelize, DataTypes) => {
  var Listing = sequelize.define('Listing', {
    id: {
      type: DataTypes.SERIAL,
      primaryKey: true,
      autoIncrement: true
    },

    title: {
      type: DataTypes.STRING,
      notNull: true
    }

    description: {
      type: DataTypes.TEXT,
      notNull: true
    },

    price: {
      type: DataTypes.INTEGER,
      notNull: true
    },

    user_id: {
      type: DataTypes.INTEGER,

  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
  };
  return Listing;
};
