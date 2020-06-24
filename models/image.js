"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define(
    "image",
    {
      title: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {}
  );

  image.associate = function (models) {
    // define association here
  };

  return image;
};
