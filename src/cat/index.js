const express = require("express");
const catRouter = express.Router();
const controller = require("./controller.js");
const morgan = require("morgan");

// get, post, delete, put
// read, create, delete, update

// CRUD

// catRouter.get("/", controller.read);
// catRouter.post("/", controller.create);
// catRouter.delete("/", controller.delete);
// catRouter.put("/", controller.update);

// MVC 패턴
// Model
// View ( Client )
// Controller

// Router
catRouter.use(morgan("dev"));

catRouter.use("/", (req, res, next) => {
    console.log(123);
    next();
});

catRouter
    .route("/")
    .get(controller.read)
    .post(controller.create)
    .delete(controller.delete)
    .put(controller.update);

module.exports = catRouter;
