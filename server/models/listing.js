module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Listing.associate = (models) => {
  // associations can be defined here
  };

  return Listing;
};
