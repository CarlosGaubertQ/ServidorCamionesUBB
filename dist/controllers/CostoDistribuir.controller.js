"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCostoDistribuir = getCostoDistribuir;
exports.addCostoDistribuir = addCostoDistribuir;
exports.updateCostoDistribuir = updateCostoDistribuir;
exports.deleteCostoDistribuir = deleteCostoDistribuir;

var _CostoDistribuir = _interopRequireDefault(require("../models/CostoDistribuir"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCostoDistribuir(_x, _x2) {
  return _getCostoDistribuir.apply(this, arguments);
}

function _getCostoDistribuir() {
  _getCostoDistribuir = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var costoDistribuir;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _CostoDistribuir["default"].findAll();

          case 3:
            costoDistribuir = _context.sent;
            res.status(200).json({
              data: costoDistribuir
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
  return _getCostoDistribuir.apply(this, arguments);
}

function addCostoDistribuir(_x3, _x4) {
  return _addCostoDistribuir.apply(this, arguments);
}

function _addCostoDistribuir() {
  _addCostoDistribuir = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, FECHA_PAGO, MONTO_DISTRIBUCION, formatFechaPago, newCostoDistribuir;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, FECHA_PAGO = _req$body.FECHA_PAGO, MONTO_DISTRIBUCION = _req$body.MONTO_DISTRIBUCION;
            formatFechaPago = (0, _moment["default"])(FECHA_PAGO, "YYYY-MM-DD").format("YYYY-MM-DD");
            _context2.prev = 2;
            _context2.next = 5;
            return _CostoDistribuir["default"].create({
              FECHA_PAGO: new Date(formatFechaPago),
              MONTO_DISTRIBUCION: MONTO_DISTRIBUCION
            }, {
              fields: ["FECHA_PAGO", "MONTO_DISTRIBUCION"]
            });

          case 5:
            newCostoDistribuir = _context2.sent;

            if (newCostoDistribuir) {
              res.status(200).send({
                message: "Costo indirecto registrado correctamente",
                data: newCostoDistribuir
              });
            } else {
              res.status(400).send({
                message: "Ya esta registrado este costo indirecto",
                data: newCostoDistribuir
              });
            }

            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            res.status(400).send({
              message: "Ya esta registrado este costo indirecto",
              data: []
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));
  return _addCostoDistribuir.apply(this, arguments);
}

function updateCostoDistribuir(_x5, _x6) {
  return _updateCostoDistribuir.apply(this, arguments);
}

function _updateCostoDistribuir() {
  _updateCostoDistribuir = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var fecha, MONTO_DISTRIBUCION, formatFechaPago, costoDistriuir, costoDistribuirUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            fecha = req.params.fecha;
            MONTO_DISTRIBUCION = req.body.MONTO_DISTRIBUCION;
            formatFechaPago = (0, _moment["default"])(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
            _context3.next = 5;
            return _CostoDistribuir["default"].findOne({
              where: {
                FECHA_PAGO: new Date(formatFechaPago)
              }
            });

          case 5:
            costoDistriuir = _context3.sent;

            if (!(costoDistriuir === null)) {
              _context3.next = 10;
              break;
            }

            res.status(200).json({
              message: "No se encuentra el registro de este costo indirecto",
              data: []
            });
            _context3.next = 14;
            break;

          case 10:
            _context3.next = 12;
            return costoDistriuir.update({
              MONTO_DISTRIBUCION: MONTO_DISTRIBUCION
            });

          case 12:
            costoDistribuirUpdate = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              message: "Costo indirecto actualizado correctamente",
              data: costoDistribuirUpdate
            }));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateCostoDistribuir.apply(this, arguments);
}

function deleteCostoDistribuir(_x7, _x8) {
  return _deleteCostoDistribuir.apply(this, arguments);
}

function _deleteCostoDistribuir() {
  _deleteCostoDistribuir = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var fecha, formatFechaPago, deleteCostoDistriuir;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            fecha = req.params.fecha;
            formatFechaPago = (0, _moment["default"])(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
            _context4.next = 5;
            return _CostoDistribuir["default"].destroy({
              where: {
                FECHA_PAGO: new Date(formatFechaPago)
              }
            });

          case 5:
            deleteCostoDistriuir = _context4.sent;

            if (!(deleteCostoDistriuir === 0)) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "No se encuentra registrado este costo indirecto",
              count: deleteCostoDistriuir
            }));

          case 8:
            res.status(200).json({
              message: "Costo indirecto eliminado correctamente",
              count: deleteCostoDistriuir
            });
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar este costo indirecto",
              count: 0
            });

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return _deleteCostoDistribuir.apply(this, arguments);
}