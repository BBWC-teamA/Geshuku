'use strict';

const db = require('../models/');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'studentclubs',
      [
        {
          studentid: 1,
          clubid: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 2,
          clubid: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 3,
          clubid: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 4,
          clubid: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 5,
          clubid: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 6,
          clubid: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 7,
          clubid: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 8,
          clubid: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 9,
          clubid: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 10,
          clubid: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 8,
          clubid: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 9,
          clubid: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 2,
          clubid: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          studentid: 4,
          clubid: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 9,
          clubid: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentid: 10,
          clubid: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
