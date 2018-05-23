'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{

        name: 'John Doe',
        email: 'john.doe@email.com',
        phone_nr: '07123457890'

      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});

  }
};
