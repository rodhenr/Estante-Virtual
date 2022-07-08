"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "autores",
      [
        { autor_nome: "William P. Young" },
        { autor_nome: "Antoine de Saint-Exupéry" },
        { autor_nome: "Clarice Lispector" },
        { autor_nome: "Mário de Andrade" },
        { autor_nome: "Machado de Assis" },
        { autor_nome: "João Guimarães Rosa" },
        { autor_nome: "Cristóvão Tezza" },
        { autor_nome: "Daniel Galera" },
        { autor_nome: "Martha Batalha" },
        { autor_nome: "Maria Valéria Rezende" },
        { autor_nome: "Sérgio Rodrigues" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("autores", null, {});
  },
};
