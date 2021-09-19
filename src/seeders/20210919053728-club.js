'use strict';

const db = require('../models/');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'clubs',
      [
        {
          name:"Apple",
          description:"テニスサークルです．部員は５０人程度で活動しています！",
          address:"○○キャンパステニスコート",
          contact:"tennis_apple.net",
          image:"https://2.bp.blogspot.com/-3wRknISBgyQ/Vu0kVSiRwBI/AAAAAAAA5AM/zIbVV1O_HqYx9sWzpzU_T0v9qe408mu-w/s800/sports_soft_tennis_ball.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"TEMPEST",
          description:"合唱団です．経験者，未経験者を問わずとにかく部員大代々募集中です！見学お待ちしております．",
          address:"全学共通教育棟",
          contact:"tempest.net",
          image:"https://1.bp.blogspot.com/-TXkVspoCzmQ/XQjuHUR9HmI/AAAAAAABTPY/lFuiHpqXpkkdWDsvrTwLGkZn6jq8nXLywCLcBGAs/s800/gassyou_formal.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"ジャックナイフ",
          description:"バスケットボールサークルです．サークル員は全員男子のみで楽しく活動しています！",
          address:"○○体育館",
          contact:"basket.net",
          image:"https://pakutaso.cdn.rabify.me/shared/img/thumb/PPW_basuketogo-ru.jpg.webp?d=1420",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"男子野球部",
          description:"硬式野球部です．一緒に汗水流して頑張りましょう！部員募集中！",
          address:"○○キャンパス第２グラウンド",
          contact:"baseball_club.net",
          image:"https://pakutaso.cdn.rabify.me/shared/img/thumb/kazukihiroP1030810.jpg.webp?d=1420",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"アカペラ",
          description:"アカペラサークルです．歌が好きな方は大歓迎！",
          address:"○○キャンパス○○ルーム",
          contact:"akapera.net",
          image:"https://1.bp.blogspot.com/-XCV3MH6aAM0/VuKDxceVwNI/AAAAAAAA4vo/w2uB6j3WjR0gv2keogLiBMjTex8ZWQfNg/s800/gassyou_casual_men.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"Kicker",
          description:"私たちは，学内最大のサッカーサークルです．",
          address:"○○キャンパス第１グラウンド",
          contact:"soccer_circle.net",
          image:"https://3.bp.blogspot.com/-y2JiYJsQpbM/W0xYy5sdB6I/AAAAAAABNbw/hnP3Bpl8CNkQdsJhkzNa57ee2xLT3GyDwCLcBGAs/s800/soccer_goalee_man.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"軽音music",
          description:"軽音サークルです．初心者でも大歓迎！",
          address:"第２学舎３０２教室",
          contact:"music_band.net",
          image:"https://4.bp.blogspot.com/-Ridf08rYvVw/WCQeIU1z7bI/AAAAAAAA_cw/_Bls7ql1lTE4kkviffn083kPvFNqVS6KgCLcB/s800/band_school_boy.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"レゴ部",
          description:"レゴに興味のある方必見！",
          address:"第４学舎１０３教室",
          contact:"lego.net",
          image:"https://1.bp.blogspot.com/-d_FUfYntK0c/Uf8zrEFRBLI/AAAAAAAAWvM/XGWzLFJlnrw/s800/lego_block.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"Eiger",
          description:"スノボサークルです．",
          address:"特になし",
          contact:"snow_board.net",
          image:"https://www.pakutaso.com/shared/img/thumb/kumakichi923_4_TP_V.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"cheer",
          description:"チアリーディングサークルです！皆さんが来るのを心待ちにしています！",
          address:"○○体育館",
          contact:"cheer.net",
          image:"https://1.bp.blogspot.com/-Mf6LWeUF7aI/XhwqMopF90I/AAAAAAABW8o/2zMCDwk_3kQmxSchqwJq-VgGJlQ1nSJ-ACNcBGAsYHQ/s1600/cheerleader_stunts.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"軽音JAZZ",
          description:"ジャズ系をメインに扱った軽音サークルです！初心者も大歓迎です！！",
          address:"○○キャンパス大講義室",
          contact:"jazz_music.net",
          image:"https://pakutaso.cdn.rabify.me/shared/img/thumb/MATSUMOTO2096020.jpg.webp?d=1420",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"ハイキュウ",
          description:"バレーボールサークルです！毎年2回の合宿をしていてみんな仲良しなサークルです．",
          address:"○○体育館",
          contact:"haikyu.net",
          image:"https://2.bp.blogspot.com/-lWJSmufAy5k/VahRzO0QDaI/AAAAAAAAvxU/zn4lU6637_4/s800/sports_soft_volleyball.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"ボードゲーム部",
          description:"色々なボードゲームを取り揃えています！\n気軽に遊びに来てください",
          address:"第１学舎１０２教室",
          contact:"boardgame.net",
          image:"https://3.bp.blogspot.com/-RTitFpO94mY/V1z8v_6cezI/AAAAAAAA7L0/8BGqS0IwCQMozc3qnCH5nsRQeDEWk1OyACLcB/s800/board_game.png",
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
