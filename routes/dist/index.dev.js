"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _paginaController = require("../controllers/paginaController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', _paginaController.paginaInicio);
router.get('/nosotros', _paginaController.paginaNosotros);
router.get('/viajes', _paginaController.paginaViajes);
router.get('/viajes/:slug', _paginaController.paginaDetalleViaje);
router.get('/testimoniales', _paginaController.paginaTestimoniales);
var _default = router;
exports["default"] = _default;