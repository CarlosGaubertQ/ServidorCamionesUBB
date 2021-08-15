"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChoferes = getChoferes;
exports.getChoferesByRut = getChoferesByRut;
exports.addChoferes = addChoferes;
exports.updateChofer = updateChofer;
exports.deleteChofer = deleteChofer;

var _Choferes = _interopRequireDefault(require("../models/Choferes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getChoferes(_x, _x2) {
  return _getChoferes.apply(this, arguments);
}

function _getChoferes() {
  _getChoferes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var choferes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Choferes["default"].findAll();

          case 3:
            choferes = _context.sent;
            res.status(200).json({
              data: choferes
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
  return _getChoferes.apply(this, arguments);
}

function getChoferesByRut(_x3, _x4) {
  return _getChoferesByRut.apply(this, arguments);
}

function _getChoferesByRut() {
  _getChoferesByRut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var rut, choferes;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            rut = req.params.rut;
            _context2.next = 4;
            return _Choferes["default"].findAll({
              where: {
                RUT_EMPLEADO: rut
              }
            });

          case 4:
            choferes = _context2.sent;
            res.status(200).json({
              data: choferes
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
  return _getChoferesByRut.apply(this, arguments);
}

function addChoferes(_x5, _x6) {
  return _addChoferes.apply(this, arguments);
}

function _addChoferes() {
  _addChoferes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, RUT_EMPLEADO, NRO_LICENCIA_CONDUCIR, CODIGO_CUENTA, NOMBRE_EMPLEADO, NOMBRE_EMPLEADO2, APELLIDO_EMPLEADO, APELLIDO_EMPLEADO2, DIRECCION_EMPLEADO, FONO_EMPLEADO, OBSERVAVION_EMPLEADO, FECHA_CONTRATO, CLASE_LICENCIA, OBSERVACION_CHOFERES, FECHA_CONTROL_LICENCIA, FECHA_NACIMIENTO, DIGITO_CONDUCTOR, PORCENTAJE_PARTICIPACION, newChofer;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, RUT_EMPLEADO = _req$body.RUT_EMPLEADO, NRO_LICENCIA_CONDUCIR = _req$body.NRO_LICENCIA_CONDUCIR, CODIGO_CUENTA = _req$body.CODIGO_CUENTA, NOMBRE_EMPLEADO = _req$body.NOMBRE_EMPLEADO, NOMBRE_EMPLEADO2 = _req$body.NOMBRE_EMPLEADO2, APELLIDO_EMPLEADO = _req$body.APELLIDO_EMPLEADO, APELLIDO_EMPLEADO2 = _req$body.APELLIDO_EMPLEADO2, DIRECCION_EMPLEADO = _req$body.DIRECCION_EMPLEADO, FONO_EMPLEADO = _req$body.FONO_EMPLEADO, OBSERVAVION_EMPLEADO = _req$body.OBSERVAVION_EMPLEADO, FECHA_CONTRATO = _req$body.FECHA_CONTRATO, CLASE_LICENCIA = _req$body.CLASE_LICENCIA, OBSERVACION_CHOFERES = _req$body.OBSERVACION_CHOFERES, FECHA_CONTROL_LICENCIA = _req$body.FECHA_CONTROL_LICENCIA, FECHA_NACIMIENTO = _req$body.FECHA_NACIMIENTO, DIGITO_CONDUCTOR = _req$body.DIGITO_CONDUCTOR, PORCENTAJE_PARTICIPACION = _req$body.PORCENTAJE_PARTICIPACION;
            _context3.prev = 1;
            _context3.next = 4;
            return _Choferes["default"].create({
              RUT_EMPLEADO: RUT_EMPLEADO,
              NRO_LICENCIA_CONDUCIR: NRO_LICENCIA_CONDUCIR,
              CODIGO_CUENTA: CODIGO_CUENTA,
              NOMBRE_EMPLEADO: NOMBRE_EMPLEADO,
              NOMBRE_EMPLEADO2: NOMBRE_EMPLEADO2,
              APELLIDO_EMPLEADO: APELLIDO_EMPLEADO,
              APELLIDO_EMPLEADO2: APELLIDO_EMPLEADO2,
              DIRECCION_EMPLEADO: DIRECCION_EMPLEADO,
              FONO_EMPLEADO: FONO_EMPLEADO,
              OBSERVAVION_EMPLEADO: OBSERVAVION_EMPLEADO,
              FECHA_CONTRATO: FECHA_CONTRATO,
              CLASE_LICENCIA: CLASE_LICENCIA,
              OBSERVACION_CHOFERES: OBSERVACION_CHOFERES,
              FECHA_CONTROL_LICENCIA: FECHA_CONTROL_LICENCIA,
              FECHA_NACIMIENTO: FECHA_NACIMIENTO,
              DIGITO_CONDUCTOR: DIGITO_CONDUCTOR,
              PORCENTAJE_PARTICIPACION: PORCENTAJE_PARTICIPACION
            }, {
              fields: ["RUT_EMPLEADO", "NRO_LICENCIA_CONDUCIR", "CODIGO_CUENTA", "NOMBRE_EMPLEADO", "NOMBRE_EMPLEADO2", "APELLIDO_EMPLEADO", "APELLIDO_EMPLEADO2", "DIRECCION_EMPLEADO", "FONO_EMPLEADO", "OBSERVAVION_EMPLEADO", "FECHA_CONTRATO", "CLASE_LICENCIA", "OBSERVACION_CHOFERES", "FECHA_CONTROL_LICENCIA", "FECHA_NACIMIENTO", "DIGITO_CONDUCTOR", "PORCENTAJE_PARTICIPACION"]
            });

          case 4:
            newChofer = _context3.sent;

            if (newChofer) {
              res.status(200).send({
                message: "Chofer registrado correctamente",
                data: newChofer
              });
            } else {
              res.status(500).send({
                message: "Ya esta registrado este chofer",
                data: newChofer
              });
            }

            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(400).send({
              message: "Ya esta registrado este camión",
              data: []
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _addChoferes.apply(this, arguments);
}

function updateChofer(_x7, _x8) {
  return _updateChofer.apply(this, arguments);
}

function _updateChofer() {
  _updateChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var rut, _req$body2, NRO_LICENCIA_CONDUCIR, CODIGO_CUENTA, NOMBRE_EMPLEADO, NOMBRE_EMPLEADO2, APELLIDO_EMPLEADO, APELLIDO_EMPLEADO2, DIRECCION_EMPLEADO, FONO_EMPLEADO, OBSERVAVION_EMPLEADO, FECHA_CONTRATO, CLASE_LICENCIA, OBSERVACION_CHOFERES, FECHA_CONTROL_LICENCIA, FECHA_NACIMIENTO, DIGITO_CONDUCTOR, PORCENTAJE_PARTICIPACION, chofer, choferUpdate;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            rut = req.params.rut;
            _req$body2 = req.body, NRO_LICENCIA_CONDUCIR = _req$body2.NRO_LICENCIA_CONDUCIR, CODIGO_CUENTA = _req$body2.CODIGO_CUENTA, NOMBRE_EMPLEADO = _req$body2.NOMBRE_EMPLEADO, NOMBRE_EMPLEADO2 = _req$body2.NOMBRE_EMPLEADO2, APELLIDO_EMPLEADO = _req$body2.APELLIDO_EMPLEADO, APELLIDO_EMPLEADO2 = _req$body2.APELLIDO_EMPLEADO2, DIRECCION_EMPLEADO = _req$body2.DIRECCION_EMPLEADO, FONO_EMPLEADO = _req$body2.FONO_EMPLEADO, OBSERVAVION_EMPLEADO = _req$body2.OBSERVAVION_EMPLEADO, FECHA_CONTRATO = _req$body2.FECHA_CONTRATO, CLASE_LICENCIA = _req$body2.CLASE_LICENCIA, OBSERVACION_CHOFERES = _req$body2.OBSERVACION_CHOFERES, FECHA_CONTROL_LICENCIA = _req$body2.FECHA_CONTROL_LICENCIA, FECHA_NACIMIENTO = _req$body2.FECHA_NACIMIENTO, DIGITO_CONDUCTOR = _req$body2.DIGITO_CONDUCTOR, PORCENTAJE_PARTICIPACION = _req$body2.PORCENTAJE_PARTICIPACION;
            _context4.next = 4;
            return _Choferes["default"].findOne({
              where: {
                RUT_EMPLEADO: rut
              }
            });

          case 4:
            chofer = _context4.sent;

            if (!(chofer === null)) {
              _context4.next = 9;
              break;
            }

            res.status(200).json({
              message: "No se encuentra el registro de este chofer",
              data: []
            });
            _context4.next = 13;
            break;

          case 9:
            _context4.next = 11;
            return chofer.update({
              NRO_LICENCIA_CONDUCIR: NRO_LICENCIA_CONDUCIR,
              CODIGO_CUENTA: CODIGO_CUENTA,
              NOMBRE_EMPLEADO: NOMBRE_EMPLEADO,
              NOMBRE_EMPLEADO2: NOMBRE_EMPLEADO2,
              APELLIDO_EMPLEADO: APELLIDO_EMPLEADO,
              APELLIDO_EMPLEADO2: APELLIDO_EMPLEADO2,
              DIRECCION_EMPLEADO: DIRECCION_EMPLEADO,
              FONO_EMPLEADO: FONO_EMPLEADO,
              OBSERVAVION_EMPLEADO: OBSERVAVION_EMPLEADO,
              FECHA_CONTRATO: FECHA_CONTRATO,
              CLASE_LICENCIA: CLASE_LICENCIA,
              OBSERVACION_CHOFERES: OBSERVACION_CHOFERES,
              FECHA_CONTROL_LICENCIA: FECHA_CONTROL_LICENCIA,
              FECHA_NACIMIENTO: FECHA_NACIMIENTO,
              DIGITO_CONDUCTOR: DIGITO_CONDUCTOR,
              PORCENTAJE_PARTICIPACION: PORCENTAJE_PARTICIPACION
            });

          case 11:
            choferUpdate = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              message: "Datos de chofer actualizado correctamente",
              data: choferUpdate
            }));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateChofer.apply(this, arguments);
}

function deleteChofer(_x9, _x10) {
  return _deleteChofer.apply(this, arguments);
}

function _deleteChofer() {
  _deleteChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var rut, _deleteChofer2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            rut = req.params.rut;
            _context5.next = 4;
            return _Choferes["default"].destroy({
              where: {
                RUT_EMPLEADO: rut
              }
            });

          case 4:
            _deleteChofer2 = _context5.sent;

            if (!(_deleteChofer2 === 0)) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              message: "No se encuentra registrado este chofer",
              count: _deleteChofer2
            }));

          case 7:
            res.status(200).json({
              message: "Chofer eliminado correctamente",
              count: _deleteChofer2
            });
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar este chofer",
              count: 0
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return _deleteChofer.apply(this, arguments);
}