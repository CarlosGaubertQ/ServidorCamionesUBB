"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrograma = getPrograma;
exports.getCodigoViaje = getCodigoViaje;
exports.addPrograma = addPrograma;
exports.updatePrograma = updatePrograma;
exports.deletePrograma = deletePrograma;

var _Programa = _interopRequireDefault(require("../models/Programa"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPrograma(_x, _x2) {
  return _getPrograma.apply(this, arguments);
}

function _getPrograma() {
  _getPrograma = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var programa;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Programa["default"].findAll();

          case 3:
            programa = _context.sent;
            res.status(200).json({
              data: programa
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
  return _getPrograma.apply(this, arguments);
}

function getCodigoViaje(_x3, _x4) {
  return _getCodigoViaje.apply(this, arguments);
}

function _getCodigoViaje() {
  _getCodigoViaje = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var programa, _final;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Programa["default"].max('CODIGO_VIAJE');

          case 3:
            programa = _context2.sent;

            if (!isNaN(programa)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(200).json({
              data: 0
            }));

          case 6:
            _final = programa + 1;
            res.status(200).json({
              data: _final
            });
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).send({
              data: _context2.t0
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return _getCodigoViaje.apply(this, arguments);
}

function addPrograma(_x5, _x6) {
  return _addPrograma.apply(this, arguments);
}

function _addPrograma() {
  _addPrograma = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, PATENTE_CAMION, CODIGO_SERVICIO, RUT_EMPLEADO, PATENTE_CARRO, PARTIDA, LLEGADA, SECCION, CLIENTE, TIPO_CARGA_CARRO, TIPO_CARGA_CAMION, CANTIDAD_CARGA_CAMION, CANTIDAD_CARGA_CARRO, CODIGO_VIAJE, FECHA_VIAJE, HORA_SALIDA_VIAJE, PRODUCTO, HORA_LLEGADA_VIAJE, CODIGO_OBRA, Formula, Observacion, Viajerealizado, Num_PViaje, formatFecha, newPrograma;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, PATENTE_CAMION = _req$body.PATENTE_CAMION, CODIGO_SERVICIO = _req$body.CODIGO_SERVICIO, RUT_EMPLEADO = _req$body.RUT_EMPLEADO, PATENTE_CARRO = _req$body.PATENTE_CARRO, PARTIDA = _req$body.PARTIDA, LLEGADA = _req$body.LLEGADA, SECCION = _req$body.SECCION, CLIENTE = _req$body.CLIENTE, TIPO_CARGA_CARRO = _req$body.TIPO_CARGA_CARRO, TIPO_CARGA_CAMION = _req$body.TIPO_CARGA_CAMION, CANTIDAD_CARGA_CAMION = _req$body.CANTIDAD_CARGA_CAMION, CANTIDAD_CARGA_CARRO = _req$body.CANTIDAD_CARGA_CARRO, CODIGO_VIAJE = _req$body.CODIGO_VIAJE, FECHA_VIAJE = _req$body.FECHA_VIAJE, HORA_SALIDA_VIAJE = _req$body.HORA_SALIDA_VIAJE, PRODUCTO = _req$body.PRODUCTO, HORA_LLEGADA_VIAJE = _req$body.HORA_LLEGADA_VIAJE, CODIGO_OBRA = _req$body.CODIGO_OBRA, Formula = _req$body.Formula, Observacion = _req$body.Observacion, Viajerealizado = _req$body.Viajerealizado, Num_PViaje = _req$body.Num_PViaje;
            formatFecha = (0, _moment["default"])(FECHA_VIAJE, "YYYY-MM-DD").format("YYYY-MM-DD");
            _context3.prev = 2;
            _context3.next = 5;
            return _Programa["default"].create({
              PATENTE_CAMION: PATENTE_CAMION,
              CODIGO_SERVICIO: CODIGO_SERVICIO,
              RUT_EMPLEADO: RUT_EMPLEADO,
              PATENTE_CARRO: PATENTE_CARRO,
              PARTIDA: PARTIDA,
              LLEGADA: LLEGADA,
              SECCION: SECCION,
              CLIENTE: CLIENTE,
              TIPO_CARGA_CARRO: TIPO_CARGA_CARRO,
              TIPO_CARGA_CAMION: TIPO_CARGA_CAMION,
              CANTIDAD_CARGA_CAMION: CANTIDAD_CARGA_CAMION,
              CANTIDAD_CARGA_CARRO: CANTIDAD_CARGA_CARRO,
              CODIGO_VIAJE: CODIGO_VIAJE,
              FECHA_VIAJE: formatFecha,
              HORA_SALIDA_VIAJE: HORA_SALIDA_VIAJE,
              PRODUCTO: PRODUCTO,
              HORA_LLEGADA_VIAJE: HORA_LLEGADA_VIAJE,
              CODIGO_OBRA: CODIGO_OBRA,
              Formula: Formula,
              Observacion: Observacion,
              Viajerealizado: Viajerealizado,
              Num_PViaje: Num_PViaje
            }, {
              fields: ["PATENTE_CAMION", "CODIGO_SERVICIO", "RUT_EMPLEADO", "PATENTE_CARRO", "PARTIDA", "LLEGADA", "SECCION", "CLIENTE", "TIPO_CARGA_CARRO", "TIPO_CARGA_CAMION", "CANTIDAD_CARGA_CAMION", "CANTIDAD_CARGA_CARRO", "CODIGO_VIAJE", "FECHA_VIAJE", "HORA_SALIDA_VIAJE", "PRODUCTO", "HORA_LLEGADA_VIAJE", "CODIGO_OBRA", "Formula", "Observacion", "Viajerealizado", "Num_PViaje"]
            });

          case 5:
            newPrograma = _context3.sent;

            if (newPrograma) {
              res.status(200).send({
                message: "Programa de viaje registrado correctamente",
                data: newPrograma
              });
            } else {
              res.status(500).send({
                message: "Ya esta registrado este programa de viaje",
                data: newPrograma
              });
            }

            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            return _context3.abrupt("return", res.status(400).send({
              message: "Ya esta registrado este programa de viaje",
              data: []
            }));

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return _addPrograma.apply(this, arguments);
}

function updatePrograma(_x7, _x8) {
  return _updatePrograma.apply(this, arguments);
}

function _updatePrograma() {
  _updatePrograma = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$params, patente, viaje, fecha, hora, obra, _req$body2, CODIGO_SERVICIO, RUT_EMPLEADO, PATENTE_CARRO, PARTIDA, LLEGADA, SECCION, CLIENTE, TIPO_CARGA_CARRO, TIPO_CARGA_CAMION, CANTIDAD_CARGA_CAMION, CANTIDAD_CARGA_CARRO, PRODUCTO, HORA_LLEGADA_VIAJE, Formula, Observacion, Viajerealizado, Num_PViaje, programa, programaUpdate;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$params = req.params, patente = _req$params.patente, viaje = _req$params.viaje, fecha = _req$params.fecha, hora = _req$params.hora, obra = _req$params.obra;
            _req$body2 = req.body, CODIGO_SERVICIO = _req$body2.CODIGO_SERVICIO, RUT_EMPLEADO = _req$body2.RUT_EMPLEADO, PATENTE_CARRO = _req$body2.PATENTE_CARRO, PARTIDA = _req$body2.PARTIDA, LLEGADA = _req$body2.LLEGADA, SECCION = _req$body2.SECCION, CLIENTE = _req$body2.CLIENTE, TIPO_CARGA_CARRO = _req$body2.TIPO_CARGA_CARRO, TIPO_CARGA_CAMION = _req$body2.TIPO_CARGA_CAMION, CANTIDAD_CARGA_CAMION = _req$body2.CANTIDAD_CARGA_CAMION, CANTIDAD_CARGA_CARRO = _req$body2.CANTIDAD_CARGA_CARRO, PRODUCTO = _req$body2.PRODUCTO, HORA_LLEGADA_VIAJE = _req$body2.HORA_LLEGADA_VIAJE, Formula = _req$body2.Formula, Observacion = _req$body2.Observacion, Viajerealizado = _req$body2.Viajerealizado, Num_PViaje = _req$body2.Num_PViaje;
            _context4.next = 4;
            return _Programa["default"].findOne({
              where: {
                PATENTE_CAMION: patente,
                CODIGO_VIAJE: viaje,
                FECHA_VIAJE: fecha,
                HORA_SALIDA_VIAJE: hora,
                CODIGO_OBRA: obra
              }
            });

          case 4:
            programa = _context4.sent;

            if (!(programa === null)) {
              _context4.next = 9;
              break;
            }

            res.status(400).json({
              message: "No se encontro este programa de viaje",
              data: []
            });
            _context4.next = 13;
            break;

          case 9:
            _context4.next = 11;
            return programa.update({
              CODIGO_SERVICIO: CODIGO_SERVICIO,
              RUT_EMPLEADO: RUT_EMPLEADO,
              PATENTE_CARRO: PATENTE_CARRO,
              PARTIDA: PARTIDA,
              LLEGADA: LLEGADA,
              SECCION: SECCION,
              CLIENTE: CLIENTE,
              TIPO_CARGA_CARRO: TIPO_CARGA_CARRO,
              TIPO_CARGA_CAMION: TIPO_CARGA_CAMION,
              CANTIDAD_CARGA_CAMION: CANTIDAD_CARGA_CAMION,
              CANTIDAD_CARGA_CARRO: CANTIDAD_CARGA_CARRO,
              PRODUCTO: PRODUCTO,
              HORA_LLEGADA_VIAJE: HORA_LLEGADA_VIAJE,
              Formula: Formula,
              Observacion: Observacion,
              Viajerealizado: Viajerealizado,
              Num_PViaje: Num_PViaje
            });

          case 11:
            programaUpdate = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              message: "Programa de viaje actualizado correctamente",
              data: programaUpdate
            }));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updatePrograma.apply(this, arguments);
}

function deletePrograma(_x9, _x10) {
  return _deletePrograma.apply(this, arguments);
}

function _deletePrograma() {
  _deletePrograma = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$params2, patente, viaje, fecha, hora, obra, _deletePrograma2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$params2 = req.params, patente = _req$params2.patente, viaje = _req$params2.viaje, fecha = _req$params2.fecha, hora = _req$params2.hora, obra = _req$params2.obra;
            _context5.next = 4;
            return _Programa["default"].destroy({
              where: {
                PATENTE_CAMION: patente,
                CODIGO_VIAJE: viaje,
                FECHA_VIAJE: fecha,
                HORA_SALIDA_VIAJE: hora,
                CODIGO_OBRA: obra
              }
            });

          case 4:
            _deletePrograma2 = _context5.sent;

            if (!(_deletePrograma2 === 0)) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              message: "No se encontro este programa de viaje",
              count: _deletePrograma2
            }));

          case 7:
            res.status(200).json({
              message: "Programa de viaje eliminado correctamente",
              count: _deletePrograma2
            });
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar este programa de viaje",
              count: 0
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return _deletePrograma.apply(this, arguments);
}