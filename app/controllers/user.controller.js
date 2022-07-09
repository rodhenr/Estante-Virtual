const { Autor, Editora, Livro } = require("../models");

const getLivros = async (req, res) => {
  try {
    const livros = await Livro.findAll({ include: Editora });

    if (!livros) return;

    res.status(200).json({
      data: livros,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { getLivros };
