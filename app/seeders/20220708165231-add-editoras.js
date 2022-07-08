"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "editoras",
      [
        { editora_nome: "Editora Arqueiro" },
        { editora_nome: "Editora Escala" },
        { editora_nome: "Editora Rocco" },
        { editora_nome: "Editora Antofágica" },
        { editora_nome: "Editora Principis" },
        { editora_nome: "Companhia das Letras" },
        { editora_nome: "Editora É Realizações" },
        { editora_nome: "Editora Alfaguara" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("editoras", null, {});
  },
};
