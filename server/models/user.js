"use strict";

const { hashPassword } = require("../helpers/encryption");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item, { foreignKey: "authorId" });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Username has been used, please choose another username",
        },
        validate: {
          notEmpty: {
            msg: "username should be filled",
          },
          notNull: {
            msg: "username should be filled",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Your email has been used, please choose another email",
        },
        validate: {
          notEmpty: {
            msg: "email should be filled",
          },
          notNull: {
            msg: "email  should be filled",
          },
          isEmail: {
            msg: "Email input is wrong, please check again",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "password should be filled",
          },
          notNull: {
            msg: "password should be filled",
          },
          len: {
            args: [5],
            msg: "Password length should be more than 5 characters",
          },
        },
      },
      role: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((instance) => {
    let hashedPassword = hashPassword(instance.password);

    instance.role = "admin";
    instance.password = hashedPassword;
  });
  return User;
};
