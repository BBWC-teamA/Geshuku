'use strict';

const db = require('../models/');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'events',
      [
        {
          name:"BBQ",
          description:"〇〇公園でBBQを行います．興味のある方は参加して見てください！",
          date:'0513',
          clubid:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"レゴ作品展示会",
          description:"18時からレゴの展示会を開催します！",
          date:'0515',
          clubid:9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"新入生歓迎会",
          description:"15時からボーリング大会をします！ぜひ参加してください！",
          date:'0512',
          clubid:1 ,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"軽音サークル体験",
          description:"月曜日に活動しています！楽器の体験もできます！",
          date:'0514',
          clubid: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"体験入部！！",
          description:"体験入部しています！ぜひご参加ください！",
          date:'0506',
          clubid:5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"サークル体験",
          description:"17時から○○体育館にて練習しています！",
          date:'0507',
          clubid: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"新入生必見",
          description:"楽器の演奏が気軽に体験できます．体験後一緒にごはんに行きましょう！",
          date:'0520',
          clubid: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"サークル体験！",
          description:"楽器の演奏が気軽に体験できます．体験後一緒にごはんに行きましょう！",
          date:'0515',
          clubid: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"新歓ボードゲーム",
          description:"ボードゲームして遊びましょう！",
          date:'0510',
          clubid: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"BBQ！！",
          description:"一緒にBBQしましょう！興味のある方は参加して見てください！参加費：500円",
          date:'0512',
          clubid:13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"チア体験会",
          description:"チアを気軽に体験できます！",
          date:'0517',
          clubid:11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"アカペラ体験！",
          description:"アカペラの体験ができます！初心者・経験者両方とも大歓迎です",
          date:'0522',
          clubid:6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"演奏会",
          description:"合唱団の演奏会になります．興味のある方はぜひ！",
          date:'0503',
          clubid:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"テニス大会",
          description:"新入生限定のテニス大会をします！優勝者には景品も．．",
          date:'0517',
          clubid:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"レゴ作品展示会！",
          description:"レゴ展示会第2回！遊びに来てください～！",
          date:'0522',
          clubid:9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"新入生大歓迎！",
          description:"BBQを開催します！遊びに来てください",
          date:'0522',
          clubid:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"軽音演奏会",
          description:"演奏会します！興味のある方は遊びに来て下さい！！",
          date:'0523',
          clubid:8,
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
