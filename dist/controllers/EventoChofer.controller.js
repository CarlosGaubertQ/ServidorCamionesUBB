"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventoChofer = getEventoChofer;
exports.addEventoChofer = addEventoChofer;
exports.updateEventoChofer = updateEventoChofer;
exports.deleteEventoChofer = deleteEventoChofer;

var _EventoChofer = _interopRequireDefault(require("../models/EventoChofer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getEventoChofer(_x, _x2) {
  return _getEventoChofer.apply(this, arguments);
}

function _getEventoChofer() {
  _getEventoChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var eventoChoferes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _EventoChofer["default"].findAll();

          case 3:
            eventoChoferes = _context.sent;
            res.status(200).json({
              data: eventoChoferes
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
  return _getEventoChofer.apply(this, arguments);
}

function addEventoChofer(_x3, _x4) {
  return _addEventoChofer.apply(this, arguments);
}

function _addEventoChofer() {
  _addEventoChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var DESCRIPCION_EVENTO, newEventoChofer;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            DESCRIPCION_EVENTO = req.body.DESCRIPCION_EVENTO;
            _context2.prev = 1;
            _context2.next = 4;
            return _EventoChofer["default"].create({
              DESCRIPCION_EVENTO: DESCRIPCION_EVENTO
            }, {
              fields: ["DESCRIPCION_EVENTO"]
            });

          case 4:
            newEventoChofer = _context2.sent;

            if (newEventoChofer) {
              res.status(200).send({
                message: "Evento chofer registrado correctamente",
                data: newEventoChofer
              });
            } else {
              res.status(400).send({
                message: "Ya esta registrado este evento",
                data: newEventoChofer
              });
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(400).send({
              message: "Ya esta registrado este evento",
              data: []
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _addEventoChofer.apply(this, arguments);
}

function updateEventoChofer(_x5, _x6) {
  return _updateEventoChofer.apply(this, arguments);
}

function _updateEventoChofer() {
  _updateEventoChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var codigo, DESCRIPCION_EVENTO, eventoChofer, eventoChoferUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            codigo = req.params.codigo;
            DESCRIPCION_EVENTO = req.body.DESCRIPCION_EVENTO;
            _context3.next = 4;
            return _EventoChofer["default"].findOne({
              where: {
                CODIGO_EVENTO: codigo
              }
            });

          case 4:
            eventoChofer = _context3.sent;

            if (!(eventoChofer === null)) {
              _context3.next = 9;
              break;
            }

            res.status(200).json({
              message: "No se encuentra el registro de este evento",
              data: []
            });
            _context3.next = 13;
            break;

          case 9:
            _context3.next = 11;
            return eventoChofer.update({
              DESCRIPCION_EVENTO: DESCRIPCION_EVENTO
            });

          case 11:
            eventoChoferUpdate = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              message: "Datos de evento chofer actualizado correctamente",
              data: eventoChoferUpdate
            }));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateEventoChofer.apply(this, arguments);
}

function deleteEventoChofer(_x7, _x8) {
  return _deleteEventoChofer.apply(this, arguments);
}

function _deleteEventoChofer() {
  _deleteEventoChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var codigo, _deleteEventoChofer2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            codigo = req.params.codigo;
            _context4.next = 4;
            return _EventoChofer["default"].destroy({
              where: {
                CODIGO_EVENTO: codigo
              }
            });

          case 4:
            _deleteEventoChofer2 = _context4.sent;

            if (!(_deleteEventoChofer2 === 0)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "No se encuentra registrado este tipo de eveto",
              count: _deleteEventoChofer2
            }));

          case 7:
            res.status(200).json({
              message: "Tipo evento eliminado correctamente",
              count: _deleteEventoChofer2
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar este evento chofer",
              count: 0
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _deleteEventoChofer.apply(this, arguments);
}