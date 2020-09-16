"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

  class productos extends Model {
  
    static associate(models) {
      // define association here
    }
  }
  productos.init(
    {
      nombre: DataTypes.STRING,
      precio: DataTypes.NUMBER,
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "productos",
    }
  );
  return productos;
};
