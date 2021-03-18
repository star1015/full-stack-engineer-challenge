"use strict";
const Sequelize = require("sequelize");
var {
  IS_DOCKER,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} = process.env;
const host = IS_DOCKER ? 'db' : 'localhost';

if(!IS_DOCKER){
  MYSQL_DATABASE = 'mission-control'
  MYSQL_USER= 'root'
  MYSQL_PASSWORD= 'wb'
}

const databaseConfig = {
  "dialect": 'mysql',
  "port": 3306,
  "logging": false,
  "database": MYSQL_DATABASE,
  "pool": {
      "max": 20,
      "idle": 30000
  },
  "host": host,
  "username": MYSQL_USER,
  "password":MYSQL_PASSWORD,
  define: {
    timestamps: false
  }
}
const sequelize = new Sequelize(MYSQL_DATABASE, null, null, databaseConfig);
module.exports = {
  sequelize
};