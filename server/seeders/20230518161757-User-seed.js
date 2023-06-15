"use strict";

const { hashPassword } = require("../helpers/encryption");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const usersData = require("../datas/users.json").map((user) => {
      user.createdAt = user.updatedAt = new Date();
      user.password = hashPassword(user.password);

      return user;
    });
    await queryInterface.bulkInsert("Users", usersData, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
