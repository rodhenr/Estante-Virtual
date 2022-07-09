module.exports = (sequelize, DataTypes) => {
  const Livro = sequelize.define(
    "Livro",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: { type: DataTypes.STRING, allowNull: false },
      ano_lancamento: { type: DataTypes.INTEGER, allowNull: false },
      num_paginas: { type: DataTypes.INTEGER, allowNull: false },
      descricao: { type: DataTypes.JSON, allowNull: false },
    },
    {
      timestamps: false,
    }
  );

  Livro.associate = (models) => {
    Livro.belongsTo(models.Editora, { foreignKey: "editora" });
    Livro.belongsTo(models.Autor, { foreignKey: "autor" });
  };

  return Livro;
};
