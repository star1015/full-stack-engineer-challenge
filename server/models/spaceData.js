"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class spaceData extends Model {
    }
    spaceData.init({
        spaceItem: DataTypes.JSON,
    }, {
        sequelize,
        modelName: "spaceData",
        tableName: "spaceData"
    });
    return spaceData;
};