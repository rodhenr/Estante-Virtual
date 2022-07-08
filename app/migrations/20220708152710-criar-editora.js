"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("editoras", {
      editora_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      editora_nome: { type: Sequelize.STRING, allowNull: false },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("editoras");
  },
};
