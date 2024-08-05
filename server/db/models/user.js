'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post, Like, Comment, Message }) {
      // define association here
      this.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
      this.hasMany(Like, { foreignKey: 'userId'});
      this.hasMany(Comment, { foreignKey: 'userId'});
      this.hasMany(Message, { foreignKey: 'userId'});
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      hashpass: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
