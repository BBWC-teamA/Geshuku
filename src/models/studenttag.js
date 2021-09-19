'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  StudentTag.init({
    studentid: DataTypes.INTEGER,
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentTag',
  });
  return StudentTag;
};