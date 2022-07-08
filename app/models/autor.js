module.exports = (sequelize, DataTypes) => {
  const Autor = sequelize.define("Autor", {
    autor_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    autor_nome: { type: DataTypes.STRING, allowNull: false },
  });

  Autor.associate = (models) => {
    Autor.hasMany(models.Livro);
  };

  return Autor;
};
