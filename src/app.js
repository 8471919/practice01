const express = require("express");

const indexRouter = require("./index/index.js");
const catRouter = require("./cat/index.js");

const app = express();

// 미들웨어 : req, res 받아서 꾸며주는 역할
app.use((req, res, next) => {
    console.log("이거 동작하는 데 걸린 시간");
    console.log("time");
    next();
});

app.use("/", indexRouter);
app.use("/cat", catRouter);
// app.use('dog', dogRouter);

module.exports = app;
