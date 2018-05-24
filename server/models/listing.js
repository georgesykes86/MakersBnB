'use strict';
module.exports = (sequelize, DataTypes) => {
  var Listing = sequelize.define('Listing', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    title: {
      type: DataTypes.STRING,
      notNull: true
    },

    description: {
      type: DataTypes.TEXT,
      notNull: true
    },

    price: {
      type: DataTypes.INTEGER,
      notNull: true
    },

    dates: {
      type: DataTypes.DATEONLY,
      notNull: true
    },

    user_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
    references: {
      model: 'user',
      key: 'id',
      as: 'user',
    }
  },
});
  Listing.associate = (models) => {
    Listing.belongsTo(models.User, {
      foreignKey: "user_id",
      onDelete: 'CASCADE'
    });
  };
  return Listing;
};
