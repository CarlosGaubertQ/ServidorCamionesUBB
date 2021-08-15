"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHistoriaChofer = getHistoriaChofer;
exports.getHistoriaChoferByChofer = getHistoriaChoferByChofer;
exports.getHistoriaChoferByChoferFecha = getHistoriaChoferByChoferFecha;
exports.addHistoriaChofer = addHistoriaChofer;
exports.updateHistoriaChofer = updateHistoriaChofer;
exports.deleteHistoriaChofer = deleteHistoriaChofer;

var _HistoriaChofer = _interopRequireDefault(require("../models/HistoriaChofer"));

var _moment = _interopRequireDefault(require("moment"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getHistoriaChofer(_x, _x2) {
  return _getHistoriaChofer.apply(this, arguments);
}

function _getHistoriaChofer() {
  _getHistoriaChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var historiaChoferes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _HistoriaChofer["default"].findAll();

          case 3:
            historiaChoferes = _context.sent;
            res.status(200).json({
              data: historiaChoferes
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
  return _getHistoriaChofer.apply(this, arguments);
}

function getHistoriaChoferByChofer(_x3, _x4) {
  return _getHistoriaChoferByChofer.apply(this, arguments);
}

function _getHistoriaChoferByChofer() {
  _getHistoriaChoferByChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var rut, historiaChoferes;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            rut = req.params.rut;
            _context2.next = 4;
            return _HistoriaChofer["default"].findAll({
              attributes: [[_sequelize["default"].fn("DISTINCT", _sequelize["default"].col("FECHA_EVENTO")), "FECHA_EVENTO"]],
              where: {
                RUT_EMPLEADO: rut
              }
            });

          case 4:
            historiaChoferes = _context2.sent;
            res.status(200).json({
              data: historiaChoferes
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
  return _getHistoriaChoferByChofer.apply(this, arguments);
}

function getHistoriaChoferByChoferFecha(_x5, _x6) {
  return _getHistoriaChoferByChoferFecha.apply(this, arguments);
}

function _getHistoriaChoferByChoferFecha() {
  _getHistoriaChoferByChoferFecha = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$params, rut, fecha, formatFechaEvento, historiaChoferes;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$params = req.params, rut = _req$params.rut, fecha = _req$params.fecha;
            formatFechaEvento = (0, _moment["default"])(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
            _context3.next = 5;
            return _HistoriaChofer["default"].findAll({
              where: {
                RUT_EMPLEADO: rut,
                FECHA_EVENTO: new Date(formatFechaEvento)
              }
            });

          case 5:
            historiaChoferes = _context3.sent;
            res.status(200).json({
              data: historiaChoferes
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            res.status(500).send({
              data: _context3.t0
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return _getHistoriaChoferByChoferFecha.apply(this, arguments);
}

function addHistoriaChofer(_x7, _x8) {
  return _addHistoriaChofer.apply(this, arguments);
}

function _addHistoriaChofer() {
  _addHistoriaChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, CODIGO_EVENTO, RUT_EMPLEADO, OBSERVACION_HISTORIAL, FECHA_EVENTO, HORA_EVENTO, COSTO_EVENTO, FINALIZACION_EVENTO, QUIEN_PAGA, CAMION_EVENTO, Nombre_Empleado, DIGITO_conductor, formatHora, formatFechaEvento, formatFechaFinalizacion, newHistoriaChofer;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, CODIGO_EVENTO = _req$body.CODIGO_EVENTO, RUT_EMPLEADO = _req$body.RUT_EMPLEADO, OBSERVACION_HISTORIAL = _req$body.OBSERVACION_HISTORIAL, FECHA_EVENTO = _req$body.FECHA_EVENTO, HORA_EVENTO = _req$body.HORA_EVENTO, COSTO_EVENTO = _req$body.COSTO_EVENTO, FINALIZACION_EVENTO = _req$body.FINALIZACION_EVENTO, QUIEN_PAGA = _req$body.QUIEN_PAGA, CAMION_EVENTO = _req$body.CAMION_EVENTO, Nombre_Empleado = _req$body.Nombre_Empleado, DIGITO_conductor = _req$body.DIGITO_conductor;
            formatHora = (0, _moment["default"])(HORA_EVENTO, "hh:mm:ss").format("hh:mm:ss");
            formatFechaEvento = (0, _moment["default"])(FECHA_EVENTO, "YYYY-MM-DD").format("YYYY-MM-DD");
            formatFechaFinalizacion = (0, _moment["default"])(FINALIZACION_EVENTO, "YYYY-MM-DD").format("YYYY-MM-DD");
            _context4.prev = 4;
            _context4.next = 7;
            return _HistoriaChofer["default"].create({
              CODIGO_EVENTO: CODIGO_EVENTO,
              RUT_EMPLEADO: RUT_EMPLEADO,
              OBSERVACION_HISTORIAL: OBSERVACION_HISTORIAL,
              FECHA_EVENTO: new Date(formatFechaEvento),
              HORA_EVENTO: formatHora,
              COSTO_EVENTO: COSTO_EVENTO,
              FINALIZACION_EVENTO: new Date(formatFechaFinalizacion),
              QUIEN_PAGA: QUIEN_PAGA,
              CAMION_EVENTO: CAMION_EVENTO,
              Nombre_Empleado: Nombre_Empleado,
              DIGITO_conductor: DIGITO_conductor
            }, {
              fields: ["CODIGO_EVENTO", "RUT_EMPLEADO", "OBSERVACION_HISTORIAL", "FECHA_EVENTO", "HORA_EVENTO", "COSTO_EVENTO", "FINALIZACION_EVENTO", "QUIEN_PAGA", "CAMION_EVENTO", "Nombre_Empleado", "DIGITO_conductor"]
            });

          case 7:
            newHistoriaChofer = _context4.sent;

            if (newHistoriaChofer) {
              res.status(200).send({
                message: "Evento chofer registrado correctamente",
                data: newHistoriaChofer
              });
            } else {
              res.status(400).send({
                message: "Ya esta registrado este evento",
                data: newHistoriaChofer
              });
            }

            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](4);
            console.log(_context4.t0);
            res.status(400).send({
              message: "Ya esta registrado este evento",
              data: []
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 11]]);
  }));
  return _addHistoriaChofer.apply(this, arguments);
}

function updateHistoriaChofer(_x9, _x10) {
  return _updateHistoriaChofer.apply(this, arguments);
}

function _updateHistoriaChofer() {
  _updateHistoriaChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$params2, rut, fecha, hora, _req$body2, CODIGO_EVENTO, OBSERVACION_HISTORIAL, COSTO_EVENTO, FINALIZACION_EVENTO, QUIEN_PAGA, CAMION_EVENTO, formatFechaEvento, formatFechaEventoFinaliza, historiaChofer, historiaChoferUpdate;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$params2 = req.params, rut = _req$params2.rut, fecha = _req$params2.fecha, hora = _req$params2.hora;
            _req$body2 = req.body, CODIGO_EVENTO = _req$body2.CODIGO_EVENTO, OBSERVACION_HISTORIAL = _req$body2.OBSERVACION_HISTORIAL, COSTO_EVENTO = _req$body2.COSTO_EVENTO, FINALIZACION_EVENTO = _req$body2.FINALIZACION_EVENTO, QUIEN_PAGA = _req$body2.QUIEN_PAGA, CAMION_EVENTO = _req$body2.CAMION_EVENTO;
            console.log(req.body);
            formatFechaEvento = (0, _moment["default"])(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
            formatFechaEventoFinaliza = (0, _moment["default"])(FINALIZACION_EVENTO, "DD-MM-YYYY").format("YYYY-MM-DD");
            _context5.next = 7;
            return _HistoriaChofer["default"].findOne({
              where: {
                RUT_EMPLEADO: rut,
                FECHA_EVENTO: new Date(formatFechaEvento),
                HORA_EVENTO: hora
              }
            });

          case 7:
            historiaChofer = _context5.sent;

            if (!(historiaChofer === null)) {
              _context5.next = 12;
              break;
            }

            res.status(200).json({
              message: "No se encuentra el registro de este evento",
              data: []
            });
            _context5.next = 16;
            break;

          case 12:
            _context5.next = 14;
            return historiaChofer.update({
              CODIGO_EVENTO: CODIGO_EVENTO,
              OBSERVACION_HISTORIAL: OBSERVACION_HISTORIAL,
              COSTO_EVENTO: COSTO_EVENTO,
              FINALIZACION_EVENTO: new Date(formatFechaEventoFinaliza),
              QUIEN_PAGA: QUIEN_PAGA,
              CAMION_EVENTO: CAMION_EVENTO
            });

          case 14:
            historiaChoferUpdate = _context5.sent;
            return _context5.abrupt("return", res.status(200).json({
              message: "Datos de evento fueron actualizado correctamente",
              data: historiaChoferUpdate
            }));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateHistoriaChofer.apply(this, arguments);
}

function deleteHistoriaChofer(_x11, _x12) {
  return _deleteHistoriaChofer.apply(this, arguments);
}

function _deleteHistoriaChofer() {
  _deleteHistoriaChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$params3, rut, fecha, hora, formatFechaEvento, _deleteHistoriaChofer2;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$params3 = req.params, rut = _req$params3.rut, fecha = _req$params3.fecha, hora = _req$params3.hora;
            formatFechaEvento = (0, _moment["default"])(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
            _context6.next = 5;
            return _HistoriaChofer["default"].destroy({
              where: {
                RUT_EMPLEADO: rut,
                FECHA_EVENTO: new Date(formatFechaEvento),
                HORA_EVENTO: hora
              }
            });

          case 5:
            _deleteHistoriaChofer2 = _context6.sent;

            if (!(_deleteHistoriaChofer2 === 0)) {
              _context6.next = 8;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              message: "No se encuentra registrado este evento",
              count: _deleteHistoriaChofer2
            }));

          case 8:
            res.status(200).json({
              message: "Evento eliminado correctamente",
              count: _deleteHistoriaChofer2
            });
            _context6.next = 14;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar este evento",
              count: 0
            });

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 11]]);
  }));
  return _deleteHistoriaChofer.apply(this, arguments);
}