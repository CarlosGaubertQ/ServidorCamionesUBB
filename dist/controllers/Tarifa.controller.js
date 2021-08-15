"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTarifa = getTarifa;
exports.getTarifaByClienteUM = getTarifaByClienteUM;
exports.addTarifa = addTarifa;
exports.updateTarifa = updateTarifa;
exports.deleteTarifa = deleteTarifa;

var _Tarifa = _interopRequireDefault(require("../models/Tarifa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTarifa(_x, _x2) {
  return _getTarifa.apply(this, arguments);
}

function _getTarifa() {
  _getTarifa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var tarifa;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Tarifa["default"].findAll({});

          case 3:
            tarifa = _context.sent;
            res.status(200).json({
              data: tarifa
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
  return _getTarifa.apply(this, arguments);
}

function getTarifaByClienteUM(_x3, _x4) {
  return _getTarifaByClienteUM.apply(this, arguments);
}

function _getTarifaByClienteUM() {
  _getTarifaByClienteUM = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$params, codigo, um, tarifa;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$params = req.params, codigo = _req$params.codigo, um = _req$params.um;
            _context2.prev = 1;
            _context2.next = 4;
            return _Tarifa["default"].findAll({
              where: {
                Codigo_Cliente: codigo,
                U_M_tarifa: um
              }
            });

          case 4:
            tarifa = _context2.sent;
            res.status(200).json({
              data: tarifa
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
  return _getTarifaByClienteUM.apply(this, arguments);
}

function addTarifa(_x5, _x6) {
  return _addTarifa.apply(this, arguments);
}

function _addTarifa() {
  _addTarifa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, Codigo_Cliente, U_M_tarifa, Tari, newTarifa;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, Codigo_Cliente = _req$body.Codigo_Cliente, U_M_tarifa = _req$body.U_M_tarifa, Tari = _req$body.Tari;
            _context3.prev = 1;
            _context3.next = 4;
            return _Tarifa["default"].create({
              Codigo_Cliente: Codigo_Cliente,
              U_M_tarifa: U_M_tarifa,
              Tarifa: Tari
            }, {
              fields: ["Codigo_Cliente", "U_M_tarifa", "Tarifa"]
            });

          case 4:
            newTarifa = _context3.sent;

            if (newTarifa) {
              res.status(200).send({
                message: "Tarifa registrada correctamente",
                data: newTarifa
              });
            } else {
              res.status(400).send({
                message: "Ya esta registrado esta tarifa",
                data: newTarifa
              });
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(400).send({
              message: "Ya esta registrado esta tarifa",
              data: []
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _addTarifa.apply(this, arguments);
}

function updateTarifa(_x7, _x8) {
  return _updateTarifa.apply(this, arguments);
}

function _updateTarifa() {
  _updateTarifa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$params2, cliente, um, Tari, tarifa, tarifaUpdate;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$params2 = req.params, cliente = _req$params2.cliente, um = _req$params2.um;
            Tari = req.body.Tari;
            _context4.prev = 2;
            _context4.next = 5;
            return _Tarifa["default"].findOne({
              where: {
                Codigo_Cliente: cliente,
                U_M_tarifa: um
              }
            });

          case 5:
            tarifa = _context4.sent;

            if (!(tarifa === null)) {
              _context4.next = 10;
              break;
            }

            res.status(400).json({
              message: "No se encuentra el registro de esta tarifa",
              data: []
            });
            _context4.next = 14;
            break;

          case 10:
            _context4.next = 12;
            return tarifa.update({
              Tarifa: Tari
            });

          case 12:
            tarifaUpdate = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              message: "Tarifa actualizada correctamente",
              data: tarifaUpdate
            }));

          case 14:
            _context4.next = 20;
            break;

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(400).json({
              message: "Ocurrio un error",
              data: _context4.t0
            }));

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 16]]);
  }));
  return _updateTarifa.apply(this, arguments);
}

function deleteTarifa(_x9, _x10) {
  return _deleteTarifa.apply(this, arguments);
}

function _deleteTarifa() {
  _deleteTarifa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$params3, cliente, um, _deleteTarifa2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$params3 = req.params, cliente = _req$params3.cliente, um = _req$params3.um;
            _context5.next = 4;
            return _Tarifa["default"].destroy({
              where: {
                Codigo_Cliente: cliente,
                U_M_tarifa: um
              }
            });

          case 4:
            _deleteTarifa2 = _context5.sent;

            if (!(_deleteTarifa2 === 0)) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              message: "No se encuentra registrado esta tarifa",
              count: _deleteTarifa2
            }));

          case 7:
            res.status(200).json({
              message: "Tarifa eliminada correctamente",
              count: _deleteTarifa2
            });
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar esta tarifa",
              count: 0
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return _deleteTarifa.apply(this, arguments);
}