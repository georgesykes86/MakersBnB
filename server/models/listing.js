'use strict';
module.exports = (sequelize, DataTypes) => {
  var Listing = sequelize.define('Listing', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
  };
  return Listing;
};
