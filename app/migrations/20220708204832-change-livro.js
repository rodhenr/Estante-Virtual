"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (t) => {
      try {
        await queryInterface.removeColumn("livros", "livro_id", {
          transaction: t,
        });
        await queryInterface.addColumn(
          "livros",
          "id",
          {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          {
            transaction: t,
          }
        );

        return Promise.resolve();
      } catch (err) {
        return Promise.reject(err);
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (t) => {
      try {
        await queryInterface.removeColumn("livros", "id", {
          transaction: t,
        });
        await queryInterface.addColumn(
          "livros",
          "livro_id",
          {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          {
            transaction: t,
          }
        );

        return Promise.resolve();
      } catch (err) {
        return Promise.reject(err);
      }
    });
  },
};
