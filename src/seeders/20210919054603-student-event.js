'use strict';

const db = require('../models/');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'studentevent',
      [
        {
          studentid: 1,
          eventid: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 2,
          eventid: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 3,
          eventid: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 4,
          eventid: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 5,
          eventid: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 6,
          eventid: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 7,
          eventid: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 8,
          eventid: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 9,
          eventid: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 10,
          eventid: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
