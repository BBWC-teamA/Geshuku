'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentClub extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  StudentClub.init({
    studentid: DataTypes.INTEGER,
    clubid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentClub',
  });
  return StudentClub;
};