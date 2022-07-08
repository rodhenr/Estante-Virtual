"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("livros", "autor", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "autores",
        key: "autor_id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("livros", "autor");
  },
};
