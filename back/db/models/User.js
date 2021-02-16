const db = require("..");
const S = require("sequelize");
const Car = require("./Car")

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastname: {
      type: S.STRING,
      allowNull: false,
    },
    dni: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.hasMany(Car, {as: 'userid'})
Car.belongsTo(User)

module.exports = User;