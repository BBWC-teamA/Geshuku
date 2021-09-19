'use strict';

const db = require('../models/');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'students',
      [
        {
          name:"原泰三",
          department:"工学部",
          contact:"yuthar.2452@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"山田健一郎",
          department:"工学部",
          contact:"kenichito.42@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"田中智樹",
          department:"理学部",
          contact:"keadfto.235@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"笛口桃花",
          department:"経済学部",
          contact:"zsdflxkvba.294@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"斎藤元気",
          department:"法学部",
          contact:"zdfdtgwa.235@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"中村裕子",
          department:"外国学部",
          contact:"zsdfsdfgvba.236@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"溝口麗奈",
          department:"法学部",
          contact:"zsdflxkvba.294@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"花田和子",
          department:"工学部",
          contact:"sdfgwaergrea.1434@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"花田和子",
          department:"工学部",
          contact:"sdfgwaergrea.1434@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"花山薫",
          department:"文学部",
          contact:"kaorusangrea.2575@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"あばれる君",
          department:"経済学部",
          contact:"abarerudesu.834@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"野田学",
          department:"経済学部",
          contact:"nodaei.244@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"三好夏美",
          department:"工学部",
          contact:"asdglkhreaei.745@gmail.com",
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
