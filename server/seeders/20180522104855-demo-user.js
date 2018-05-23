'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{

        name: 'John Doe',
        email: 'john.doe@email.com',
        phone_nr: '07123457890',
        createdAt: new Date,
        updatedAt: new Date

      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});

  }
};
