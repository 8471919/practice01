const catData = require("./model");

class CatController {
    static read(req, res, next) {
        res.send({
            message: "여기는 캣입니다.",
            data: catData,
        });
    }

    static create(req, res, next) {
        catData.push("고양이");
        res.send({
            message: "새로운 고양이입니다.",
            data: catData,
        });
    }

    static delete(req, res, next) {
        res.send({
            message: "캣 삭제입니다.",
            data: catData,
        });
    }

    static update(req, res, next) {
        res.send({
            message: "캣 수정입니다.",
            data: catData,
        });
    }
}

module.exports = CatController;
