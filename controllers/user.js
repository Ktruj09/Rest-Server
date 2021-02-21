const { response } = require("express");

const usuarioGet = (req, res = response) => {
    const query = req.query
    res.json({
        msg: "get API - controllers",
        query
    });
};

const usuarioPost = (req, res = response) => {

    const body = req.body;
    res.json({
        datos: body,
    });
};

const usuarioPut = (req, res = response) => {
    const id = req.params.id
    res.json({
        id: id
    });
};

const usuarioDelete = (req, res = response) => {
    res.json({
        msg: "delete API - Controllers",
    });
};

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete,
};