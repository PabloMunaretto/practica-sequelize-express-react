const express = require("express");
const router = express.Router();
const { Car } = require("../db/models")


router.get("/", (req, res, next) => {
    Car.findAll().then((car) => res.send(car));
})

router.post("/", (req, res, next) => {
  Car.create(req.body).then((car) => res.send(car));
})

router.get("/:id", (req, res, next) => {
  Car.findByPk(req.params.id).then((car) => res.send(car))
})


module.exports = router