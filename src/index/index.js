const express = require("express");

const indexRouter = express.Router();

indexRouter.get("/", (req, res, next) => {
    res.send({
        message: "여기는 루트입니다.",
    });
});

module.exports = indexRouter;
