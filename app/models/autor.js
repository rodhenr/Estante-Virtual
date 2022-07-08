module.exports = (sequelize, dataTypes) => {
  const Autor = sequelize.define("Autor", {
    autor_id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    autor_nome: { type: dataTypes.STRING },
    
  });

  return Autor;
};
