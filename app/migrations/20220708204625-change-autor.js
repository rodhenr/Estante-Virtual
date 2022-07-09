"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (t) => {
      try {
        await queryInterface.removeConstraint(
          "livros",
          "livros_autor_foreign_idx",
          {
            transaction: t,
          }
        );
        await queryInterface.removeColumn("autores", "autor_id", {
          transaction: t,
        });
        await queryInterface.addColumn(
          "autores",
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
        await queryInterface.renameColumn("autores", "autor_nome", "nome", {
          transaction: t,
        });
        await queryInterface.addConstraint("livros", {
          type: "FOREIGN KEY",
          fields: ["autor"],
          name: "autor_fk",
          references: {
            table: "autores",
            field: "id",
          },
          transaction: t,
        });

        return Promise.resolve();
      } catch (err) {
        return Promise.reject(err);
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (t) => {
      try {
        await queryInterface.removeConstraint("livros", "autor_fk", {
          transaction: t,
        });
        await queryInterface.removeColumn("autores", "id", {
          transaction: t,
        });
        await queryInterface.addColumn(
          "autores",
          "autor_id",
          {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          {
            transaction: t,
          }
        );
        await queryInterface.renameColumn("autores", "nome", "autor_nome", {
          transaction: t,
        });
        await queryInterface.addConstraint("livros", {
          type: "FOREIGN KEY",
          fields: ["autor"],
          name: "livros_autor_foreign_idx",
          references: {
            table: "autores",
            field: "autor_id",
          },
          transaction: t,
        });

        return Promise.resolve();
      } catch (err) {
        return Promise.reject(err);
      }
    });
  },
};
