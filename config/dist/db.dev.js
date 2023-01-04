"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var db = new _sequelize.Sequelize('agenciaviajes', 'root', 'root', {
  host: '127.0.0.10',
  port: '3306',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000
  },
  operatorsAliases: false
});
var _default = db;
exports["default"] = _default;