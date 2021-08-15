"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRecorrido = getRecorrido;
exports.getRecorridoByOrigen = getRecorridoByOrigen;
exports.getRecorridoByOrigenSeccion = getRecorridoByOrigenSeccion;
exports.addRecorrido = addRecorrido;
exports.updateRecorrido = updateRecorrido;
exports.deleteRecorrido = deleteRecorrido;

var _Recorrido = _interopRequireDefault(require("../models/Recorrido"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getRecorrido(_x, _x2) {
  return _getRecorrido.apply(this, arguments);
}

function _getRecorrido() {
  _getRecorrido = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var recorrido;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Recorrido["default"].findAll({
              attributes: [[_sequelize["default"].fn("DISTINCT", _sequelize["default"].col("Origen")), "Origen"]]
            });

          case 3:
            recorrido = _context.sent;
            res.status(200).json({
              data: recorrido
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
  return _getRecorrido.apply(this, arguments);
}

function getRecorridoByOrigen(_x3, _x4) {
  return _getRecorridoByOrigen.apply(this, arguments);
}

function _getRecorridoByOrigen() {
  _getRecorridoByOrigen = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var origen, recorrido;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            origen = req.params.origen;
            _context2.prev = 1;
            _context2.next = 4;
            return _Recorrido["default"].findAll({
              attributes: [[_sequelize["default"].fn("DISTINCT", _sequelize["default"].col("Seccion")), "Seccion"]],
              where: {
                Origen: origen
              }
            });

          case 4:
            recorrido = _context2.sent;
            res.status(200).json({
              data: recorrido
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
  return _getRecorridoByOrigen.apply(this, arguments);
}

function getRecorridoByOrigenSeccion(_x5, _x6) {
  return _getRecorridoByOrigenSeccion.apply(this, arguments);
}

function _getRecorridoByOrigenSeccion() {
  _getRecorridoByOrigenSeccion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$params, origen, seccion, recorrido;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$params = req.params, origen = _req$params.origen, seccion = _req$params.seccion;
            _context3.prev = 1;
            _context3.next = 4;
            return _Recorrido["default"].findAll({
              attributes: [[_sequelize["default"].fn("DISTINCT", _sequelize["default"].col("Destino")), "Destino"], "Origen", "Seccion", "Km_Ripio", "Km_Pavimento", "Total_Km", "Formula", "Observacion"],
              where: {
                Origen: origen,
                Seccion: seccion
              }
            });

          case 4:
            recorrido = _context3.sent;
            res.status(200).json({
              data: recorrido
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.status(500).send({
              data: _context3.t0
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getRecorridoByOrigenSeccion.apply(this, arguments);
}

function addRecorrido(_x7, _x8) {
  return _addRecorrido.apply(this, arguments);
}

function _addRecorrido() {
  _addRecorrido = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, Origen, Destino, Seccion, Km_Ripio, Km_Pavimento, Total_Km, Formula, Observacion, newRecorrido;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, Origen = _req$body.Origen, Destino = _req$body.Destino, Seccion = _req$body.Seccion, Km_Ripio = _req$body.Km_Ripio, Km_Pavimento = _req$body.Km_Pavimento, Total_Km = _req$body.Total_Km, Formula = _req$body.Formula, Observacion = _req$body.Observacion;
            _context4.prev = 1;
            _context4.next = 4;
            return _Recorrido["default"].create({
              Origen: Origen,
              Destino: Destino,
              Seccion: Seccion,
              Km_Ripio: Km_Ripio,
              Km_Pavimento: Km_Pavimento,
              Total_Km: Total_Km,
              Formula: Formula,
              Observacion: Observacion
            }, {
              fields: ["Origen", "Destino", "Seccion", "Km_Ripio", "Km_Pavimento", "Total_Km", "Formula", "Observacion"]
            });

          case 4:
            newRecorrido = _context4.sent;

            if (newRecorrido) {
              res.status(200).send({
                message: "Recorrido registrado correctamente",
                data: newRecorrido
              });
            } else {
              res.status(400).send({
                message: "Ya esta registrado este recorrido",
                data: newRecorrido
              });
            }

            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            res.status(400).send({
              message: "Ya esta registrado este recorrido",
              data: []
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _addRecorrido.apply(this, arguments);
}

function updateRecorrido(_x9, _x10) {
  return _updateRecorrido.apply(this, arguments);
}

function _updateRecorrido() {
  _updateRecorrido = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$params2, origen, destino, seccion, _req$body2, Km_Ripio, Km_Pavimento, Total_Km, Formula, Observacion, recorrido, recorridoUpdate;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$params2 = req.params, origen = _req$params2.origen, destino = _req$params2.destino, seccion = _req$params2.seccion;
            _req$body2 = req.body, Km_Ripio = _req$body2.Km_Ripio, Km_Pavimento = _req$body2.Km_Pavimento, Total_Km = _req$body2.Total_Km, Formula = _req$body2.Formula, Observacion = _req$body2.Observacion;
            _context5.prev = 2;
            _context5.next = 5;
            return _Recorrido["default"].findOne({
              where: {
                Origen: origen,
                Destino: destino,
                Seccion: seccion
              }
            });

          case 5:
            recorrido = _context5.sent;

            if (!(recorrido === null)) {
              _context5.next = 10;
              break;
            }

            res.status(400).json({
              message: "No se encuentra el registro de este recorrido",
              data: []
            });
            _context5.next = 14;
            break;

          case 10:
            _context5.next = 12;
            return recorrido.update({
              Km_Ripio: Km_Ripio,
              Km_Pavimento: Km_Pavimento,
              Total_Km: Total_Km,
              Formula: Formula,
              Observacion: Observacion
            });

          case 12:
            recorridoUpdate = _context5.sent;
            return _context5.abrupt("return", res.status(200).json({
              message: "Recorrido actualizado correctamente",
              data: recorridoUpdate
            }));

          case 14:
            _context5.next = 20;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(400).json({
              message: "Ocurrio un error",
              data: _context5.t0
            }));

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 16]]);
  }));
  return _updateRecorrido.apply(this, arguments);
}

function deleteRecorrido(_x11, _x12) {
  return _deleteRecorrido.apply(this, arguments);
}

function _deleteRecorrido() {
  _deleteRecorrido = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$params3, origen, destino, seccion, _deleteRecorrido2;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$params3 = req.params, origen = _req$params3.origen, destino = _req$params3.destino, seccion = _req$params3.seccion;
            _context6.next = 4;
            return _Recorrido["default"].destroy({
              where: {
                Origen: origen,
                Destino: destino,
                Seccion: seccion
              }
            });

          case 4:
            _deleteRecorrido2 = _context6.sent;

            if (!(_deleteRecorrido2 === 0)) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              message: "No se encuentra registrado este recorrido",
              count: _deleteRecorrido2
            }));

          case 7:
            res.status(200).json({
              message: "Recorrido eliminado correctamente",
              count: _deleteRecorrido2
            });
            _context6.next = 13;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar este recorrido",
              count: 0
            });

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return _deleteRecorrido.apply(this, arguments);
}