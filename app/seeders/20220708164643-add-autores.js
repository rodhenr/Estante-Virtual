"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "autores",
      [
        { nome: "William P. Young" },
        { nome: "Antoine de Saint-Exupéry" },
        { nome: "Clarice Lispector" },
        { nome: "Mário de Andrade" },
        { nome: "Machado de Assis" },
        { nome: "João Guimarães Rosa" },
        { nome: "Cristóvão Tezza" },
        { nome: "Daniel Galera" },
        { nome: "Martha Batalha" },
        { nome: "Maria Valéria Rezende" },
        { nome: "Sérgio Rodrigues" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("autores", null, {});
  },
};
