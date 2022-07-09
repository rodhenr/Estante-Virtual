"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (t) => {
      try {
        await queryInterface.removeConstraint(
          "livros",
          "livros_editora_foreign_idx",
          {
            transaction: t,
          }
        );
        await queryInterface.removeColumn("editoras", "editora_id", {
          transaction: t,
        });
        await queryInterface.addColumn(
          "editoras",
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
        await queryInterface.renameColumn("editoras", "editora_nome", "nome", {
          transaction: t,
        });
        await queryInterface.addConstraint("livros", {
          type: "FOREIGN KEY",
          fields: ["editora"],
          name: "editora_fk",
          references: {
            table: "editoras",
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
        await queryInterface.removeConstraint("livros", "editora_fk", {
          transaction: t,
        });
        await queryInterface.removeColumn("editoras", "id", {
          transaction: t,
        });
        await queryInterface.addColumn(
          "editoras",
          "editora_id",
          {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          {
            transaction: t,
          }
        );
        await queryInterface.renameColumn("editoras", "nome", "editora_nome", {
          transaction: t,
        });
        await queryInterface.addConstraint("livros", {
          type: "FOREIGN KEY",
          fields: ["editora"],
          name: "livros_editora_foreign_idx",
          references: {
            table: "editoras",
            field: "editora_id",
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
