const db = require("..");
const S = require("sequelize");

class Car extends S.Model {}

Car.init(
    {
        marca: {
            type: S.STRING,
            allowNull: false
        },
        modelo: {
            type: S.STRING,
            allowNull: false
        },
        año: {
            type: S.INTEGER,
            allowNull: false
        },
        precio: {
            type: S.INTEGER,
            allowNull: false
        }
}, 
{ sequelize: db, modelName: "car" })

module.exports = Car;