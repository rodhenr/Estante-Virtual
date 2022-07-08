module.exports = (sequelize, DataTypes) => {
  const Livro = sequelize.define("Livro", {
    livro_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: { type: DataTypes.STRING, allowNull: false },
    ano_lancamento: { type: DataTypes.DATE, allowNull: false },
    num_paginas: { type: DataTypes.INTEGER, allowNull: false },
    descricao: { type: DataTypes.JSON, allowNull: false },
  });

  Livro.associate = (models) => {
    Livro.belongsTo(models.Autor);
  };

  Livro.associate = (models) => {
    Livro.belongsTo(models.Editora);
  };

  return Livro;
};
