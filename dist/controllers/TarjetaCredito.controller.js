"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTarjetaCredito = getTarjetaCredito;
exports.addTarjetaCredito = addTarjetaCredito;
exports.updateTarjetaCredito = updateTarjetaCredito;
exports.deleteTarjetaCredito = deleteTarjetaCredito;

var _TarjetaDeCredito = _interopRequireDefault(require("../models/TarjetaDeCredito"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTarjetaCredito(_x, _x2) {
  return _getTarjetaCredito.apply(this, arguments);
}

function _getTarjetaCredito() {
  _getTarjetaCredito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var tarjetaCredito;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _TarjetaDeCredito["default"].findAll();

          case 3:
            tarjetaCredito = _context.sent;
            res.status(200).json({
              data: tarjetaCredito
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
  return _getTarjetaCredito.apply(this, arguments);
}

function addTarjetaCredito(_x3, _x4) {
  return _addTarjetaCredito.apply(this, arguments);
}

function _addTarjetaCredito() {
  _addTarjetaCredito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, CODIGO_TARJETA, TOPE_TARJETA, ESTADO_TARJETA, RUT_EMPLEADO, newTarjetaCredito;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, CODIGO_TARJETA = _req$body.CODIGO_TARJETA, TOPE_TARJETA = _req$body.TOPE_TARJETA, ESTADO_TARJETA = _req$body.ESTADO_TARJETA, RUT_EMPLEADO = _req$body.RUT_EMPLEADO;
            _context2.prev = 1;
            _context2.next = 4;
            return _TarjetaDeCredito["default"].create({
              CODIGO_TARJETA: CODIGO_TARJETA,
              TOPE_TARJETA: TOPE_TARJETA,
              ESTADO_TARJETA: ESTADO_TARJETA,
              RUT_EMPLEADO: RUT_EMPLEADO
            }, {
              fields: ["CODIGO_TARJETA", "TOPE_TARJETA", "ESTADO_TARJETA", "RUT_EMPLEADO"]
            });

          case 4:
            newTarjetaCredito = _context2.sent;

            if (newTarjetaCredito) {
              res.status(200).send({
                message: "Tarjeta de credito agregado correctamente",
                data: newTarjetaCredito
              });
            } else {
              res.status(500).send({
                message: "Ya existe esta tarjeta de credito en la base de datos",
                data: newTarjetaCredito
              });
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(500).send({
              message: "Ya existe esta tarjeta de credito en la base de datos",
              data: [_context2.t0]
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _addTarjetaCredito.apply(this, arguments);
}

function updateTarjetaCredito(_x5, _x6) {
  return _updateTarjetaCredito.apply(this, arguments);
}

function _updateTarjetaCredito() {
  _updateTarjetaCredito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var codigo, _req$body2, TOPE_TARJETA, ESTADO_TARJETA, RUT_EMPLEADO, tarjetaCredito, tarjetaCreditoUpdate;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            codigo = req.params.codigo;
            _req$body2 = req.body, TOPE_TARJETA = _req$body2.TOPE_TARJETA, ESTADO_TARJETA = _req$body2.ESTADO_TARJETA, RUT_EMPLEADO = _req$body2.RUT_EMPLEADO;
            _context3.next = 4;
            return _TarjetaDeCredito["default"].findOne({
              where: {
                CODIGO_TARJETA: codigo
              }
            });

          case 4:
            tarjetaCredito = _context3.sent;

            if (!(tarjetaCredito === null)) {
              _context3.next = 9;
              break;
            }

            res.status(400).json({
              message: "No se encontro esta tarjeta de credito",
              data: []
            });
            _context3.next = 13;
            break;

          case 9:
            _context3.next = 11;
            return tarjetaCredito.update({
              TOPE_TARJETA: TOPE_TARJETA,
              ESTADO_TARJETA: ESTADO_TARJETA,
              RUT_EMPLEADO: RUT_EMPLEADO
            });

          case 11:
            tarjetaCreditoUpdate = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              message: "Tarjeta de credito actualizada correctamente",
              data: tarjetaCreditoUpdate
            }));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateTarjetaCredito.apply(this, arguments);
}

function deleteTarjetaCredito(_x7, _x8) {
  return _deleteTarjetaCredito.apply(this, arguments);
}

function _deleteTarjetaCredito() {
  _deleteTarjetaCredito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var codigo, _deleteTarjetaCredito2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            codigo = req.params.codigo;
            _context4.next = 4;
            return _TarjetaDeCredito["default"].destroy({
              where: {
                CODIGO_TARJETA: codigo
              }
            });

          case 4:
            _deleteTarjetaCredito2 = _context4.sent;

            if (!(_deleteTarjetaCredito2 === 0)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "No se encontro esta tarjeta de credito",
              count: _deleteTarjetaCredito2
            }));

          case 7:
            res.status(200).json({
              message: "Tarjeta de credito eliminada correctamente",
              count: _deleteTarjetaCredito2
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar esta tarjeta de credito",
              count: 0
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _deleteTarjetaCredito.apply(this, arguments);
}