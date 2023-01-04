"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.js"));

var _db = _interopRequireDefault(require("./config/db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Para que no nos tire error a la hora de importar express, debemos colocar   "type": "module" en package.json
var app = (0, _express["default"])(); // Conectar la base de datos

_db["default"].authenticate().then(function () {
  console.log('Base de datos conectada');
})["catch"](function (error) {
  return console.log(error);
}); // Definir puerto


var port = process.env.PORT || 4000; // Habilitar pug

app.set('view engine', 'pug'); // Obtener el año actual

app.use(function (req, res, next) {
  var year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes";
  next();
}); // Definir la carpeta publica

app.use(_express["default"]["static"]('public'));
app.use('/viajes', _express["default"]["static"]('public')); // Agregar router

app.use('/', _index["default"]);
app.listen(port, function () {
  console.log("El servidor esta funcionando en el puerto ".concat(port));
});