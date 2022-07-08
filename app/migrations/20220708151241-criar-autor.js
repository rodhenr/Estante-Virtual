"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("autores", {
      autor_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      autor_nome: { type: Sequelize.STRING },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("autores");
  },
};
