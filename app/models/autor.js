module.exports = (sequelize, DataTypes) => {
  const Autor = sequelize.define(
    "Autor",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: { type: DataTypes.STRING, allowNull: false },
    },
    {
      timestamps: false,
      tableName: "Autores",
    }
  );

  Autor.associate = (models) => {
    Autor.hasMany(models.Livro, { foreignKey: "autor" });
  };

  return Autor;
};
