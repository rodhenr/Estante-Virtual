"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("livros", "ano_lancamento", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("livros", "ano_lancamento", {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },
};
