"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSueldoChofer = getSueldoChofer;
exports.getSueldoChoferByRut = getSueldoChoferByRut;
exports.addSueldoChofer = addSueldoChofer;
exports.updateSueldoChofer = updateSueldoChofer;
exports.deleteSueldoChofer = deleteSueldoChofer;

var _SueldosChoferes = _interopRequireDefault(require("../models/SueldosChoferes"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getSueldoChofer(_x, _x2) {
  return _getSueldoChofer.apply(this, arguments);
}

function _getSueldoChofer() {
  _getSueldoChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var sueldoChofer;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _SueldosChoferes["default"].findAll();

          case 3:
            sueldoChofer = _context.sent;
            res.status(200).json({
              data: sueldoChofer
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
  return _getSueldoChofer.apply(this, arguments);
}

function getSueldoChoferByRut(_x3, _x4) {
  return _getSueldoChoferByRut.apply(this, arguments);
}

function _getSueldoChoferByRut() {
  _getSueldoChoferByRut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var rut, sueldoChofer;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            rut = req.params.rut;
            _context2.next = 4;
            return _SueldosChoferes["default"].findAll({
              where: {
                RUT_CHOFER: rut
              }
            });

          case 4:
            sueldoChofer = _context2.sent;
            res.status(200).json({
              data: sueldoChofer
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(500).send({
              data: _context2.t0
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getSueldoChoferByRut.apply(this, arguments);
}

function addSueldoChofer(_x5, _x6) {
  return _addSueldoChofer.apply(this, arguments);
}

function _addSueldoChofer() {
  _addSueldoChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, RUT_CHOFER, FECHA_PAGO, SUELDO_BRUTO, PROVICION_DESAUCIO, PROVICION_VACACIONES, formatFechaPago, newSueldoChofer;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, RUT_CHOFER = _req$body.RUT_CHOFER, FECHA_PAGO = _req$body.FECHA_PAGO, SUELDO_BRUTO = _req$body.SUELDO_BRUTO, PROVICION_DESAUCIO = _req$body.PROVICION_DESAUCIO, PROVICION_VACACIONES = _req$body.PROVICION_VACACIONES;
            formatFechaPago = (0, _moment["default"])(FECHA_PAGO, "YYYY-MM-DD").format("YYYY-MM-DD");
            _context3.prev = 2;
            _context3.next = 5;
            return _SueldosChoferes["default"].create({
              RUT_CHOFER: RUT_CHOFER,
              FECHA_PAGO: new Date(formatFechaPago),
              SUELDO_BRUTO: SUELDO_BRUTO,
              PROVICION_DESAUCIO: PROVICION_DESAUCIO,
              PROVICION_VACACIONES: PROVICION_VACACIONES
            }, {
              fields: ["RUT_CHOFER", "FECHA_PAGO", "SUELDO_BRUTO", "PROVICION_DESAUCIO", "PROVICION_VACACIONES"]
            });

          case 5:
            newSueldoChofer = _context3.sent;

            if (newSueldoChofer) {
              res.status(200).send({
                message: "Sueldo de chofer ingresado correctamente",
                data: newSueldoChofer
              });
            } else {
              res.status(400).send({
                message: "Ya esta ingresado este sueldo de chofer durante la fecha indicada",
                data: newSueldoChofer
              });
            }

            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            res.status(500).send({
              message: "Ya esta ingresado este sueldo de chofer durante la fecha indicada",
              data: []
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return _addSueldoChofer.apply(this, arguments);
}

function updateSueldoChofer(_x7, _x8) {
  return _updateSueldoChofer.apply(this, arguments);
}

function _updateSueldoChofer() {
  _updateSueldoChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$params, rut, fecha, _req$body2, SUELDO_BRUTO, PROVICION_DESAUCIO, PROVICION_VACACIONES, formatFechaPago, sueldoChofer, sueldoChoferUpdate;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$params = req.params, rut = _req$params.rut, fecha = _req$params.fecha;
            _req$body2 = req.body, SUELDO_BRUTO = _req$body2.SUELDO_BRUTO, PROVICION_DESAUCIO = _req$body2.PROVICION_DESAUCIO, PROVICION_VACACIONES = _req$body2.PROVICION_VACACIONES;
            formatFechaPago = (0, _moment["default"])(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
            _context4.next = 5;
            return _SueldosChoferes["default"].findOne({
              where: {
                RUT_CHOFER: rut,
                FECHA_PAGO: new Date(formatFechaPago)
              }
            });

          case 5:
            sueldoChofer = _context4.sent;

            if (!(sueldoChofer === null)) {
              _context4.next = 10;
              break;
            }

            res.status(400).json({
              message: "No se encontro este sueldo de chofer",
              data: []
            });
            _context4.next = 14;
            break;

          case 10:
            _context4.next = 12;
            return sueldoChofer.update({
              SUELDO_BRUTO: SUELDO_BRUTO,
              PROVICION_DESAUCIO: PROVICION_DESAUCIO,
              PROVICION_VACACIONES: PROVICION_VACACIONES
            });

          case 12:
            sueldoChoferUpdate = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              message: "Sueldo de chofer actualizado correctamente",
              data: sueldoChoferUpdate
            }));

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateSueldoChofer.apply(this, arguments);
}

function deleteSueldoChofer(_x9, _x10) {
  return _deleteSueldoChofer.apply(this, arguments);
}

function _deleteSueldoChofer() {
  _deleteSueldoChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$params2, rut, fecha, formatFechaPago, _deleteSueldoChofer2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$params2 = req.params, rut = _req$params2.rut, fecha = _req$params2.fecha;
            formatFechaPago = (0, _moment["default"])(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
            _context5.next = 5;
            return _SueldosChoferes["default"].destroy({
              where: {
                RUT_CHOFER: rut,
                FECHA_PAGO: new Date(formatFechaPago)
              }
            });

          case 5:
            _deleteSueldoChofer2 = _context5.sent;

            if (!(_deleteSueldoChofer2 === 0)) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              message: "No existe esta sueldo de chofer",
              count: _deleteSueldoChofer2
            }));

          case 8:
            res.status(200).json({
              message: "Sueldo de chofer eliminado correctamente",
              count: _deleteSueldoChofer2
            });
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar este sueldo de chofer",
              count: 0
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return _deleteSueldoChofer.apply(this, arguments);
}