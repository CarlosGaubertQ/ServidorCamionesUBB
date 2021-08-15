"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmpleado = getEmpleado;
exports.addEmpleado = addEmpleado;
exports.updateEmpleado = updateEmpleado;
exports.deleteEmpleado = deleteEmpleado;

var _Empleado = _interopRequireDefault(require("../models/Empleado"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getEmpleado(_x, _x2) {
  return _getEmpleado.apply(this, arguments);
}

function _getEmpleado() {
  _getEmpleado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var empleado;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Empleado["default"].findAll();

          case 3:
            empleado = _context.sent;
            res.status(200).json({
              data: empleado
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
  return _getEmpleado.apply(this, arguments);
}

function addEmpleado(_x3, _x4) {
  return _addEmpleado.apply(this, arguments);
}

function _addEmpleado() {
  _addEmpleado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, RUT_EMPLEADO, CODIGO_CUENTA, NOMBRE_EMPLEADO, NOMBRE_EMPLEADO2, APELLIDO_EMPLEADO, APELLIDO_EMPLEADO2, DIRECCION_EMPLEADO, FONO_EMPLEADO, OBSERVACION_EMPLEADO, FECHA_CONTRATO, DIGITO_EMPLEADO, CARGO_EMPLEADO, formatFechaEmpleado, newEmpleado;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, RUT_EMPLEADO = _req$body.RUT_EMPLEADO, CODIGO_CUENTA = _req$body.CODIGO_CUENTA, NOMBRE_EMPLEADO = _req$body.NOMBRE_EMPLEADO, NOMBRE_EMPLEADO2 = _req$body.NOMBRE_EMPLEADO2, APELLIDO_EMPLEADO = _req$body.APELLIDO_EMPLEADO, APELLIDO_EMPLEADO2 = _req$body.APELLIDO_EMPLEADO2, DIRECCION_EMPLEADO = _req$body.DIRECCION_EMPLEADO, FONO_EMPLEADO = _req$body.FONO_EMPLEADO, OBSERVACION_EMPLEADO = _req$body.OBSERVACION_EMPLEADO, FECHA_CONTRATO = _req$body.FECHA_CONTRATO, DIGITO_EMPLEADO = _req$body.DIGITO_EMPLEADO, CARGO_EMPLEADO = _req$body.CARGO_EMPLEADO;
            formatFechaEmpleado = (0, _moment["default"])(FECHA_CONTRATO, "YYYY-MM-DD").format("YYYY-MM-DD");
            _context2.prev = 2;
            _context2.next = 5;
            return _Empleado["default"].create({
              RUT_EMPLEADO: RUT_EMPLEADO,
              CODIGO_CUENTA: CODIGO_CUENTA,
              NOMBRE_EMPLEADO: NOMBRE_EMPLEADO,
              NOMBRE_EMPLEADO2: NOMBRE_EMPLEADO2,
              APELLIDO_EMPLEADO: APELLIDO_EMPLEADO,
              APELLIDO_EMPLEADO2: APELLIDO_EMPLEADO2,
              DIRECCION_EMPLEADO: DIRECCION_EMPLEADO,
              FONO_EMPLEADO: FONO_EMPLEADO,
              OBSERVACION_EMPLEADO: OBSERVACION_EMPLEADO,
              FECHA_CONTRATO: new Date(formatFechaEmpleado),
              DIGITO_EMPLEADO: DIGITO_EMPLEADO,
              CARGO_EMPLEADO: CARGO_EMPLEADO
            }, {
              fields: ["RUT_EMPLEADO", "CODIGO_CUENTA", "NOMBRE_EMPLEADO", "NOMBRE_EMPLEADO2", "APELLIDO_EMPLEADO", "APELLIDO_EMPLEADO2", "DIRECCION_EMPLEADO", "FONO_EMPLEADO", "OBSERVACION_EMPLEADO", "FECHA_CONTRATO", "DIGITO_EMPLEADO", "CARGO_EMPLEADO"]
            });

          case 5:
            newEmpleado = _context2.sent;

            if (newEmpleado) {
              res.status(200).send({
                message: "Empleado registrado correctamente",
                data: newEmpleado
              });
            } else {
              res.status(400).send({
                message: "Ya esta registrado este Empleado",
                data: newEmpleado
              });
            }

            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            res.status(400).send({
              message: "Ya esta registrado este Empleado",
              data: []
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));
  return _addEmpleado.apply(this, arguments);
}

function updateEmpleado(_x5, _x6) {
  return _updateEmpleado.apply(this, arguments);
}

function _updateEmpleado() {
  _updateEmpleado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var rut, _req$body2, CODIGO_CUENTA, NOMBRE_EMPLEADO, NOMBRE_EMPLEADO2, APELLIDO_EMPLEADO, APELLIDO_EMPLEADO2, DIRECCION_EMPLEADO, FONO_EMPLEADO, OBSERVACION_EMPLEADO, FECHA_CONTRATO, DIGITO_EMPLEADO, CARGO_EMPLEADO, formatFechaEmpleado, empleado, empleadoUpdate;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            rut = req.params.rut;
            _req$body2 = req.body, CODIGO_CUENTA = _req$body2.CODIGO_CUENTA, NOMBRE_EMPLEADO = _req$body2.NOMBRE_EMPLEADO, NOMBRE_EMPLEADO2 = _req$body2.NOMBRE_EMPLEADO2, APELLIDO_EMPLEADO = _req$body2.APELLIDO_EMPLEADO, APELLIDO_EMPLEADO2 = _req$body2.APELLIDO_EMPLEADO2, DIRECCION_EMPLEADO = _req$body2.DIRECCION_EMPLEADO, FONO_EMPLEADO = _req$body2.FONO_EMPLEADO, OBSERVACION_EMPLEADO = _req$body2.OBSERVACION_EMPLEADO, FECHA_CONTRATO = _req$body2.FECHA_CONTRATO, DIGITO_EMPLEADO = _req$body2.DIGITO_EMPLEADO, CARGO_EMPLEADO = _req$body2.CARGO_EMPLEADO;
            formatFechaEmpleado = (0, _moment["default"])(FECHA_CONTRATO, "YYYY-MM-DD").format("YYYY-MM-DD");
            _context3.next = 5;
            return _Empleado["default"].findOne({
              where: {
                RUT_EMPLEADO: rut
              }
            });

          case 5:
            empleado = _context3.sent;

            if (!(empleado === null)) {
              _context3.next = 10;
              break;
            }

            res.status(200).json({
              message: "No se encuentra el registro de este empleado",
              data: []
            });
            _context3.next = 14;
            break;

          case 10:
            _context3.next = 12;
            return empleado.update({
              CODIGO_CUENTA: CODIGO_CUENTA,
              NOMBRE_EMPLEADO: NOMBRE_EMPLEADO,
              NOMBRE_EMPLEADO2: NOMBRE_EMPLEADO2,
              APELLIDO_EMPLEADO: APELLIDO_EMPLEADO,
              APELLIDO_EMPLEADO2: APELLIDO_EMPLEADO2,
              DIRECCION_EMPLEADO: DIRECCION_EMPLEADO,
              FONO_EMPLEADO: FONO_EMPLEADO,
              OBSERVACION_EMPLEADO: OBSERVACION_EMPLEADO,
              FECHA_CONTRATO: formatFechaEmpleado,
              DIGITO_EMPLEADO: DIGITO_EMPLEADO,
              CARGO_EMPLEADO: CARGO_EMPLEADO
            });

          case 12:
            empleadoUpdate = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              message: "Empleado actualizado correctamente",
              data: empleadoUpdate
            }));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateEmpleado.apply(this, arguments);
}

function deleteEmpleado(_x7, _x8) {
  return _deleteEmpleado.apply(this, arguments);
}

function _deleteEmpleado() {
  _deleteEmpleado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var rut, _deleteEmpleado2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            rut = req.params.rut;
            _context4.next = 4;
            return _Empleado["default"].destroy({
              where: {
                RUT_EMPLEADO: rut
              }
            });

          case 4:
            _deleteEmpleado2 = _context4.sent;

            if (!(_deleteEmpleado2 === 0)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "No se encuentra registrado este empleado",
              count: _deleteEmpleado2
            }));

          case 7:
            res.status(200).json({
              message: "Empleado eliminado correctamente",
              count: _deleteEmpleado2
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar este empleado",
              count: 0
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _deleteEmpleado.apply(this, arguments);
}