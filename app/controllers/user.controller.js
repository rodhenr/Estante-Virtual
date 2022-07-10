const { Op } = require("sequelize");
const { Autor, Editora, Livro } = require("../models");

const getLivros = async (req, res) => {
  try {
    const livros = await Livro.findAll({
      include: [
        { model: Editora, attributes: ["nome"] },
        { model: Autor, attributes: ["nome"] },
      ],
      attributes: [
        "id",
        "titulo",
        "ano_lancamento",
        "num_paginas",
        "descricao",
      ],
    });

    if (!livros) return;

    res.status(200).json({
      data: livros,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

const filterLivros = async (req, res) => {
  const { filtro, orderBy } = req.query;

  if (!filtro || !orderBy || filtro === "" || orderBy === "")
    return res.status(400).send("Termo inválido");

  try {
    if (filtro === "editora") {
      const data = await Livro.findAll({
        include: [
          { model: Editora, attributes: ["nome"] },
          { model: Autor, attributes: ["nome"] },
        ],
        attributes: [
          "id",
          "titulo",
          "ano_lancamento",
          "num_paginas",
          "descricao",
        ],
        order: [[Editora, "nome", orderBy]],
      });

      if (!data) return;

      res.status(200).json({
        data,
      });
    } else if (filtro === "autor") {
      const data = await Livro.findAll({
        include: [
          { model: Editora, attributes: ["nome"] },
          { model: Autor, attributes: ["nome"] },
        ],
        attributes: [
          "id",
          "titulo",
          "ano_lancamento",
          "num_paginas",
          "descricao",
        ],
        order: [[Autor, "nome", orderBy]],
      });

      if (!data) return;

      res.status(200).json({
        data,
      });
    } else if (
      filtro === "titulo" ||
      filtro === "ano_lancamento" ||
      filtro === "num_paginas"
    ) {
      const data = await Livro.findAll({
        include: [
          { model: Editora, attributes: ["nome"] },
          { model: Autor, attributes: ["nome"] },
        ],
        attributes: [
          "id",
          "titulo",
          "ano_lancamento",
          "num_paginas",
          "descricao",
        ],
        order: [[filtro, orderBy]],
      });

      if (!data) return;

      res.status(200).json({
        data,
      });
    } else {
      return;
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const search = async (req, res) => {
  const { termo } = req.query;

  if (!termo || termo === "") return res.status(400).send("Termo inválido");

  try {
    const data = await Livro.findAll({
      where: {
        [Op.or]: [
          { titulo: { [Op.like]: `%${termo}%` } },
          { "$Autor.nome$": { [Op.like]: `%${termo}%` } },
        ],
      },
      include: [
        { model: Editora, attributes: ["nome"] },
        { model: Autor, attributes: ["nome"] },
      ],

      attributes: [
        "id",
        "titulo",
        "ano_lancamento",
        "num_paginas",
        "descricao",
      ],
    });

    if (!data) return;

    res.status(200).json({
      data,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { filterLivros, getLivros, search };
