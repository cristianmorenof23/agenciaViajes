"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginaDetalleViaje = exports.paginaTestimoniales = exports.paginaViajes = exports.paginaNosotros = exports.paginaInicio = void 0;

var _Viaje = require("../models/Viaje.js");

var paginaInicio = function paginaInicio(req, res) {
  // req - lo que enviamos --  res - lo que express nos responde
  res.render('inicio', {
    pagina: 'Inicio'
  });
};

exports.paginaInicio = paginaInicio;

var paginaNosotros = function paginaNosotros(req, res) {
  res.render('nosotros', {
    pagina: 'Nosotros'
  });
};

exports.paginaNosotros = paginaNosotros;

var paginaViajes = function paginaViajes(req, res) {
  var viajes;
  return regeneratorRuntime.async(function paginaViajes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_Viaje.Viaje.findAll());

        case 2:
          viajes = _context.sent;
          res.render('viajes', {
            pagina: 'Próximos Viajes',
            viajes: viajes
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.paginaViajes = paginaViajes;

var paginaTestimoniales = function paginaTestimoniales(req, res) {
  res.render('testimoniales', {
    pagina: 'Testimoniales'
  });
}; // Muestra un viaje por su slug


exports.paginaTestimoniales = paginaTestimoniales;

var paginaDetalleViaje = function paginaDetalleViaje(req, res) {
  var slug, resultado;
  return regeneratorRuntime.async(function paginaDetalleViaje$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          slug = req.params.slug;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_Viaje.Viaje.findOne({
            where: {
              slug: slug
            }
          }));

        case 4:
          resultado = _context2.sent;
          res.render('viaje', {
            pagina: 'Información Viaje',
            resultado: resultado
          });
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.paginaDetalleViaje = paginaDetalleViaje;