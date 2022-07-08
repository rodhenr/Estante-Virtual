module.exports = (sequelize, DataTypes) => {
  const Editora = sequelize.define("Editora", {
    editora_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    editora_nome: { type: DataTypes.STRING, allowNull: false },
  });

  Editora.associate = (models) => {
    Editora.hasMany(models.Livro);
  };

  return Editora;
};
