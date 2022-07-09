"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "editoras",
      [
        { nome: "Editora Arqueiro" },
        { nome: "Editora Escala" },
        { nome: "Editora Rocco" },
        { nome: "Editora Antofágica" },
        { nome: "Editora Principis" },
        { nome: "Companhia das Letras" },
        { nome: "Editora É Realizações" },
        { nome: "Editora Alfaguara" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("editoras", null, {});
  },
};
