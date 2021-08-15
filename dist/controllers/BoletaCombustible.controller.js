"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoletaCombustible = getBoletaCombustible;
exports.addBoletaCombustible = addBoletaCombustible;
exports.updateBoletaCombustible = updateBoletaCombustible;
exports.deleteBoletaCombustible = deleteBoletaCombustible;

var _BoletaCombustible = _interopRequireDefault(require("../models/BoletaCombustible"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getBoletaCombustible(_x, _x2) {
  return _getBoletaCombustible.apply(this, arguments);
}

function _getBoletaCombustible() {
  _getBoletaCombustible = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var boletaCombustible;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _BoletaCombustible["default"].findAll();

          case 3:
            boletaCombustible = _context.sent;
            res.status(200).json({
              data: boletaCombustible
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).send({
              data: _context.t0
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getBoletaCombustible.apply(this, arguments);
}

function addBoletaCombustible(_x3, _x4) {
  return _addBoletaCombustible.apply(this, arguments);
}

function _addBoletaCombustible() {
  _addBoletaCombustible = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, NUMERO_BOLETA_COMBUSTIBLE, NUMERO_GUIA, PROVEEDOR_COMBUSTIBLE, MONTO_COMBUSTIBLE, LITROS_COMBUSTIBLE, OCTANAJE_COMBUSTIBLE, COMBUSTIBLE_BENCINA, COMBUSTIBLE_PETROLEO, PATENTE_CAMION, CODIGO_TARJETA, ODOMETRO, FECHA_BOLETA, newBoletaCombustible;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, NUMERO_BOLETA_COMBUSTIBLE = _req$body.NUMERO_BOLETA_COMBUSTIBLE, NUMERO_GUIA = _req$body.NUMERO_GUIA, PROVEEDOR_COMBUSTIBLE = _req$body.PROVEEDOR_COMBUSTIBLE, MONTO_COMBUSTIBLE = _req$body.MONTO_COMBUSTIBLE, LITROS_COMBUSTIBLE = _req$body.LITROS_COMBUSTIBLE, OCTANAJE_COMBUSTIBLE = _req$body.OCTANAJE_COMBUSTIBLE, COMBUSTIBLE_BENCINA = _req$body.COMBUSTIBLE_BENCINA, COMBUSTIBLE_PETROLEO = _req$body.COMBUSTIBLE_PETROLEO, PATENTE_CAMION = _req$body.PATENTE_CAMION, CODIGO_TARJETA = _req$body.CODIGO_TARJETA, ODOMETRO = _req$body.ODOMETRO, FECHA_BOLETA = _req$body.FECHA_BOLETA;
            _context2.prev = 1;
            _context2.next = 4;
            return _BoletaCombustible["default"].create({
              NUMERO_BOLETA_COMBUSTIBLE: NUMERO_BOLETA_COMBUSTIBLE,
              NUMERO_GUIA: NUMERO_GUIA,
              PROVEEDOR_COMBUSTIBLE: PROVEEDOR_COMBUSTIBLE,
              MONTO_COMBUSTIBLE: MONTO_COMBUSTIBLE,
              LITROS_COMBUSTIBLE: LITROS_COMBUSTIBLE,
              OCTANAJE_COMBUSTIBLE: OCTANAJE_COMBUSTIBLE,
              COMBUSTIBLE_BENCINA: COMBUSTIBLE_BENCINA,
              COMBUSTIBLE_PETROLEO: COMBUSTIBLE_PETROLEO,
              PATENTE_CAMION: PATENTE_CAMION,
              CODIGO_TARJETA: CODIGO_TARJETA,
              ODOMETRO: ODOMETRO,
              FECHA_BOLETA: FECHA_BOLETA
            }, {
              fields: ["NUMERO_BOLETA_COMBUSTIBLE", "NUMERO_GUIA", "PROVEEDOR_COMBUSTIBLE", "MONTO_COMBUSTIBLE", "LITROS_COMBUSTIBLE", "OCTANAJE_COMBUSTIBLE", "COMBUSTIBLE_BENCINA", "COMBUSTIBLE_PETROLEO", "PATENTE_CAMION", "CODIGO_TARJETA", "ODOMETRO", "FECHA_BOLETA"]
            });

          case 4:
            newBoletaCombustible = _context2.sent;

            if (newBoletaCombustible) {
              res.status(200).send({
                message: "Boleta de combustible creada correctamente",
                data: newBoletaCombustible
              });
            } else {
              res.status(500).send({
                message: "Ya existe esta boleta de combustible",
                data: newBoletaCombustible
              });
            }

            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(400).send({
              message: "Ya existe esta boleta de combustible",
              data: []
            }));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _addBoletaCombustible.apply(this, arguments);
}

function updateBoletaCombustible(_x5, _x6) {
  return _updateBoletaCombustible.apply(this, arguments);
}

function _updateBoletaCombustible() {
  _updateBoletaCombustible = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var numboleta, _req$body2, NUMERO_GUIA, PROVEEDOR_COMBUSTIBLE, MONTO_COMBUSTIBLE, LITROS_COMBUSTIBLE, OCTANAJE_COMBUSTIBLE, COMBUSTIBLE_BENCINA, COMBUSTIBLE_PETROLEO, PATENTE_CAMION, CODIGO_TARJETA, ODOMETRO, FECHA_BOLETA, boletaCombustible, boletaCombustibleUpdate;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            numboleta = req.params.numboleta;
            _req$body2 = req.body, NUMERO_GUIA = _req$body2.NUMERO_GUIA, PROVEEDOR_COMBUSTIBLE = _req$body2.PROVEEDOR_COMBUSTIBLE, MONTO_COMBUSTIBLE = _req$body2.MONTO_COMBUSTIBLE, LITROS_COMBUSTIBLE = _req$body2.LITROS_COMBUSTIBLE, OCTANAJE_COMBUSTIBLE = _req$body2.OCTANAJE_COMBUSTIBLE, COMBUSTIBLE_BENCINA = _req$body2.COMBUSTIBLE_BENCINA, COMBUSTIBLE_PETROLEO = _req$body2.COMBUSTIBLE_PETROLEO, PATENTE_CAMION = _req$body2.PATENTE_CAMION, CODIGO_TARJETA = _req$body2.CODIGO_TARJETA, ODOMETRO = _req$body2.ODOMETRO, FECHA_BOLETA = _req$body2.FECHA_BOLETA;
            _context3.next = 4;
            return _BoletaCombustible["default"].findOne({
              where: {
                NUMERO_BOLETA_COMBUSTIBLE: numboleta
              }
            });

          case 4:
            boletaCombustible = _context3.sent;

            if (!(boletaCombustible === null)) {
              _context3.next = 9;
              break;
            }

            res.status(200).json({
              message: "No se encontro esta boleta",
              data: []
            });
            _context3.next = 13;
            break;

          case 9:
            _context3.next = 11;
            return boletaCombustible.update({
              NUMERO_GUIA: NUMERO_GUIA,
              PROVEEDOR_COMBUSTIBLE: PROVEEDOR_COMBUSTIBLE,
              MONTO_COMBUSTIBLE: MONTO_COMBUSTIBLE,
              LITROS_COMBUSTIBLE: LITROS_COMBUSTIBLE,
              OCTANAJE_COMBUSTIBLE: OCTANAJE_COMBUSTIBLE,
              COMBUSTIBLE_BENCINA: COMBUSTIBLE_BENCINA,
              COMBUSTIBLE_PETROLEO: COMBUSTIBLE_PETROLEO,
              PATENTE_CAMION: PATENTE_CAMION,
              CODIGO_TARJETA: CODIGO_TARJETA,
              ODOMETRO: ODOMETRO,
              FECHA_BOLETA: FECHA_BOLETA
            });

          case 11:
            boletaCombustibleUpdate = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              message: "Boleta de combustible ha sido actualizado correctamente",
              data: boletaCombustibleUpdate
            }));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateBoletaCombustible.apply(this, arguments);
}

function deleteBoletaCombustible(_x7, _x8) {
  return _deleteBoletaCombustible.apply(this, arguments);
}

function _deleteBoletaCombustible() {
  _deleteBoletaCombustible = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var numboleta, _deleteBoletaCombustible2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            numboleta = req.params.numboleta;
            _context4.prev = 1;
            _context4.next = 4;
            return _BoletaCombustible["default"].destroy({
              where: {
                NUMERO_BOLETA_COMBUSTIBLE: numboleta
              }
            });

          case 4:
            _deleteBoletaCombustible2 = _context4.sent;
            console.log(numboleta);

            if (!(_deleteBoletaCombustible2 === 0)) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "No existe esta boleta de combustible",
              count: _deleteBoletaCombustible2
            }));

          case 8:
            res.status(200).json({
              message: "Boleta de combustible eliminada correctamente",
              count: _deleteBoletaCombustible2
            });
            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar esta boleta de combustible",
              count: 0
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return _deleteBoletaCombustible.apply(this, arguments);
}