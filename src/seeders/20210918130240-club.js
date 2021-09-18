'use strict';

const db = require('../models/');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'clubs',
      [
        {
          name:"インタラクティブメディアラボ",
          description:"Interactive Media Laboratory(以下、IMLは、電気通信大学および連携大学の学部生が、大学入学直後から「大学の研究室に準じた研究開発活動」、および「大学発ベンチャーに準じた研究実用化活動」を、「楽しい学生サークル」として実践できるようにするために設立された、電通大がバックアップする全く新しいコンセプトの学生サークルです。\n IMLは電気通信大学産学官連携センターベンチャー支援部門主催の学生サークル「ベンチャー工房」に帰属しています。IMLは2014年のVBセミナーテック編・ものづくり編を前身とし、これが2015年4月に大学運営の学生サークル化されることで設立されました。2019年現在、電通大の支援のもと、活発な現役電通大生と現役若手教員(電通大OB)により活発な活動が続けられています)。",
          address:"電気通信大学 東8号館405･409号室",
          contact:"iml@imedia-lab.net",
          image:"https://pbs.twimg.com/profile_images/907165260393496576/9qTO96R0.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"インタラクティブメディアラボ",
          description:"Interactive Media Laboratory(以下、IMLは、電気通信大学および連携大学の学部生が、大学入学直後から「大学の研究室に準じた研究開発活動」、および「大学発ベンチャーに準じた研究実用化活動」を、「楽しい学生サークル」として実践できるようにするために設立された、電通大がバックアップする全く新しいコンセプトの学生サークルです。\n IMLは電気通信大学産学官連携センターベンチャー支援部門主催の学生サークル「ベンチャー工房」に帰属しています。IMLは2014年のVBセミナーテック編・ものづくり編を前身とし、これが2015年4月に大学運営の学生サークル化されることで設立されました。2019年現在、電通大の支援のもと、活発な現役電通大生と現役若手教員(電通大OB)により活発な活動が続けられています)。",
          address:"電気通信大学 東8号館405･409号室",
          contact:"iml@imedia-lab.net",
          image:"https://pbs.twimg.com/profile_images/907165260393496576/9qTO96R0.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"インタラクティブメディアラボ",
          description:"Interactive Media Laboratory(以下、IMLは、電気通信大学および連携大学の学部生が、大学入学直後から「大学の研究室に準じた研究開発活動」、および「大学発ベンチャーに準じた研究実用化活動」を、「楽しい学生サークル」として実践できるようにするために設立された、電通大がバックアップする全く新しいコンセプトの学生サークルです。\n IMLは電気通信大学産学官連携センターベンチャー支援部門主催の学生サークル「ベンチャー工房」に帰属しています。IMLは2014年のVBセミナーテック編・ものづくり編を前身とし、これが2015年4月に大学運営の学生サークル化されることで設立されました。2019年現在、電通大の支援のもと、活発な現役電通大生と現役若手教員(電通大OB)により活発な活動が続けられています)。",
          address:"電気通信大学 東8号館405･409号室",
          contact:"iml@imedia-lab.net",
          image:"https://pbs.twimg.com/profile_images/907165260393496576/9qTO96R0.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};