const express = require("express");

const router = express.Router();
const controller = require("../controllers/food-controller");

router.get("/", controller.getData)

router.post("/create", controller.createFood)

router.put("/update", controller.updateFood)

router.delete("/delete", controller.deleteFood)

module.exports = router