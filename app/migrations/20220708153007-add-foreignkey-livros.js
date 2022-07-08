"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("livros", "editora", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "editoras",
        key: "editora_id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("livros", "editora");
  },
};
