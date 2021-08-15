"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSeguroCamion = getSeguroCamion;
exports.getSeguroCamionByPatente = getSeguroCamionByPatente;
exports.addSeguroCamion = addSeguroCamion;
exports.updateSeguroCamion = updateSeguroCamion;
exports.deleteSeguroCamion = deleteSeguroCamion;

var _SeguroCamion = _interopRequireDefault(require("../models/SeguroCamion"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getSeguroCamion(_x, _x2) {
  return _getSeguroCamion.apply(this, arguments);
}

function _getSeguroCamion() {
  _getSeguroCamion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var seguroCamion;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _SeguroCamion["default"].findAll();

          case 3:
            seguroCamion = _context.sent;
            res.status(200).json({
              data: seguroCamion
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
  return _getSeguroCamion.apply(this, arguments);
}

function getSeguroCamionByPatente(_x3, _x4) {
  return _getSeguroCamionByPatente.apply(this, arguments);
}

function _getSeguroCamionByPatente() {
  _getSeguroCamionByPatente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var patente, seguroCamion;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            patente = req.params.patente;
            _context2.prev = 1;
            _context2.next = 4;
            return _SeguroCamion["default"].findAll({
              where: {
                PATENTE_CAMION: patente
              }
            });

          case 4:
            seguroCamion = _context2.sent;
            res.status(200).json({
              data: seguroCamion
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(500).send({
              data: _context2.t0
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getSeguroCamionByPatente.apply(this, arguments);
}

function addSeguroCamion(_x5, _x6) {
  return _addSeguroCamion.apply(this, arguments);
}

function _addSeguroCamion() {
  _addSeguroCamion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, PATENTE_CAMION, VALOR_SEGURO, FECHA_PAGO_SEGURO, formatFecha, newSeguroCamion;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, PATENTE_CAMION = _req$body.PATENTE_CAMION, VALOR_SEGURO = _req$body.VALOR_SEGURO, FECHA_PAGO_SEGURO = _req$body.FECHA_PAGO_SEGURO;
            formatFecha = (0, _moment["default"])(FECHA_PAGO_SEGURO, "YYYY-MM-DD").format("YYYY-MM-DD");
            _context3.prev = 2;
            _context3.next = 5;
            return _SeguroCamion["default"].create({
              PATENTE_CAMION: PATENTE_CAMION,
              VALOR_SEGURO: VALOR_SEGURO,
              FECHA_PAGO_SEGURO: formatFecha
            }, {
              fields: ["PATENTE_CAMION", "VALOR_SEGURO", "FECHA_PAGO_SEGURO"]
            });

          case 5:
            newSeguroCamion = _context3.sent;

            if (newSeguroCamion) {
              res.status(200).send({
                message: "Seguro agregado correctamente",
                data: newSeguroCamion
              });
            } else {
              res.status(500).send({
                message: "Ya existe un seguro para este camion registrado con esta fecha",
                data: newSeguroCamion
              });
            }

            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            res.status(500).send({
              message: "Ya existe un seguro para este camion registrado con esta fecha",
              data: [_context3.t0]
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return _addSeguroCamion.apply(this, arguments);
}

function updateSeguroCamion(_x7, _x8) {
  return _updateSeguroCamion.apply(this, arguments);
}

function _updateSeguroCamion() {
  _updateSeguroCamion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$params, patente, fecha, VALOR_SEGURO, formatFecha, seguro, seguroUpdate;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$params = req.params, patente = _req$params.patente, fecha = _req$params.fecha;
            VALOR_SEGURO = req.body.VALOR_SEGURO;
            formatFecha = (0, _moment["default"])(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
            _context4.next = 5;
            return _SeguroCamion["default"].findOne({
              where: {
                PATENTE_CAMION: patente,
                FECHA_PAGO_SEGURO: new Date(formatFecha)
              }
            });

          case 5:
            seguro = _context4.sent;

            if (!(seguro === null)) {
              _context4.next = 10;
              break;
            }

            res.status(200).json({
              message: "No se encontro este seguro",
              data: []
            });
            _context4.next = 14;
            break;

          case 10:
            _context4.next = 12;
            return seguro.update({
              VALOR_SEGURO: VALOR_SEGURO
            });

          case 12:
            seguroUpdate = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              message: "Seguro ha sido actualizado correctamente",
              data: seguroUpdate
            }));

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateSeguroCamion.apply(this, arguments);
}

function deleteSeguroCamion(_x9, _x10) {
  return _deleteSeguroCamion.apply(this, arguments);
}

function _deleteSeguroCamion() {
  _deleteSeguroCamion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$params2, patente, fecha, formatFecha, _deleteSeguroCamion2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$params2 = req.params, patente = _req$params2.patente, fecha = _req$params2.fecha;
            formatFecha = (0, _moment["default"])(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
            _context5.next = 5;
            return _SeguroCamion["default"].destroy({
              where: {
                PATENTE_CAMION: patente,
                FECHA_PAGO_SEGURO: new Date(formatFecha)
              }
            });

          case 5:
            _deleteSeguroCamion2 = _context5.sent;

            if (!(_deleteSeguroCamion2 === 0)) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              message: "No existe este seguro",
              count: _deleteSeguroCamion2
            }));

          case 8:
            res.status(200).json({
              message: "Seguro eliminado correctamente",
              count: _deleteSeguroCamion2
            });
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar seguro",
              count: 0
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return _deleteSeguroCamion.apply(this, arguments);
}