module.exports = (sequelize, DataTypes) => {
  const Editora = sequelize.define(
    "Editora",
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
    }
  );

  Editora.associate = (models) => {
    Editora.hasMany(models.Livro, { foreignKey: "editora" });
  };

  return Editora;
};
