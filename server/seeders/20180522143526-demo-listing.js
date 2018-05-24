'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Listings', [{
        title: 'Simply stunning period apartment',
        description: 'this property is incredile',
        price: 4000,
        dates: new Date,
        user_id: 1,
        createdAt: new Date,
        updatedAt: new Date
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Listings', null, {});

  }
};
