"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCliente = getCliente;
exports.addCliente = addCliente;
exports.updateCliente = updateCliente;
exports.deleteCliente = deleteCliente;

var _Cliente = _interopRequireDefault(require("../models/Cliente"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCliente(_x, _x2) {
  return _getCliente.apply(this, arguments);
}

function _getCliente() {
  _getCliente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var cliente;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Cliente["default"].findAll();

          case 3:
            cliente = _context.sent;
            res.status(200).json({
              data: cliente
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
  return _getCliente.apply(this, arguments);
}

function addCliente(_x3, _x4) {
  return _addCliente.apply(this, arguments);
}

function _addCliente() {
  _addCliente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, CODIGO_CLIENTE, NOMBRE_CLIENTE, DIRECCION_CLIENTE, FAX_CLIENTE, FONO_CLIENTE, OBSERVACION_CLIENTE, GIRO_CLIENTE, DIGITO_CLIENTE, newCliente;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, CODIGO_CLIENTE = _req$body.CODIGO_CLIENTE, NOMBRE_CLIENTE = _req$body.NOMBRE_CLIENTE, DIRECCION_CLIENTE = _req$body.DIRECCION_CLIENTE, FAX_CLIENTE = _req$body.FAX_CLIENTE, FONO_CLIENTE = _req$body.FONO_CLIENTE, OBSERVACION_CLIENTE = _req$body.OBSERVACION_CLIENTE, GIRO_CLIENTE = _req$body.GIRO_CLIENTE, DIGITO_CLIENTE = _req$body.DIGITO_CLIENTE;
            _context2.prev = 1;
            _context2.next = 4;
            return _Cliente["default"].create({
              CODIGO_CLIENTE: CODIGO_CLIENTE,
              NOMBRE_CLIENTE: NOMBRE_CLIENTE,
              DIRECCION_CLIENTE: DIRECCION_CLIENTE,
              FAX_CLIENTE: FAX_CLIENTE,
              FONO_CLIENTE: FONO_CLIENTE,
              OBSERVACION_CLIENTE: OBSERVACION_CLIENTE,
              GIRO_CLIENTE: GIRO_CLIENTE,
              DIGITO_CLIENTE: DIGITO_CLIENTE
            }, {
              fields: ["CODIGO_CLIENTE", "NOMBRE_CLIENTE", "DIRECCION_CLIENTE", "FAX_CLIENTE", "FONO_CLIENTE", "OBSERVACION_CLIENTE", "GIRO_CLIENTE", "DIGITO_CLIENTE"]
            });

          case 4:
            newCliente = _context2.sent;

            if (newCliente) {
              res.status(200).send({
                message: "Cliente creado correctamente",
                data: newCliente
              });
            } else {
              res.status(500).send({
                message: "Ya esta registrado este cliente",
                data: newCliente
              });
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(400).send({
              message: "Ya esta registrado este cliente",
              data: []
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _addCliente.apply(this, arguments);
}

function updateCliente(_x5, _x6) {
  return _updateCliente.apply(this, arguments);
}

function _updateCliente() {
  _updateCliente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var rut, _req$body2, NOMBRE_CLIENTE, DIRECCION_CLIENTE, FAX_CLIENTE, FONO_CLIENTE, OBSERVACION_CLIENTE, GIRO_CLIENTE, cliente, clienteUpdate;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            rut = req.params.rut;
            _req$body2 = req.body, NOMBRE_CLIENTE = _req$body2.NOMBRE_CLIENTE, DIRECCION_CLIENTE = _req$body2.DIRECCION_CLIENTE, FAX_CLIENTE = _req$body2.FAX_CLIENTE, FONO_CLIENTE = _req$body2.FONO_CLIENTE, OBSERVACION_CLIENTE = _req$body2.OBSERVACION_CLIENTE, GIRO_CLIENTE = _req$body2.GIRO_CLIENTE;
            _context3.next = 4;
            return _Cliente["default"].findOne({
              where: {
                CODIGO_CLIENTE: rut
              }
            });

          case 4:
            cliente = _context3.sent;

            if (!(cliente === null)) {
              _context3.next = 9;
              break;
            }

            res.status(200).json({
              message: "No se encontro este cliente",
              data: []
            });
            _context3.next = 13;
            break;

          case 9:
            _context3.next = 11;
            return cliente.update({
              NOMBRE_CLIENTE: NOMBRE_CLIENTE,
              DIRECCION_CLIENTE: DIRECCION_CLIENTE,
              FAX_CLIENTE: FAX_CLIENTE,
              FONO_CLIENTE: FONO_CLIENTE,
              OBSERVACION_CLIENTE: OBSERVACION_CLIENTE,
              GIRO_CLIENTE: GIRO_CLIENTE
            });

          case 11:
            clienteUpdate = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              message: "Cliente ha sido actualizado correctamente",
              data: clienteUpdate
            }));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateCliente.apply(this, arguments);
}

function deleteCliente(_x7, _x8) {
  return _deleteCliente.apply(this, arguments);
}

function _deleteCliente() {
  _deleteCliente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var rut, _deleteCliente2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            rut = req.params.rut;
            _context4.prev = 1;
            _context4.next = 4;
            return _Cliente["default"].destroy({
              where: {
                CODIGO_CLIENTE: rut
              }
            });

          case 4:
            _deleteCliente2 = _context4.sent;

            if (!(_deleteCliente2 === 0)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "No existe este cliente",
              count: _deleteCliente2
            }));

          case 7:
            res.status(200).json({
              message: "Cliente eliminado correctamente",
              count: _deleteCliente2
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](1);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar este cliente",
              count: 0
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 10]]);
  }));
  return _deleteCliente.apply(this, arguments);
}