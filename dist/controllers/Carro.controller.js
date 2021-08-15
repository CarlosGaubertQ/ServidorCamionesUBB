"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCarro = getCarro;
exports.getCarroSinCamion = getCarroSinCamion;
exports.addCarro = addCarro;
exports.updateCarro = updateCarro;
exports.deleteCarro = deleteCarro;

var _Carro = _interopRequireDefault(require("../models/Carro"));

var _Camion = _interopRequireDefault(require("../models/Camion"));

var _moment = _interopRequireDefault(require("moment"));

var _Sequelize = require("Sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCarro(_x, _x2) {
  return _getCarro.apply(this, arguments);
}

function _getCarro() {
  _getCarro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var carro;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Carro["default"].findAll();

          case 3:
            carro = _context.sent;
            res.status(200).json({
              data: carro
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
  return _getCarro.apply(this, arguments);
}

function getCarroSinCamion(_x3, _x4) {
  return _getCarroSinCamion.apply(this, arguments);
}

function _getCarroSinCamion() {
  _getCarroSinCamion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var carro, camionSinCarro, patentesCarrosUsada, resultado;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Carro["default"].findAll();

          case 3:
            carro = _context2.sent;
            _context2.next = 6;
            return _Camion["default"].findAll({
              where: {
                Patente_Carro: _defineProperty({}, _Sequelize.Op.ne, null)
              }
            });

          case 6:
            camionSinCarro = _context2.sent;
            patentesCarrosUsada = [];
            camionSinCarro.map(function (carri) {
              return patentesCarrosUsada.push(carri.Patente_Carro);
            });
            resultado = carro.filter(function (item) {
              return !patentesCarrosUsada.includes(item.PATENTE_CARRO);
            });
            res.status(200).json({
              data: resultado
            });
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            res.status(500).send({
              data: _context2.t0
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return _getCarroSinCamion.apply(this, arguments);
}

function addCarro(_x5, _x6) {
  return _addCarro.apply(this, arguments);
}

function _addCarro() {
  _addCarro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, PATENTE_CARRO, TIPO_DE_CARRO, FECHA_DE_COMPRA_CARRO, VALOR_CARRO, EJE_CARRO, MARCA_CARRO, OBSERVACION_CARRO, FECHA_REV_TECNICA, formatFecha, newCarro;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, PATENTE_CARRO = _req$body.PATENTE_CARRO, TIPO_DE_CARRO = _req$body.TIPO_DE_CARRO, FECHA_DE_COMPRA_CARRO = _req$body.FECHA_DE_COMPRA_CARRO, VALOR_CARRO = _req$body.VALOR_CARRO, EJE_CARRO = _req$body.EJE_CARRO, MARCA_CARRO = _req$body.MARCA_CARRO, OBSERVACION_CARRO = _req$body.OBSERVACION_CARRO, FECHA_REV_TECNICA = _req$body.FECHA_REV_TECNICA;
            _context3.prev = 1;
            formatFecha = (0, _moment["default"])(FECHA_DE_COMPRA_CARRO, "YYYY-MM-DD").format("YYYY-MM-DD");
            _context3.next = 5;
            return _Carro["default"].create({
              PATENTE_CARRO: PATENTE_CARRO,
              TIPO_DE_CARRO: TIPO_DE_CARRO,
              FECHA_DE_COMPRA_CARRO: formatFecha,
              VALOR_CARRO: VALOR_CARRO,
              EJE_CARRO: EJE_CARRO,
              MARCA_CARRO: MARCA_CARRO,
              OBSERVACION_CARRO: OBSERVACION_CARRO,
              FECHA_REV_TECNICA: FECHA_REV_TECNICA
            }, {
              fields: ["PATENTE_CARRO", "TIPO_DE_CARRO", "FECHA_DE_COMPRA_CARRO", "VALOR_CARRO", "EJE_CARRO", "MARCA_CARRO", "OBSERVACION_CARRO", "FECHA_REV_TECNICA"]
            });

          case 5:
            newCarro = _context3.sent;

            if (newCarro) {
              res.status(200).send({
                message: "Carro creado correctamente",
                data: newCarro
              });
            } else {
              res.status(500).send({
                message: "Ya existe este carro",
                data: newCarro
              });
            }

            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(400).send({
              message: "Ya existe este carro",
              data: []
            }));

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _addCarro.apply(this, arguments);
}

function updateCarro(_x7, _x8) {
  return _updateCarro.apply(this, arguments);
}

function _updateCarro() {
  _updateCarro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var patente, _req$body2, TIPO_DE_CARRO, FECHA_DE_COMPRA_CARRO, VALOR_CARRO, EJE_CARRO, MARCA_CARRO, OBSERVACION_CARRO, FECHA_REV_TECNICA, formatFecha, carro, carroUpdate;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            patente = req.params.patente;
            _req$body2 = req.body, TIPO_DE_CARRO = _req$body2.TIPO_DE_CARRO, FECHA_DE_COMPRA_CARRO = _req$body2.FECHA_DE_COMPRA_CARRO, VALOR_CARRO = _req$body2.VALOR_CARRO, EJE_CARRO = _req$body2.EJE_CARRO, MARCA_CARRO = _req$body2.MARCA_CARRO, OBSERVACION_CARRO = _req$body2.OBSERVACION_CARRO, FECHA_REV_TECNICA = _req$body2.FECHA_REV_TECNICA;
            formatFecha = (0, _moment["default"])(FECHA_DE_COMPRA_CARRO, "YYYY-MM-DD").format("YYYY-MM-DD");
            _context4.next = 5;
            return _Carro["default"].findOne({
              where: {
                PATENTE_CARRO: patente
              }
            });

          case 5:
            carro = _context4.sent;

            if (!(carro === null)) {
              _context4.next = 10;
              break;
            }

            res.status(200).json({
              message: "No se encontro este carro",
              data: []
            });
            _context4.next = 14;
            break;

          case 10:
            _context4.next = 12;
            return carro.update({
              TIPO_DE_CARRO: TIPO_DE_CARRO,
              FECHA_DE_COMPRA_CARRO: formatFecha,
              VALOR_CARRO: VALOR_CARRO,
              EJE_CARRO: EJE_CARRO,
              MARCA_CARRO: MARCA_CARRO,
              OBSERVACION_CARRO: OBSERVACION_CARRO,
              FECHA_REV_TECNICA: FECHA_REV_TECNICA
            });

          case 12:
            carroUpdate = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              message: "Carro ha sido actualizado correctamente",
              data: carroUpdate
            }));

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateCarro.apply(this, arguments);
}

function deleteCarro(_x9, _x10) {
  return _deleteCarro.apply(this, arguments);
}

function _deleteCarro() {
  _deleteCarro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var patente, _deleteCarro2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            patente = req.params.patente;
            _context5.prev = 1;
            _context5.next = 4;
            return _Carro["default"].destroy({
              where: {
                PATENTE_CARRO: patente
              }
            });

          case 4:
            _deleteCarro2 = _context5.sent;

            if (!(_deleteCarro2 === 0)) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              message: "No existe este carro",
              count: _deleteCarro2
            }));

          case 7:
            res.status(200).json({
              message: "Carro eliminado correctamente",
              count: _deleteCarro2
            });
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](1);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar este carro",
              count: 0
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 10]]);
  }));
  return _deleteCarro.apply(this, arguments);
}