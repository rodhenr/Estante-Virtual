"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("livros", {
      livro_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: { type: Sequelize.STRING, allowNull: false },
      ano_lancamento: { type: Sequelize.DATE, allowNull: false },
      num_paginas: { type: Sequelize.INTEGER, allowNull: false },
      descricao: { type: Sequelize.JSON, allowNull: false },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("livros");
  },
};
