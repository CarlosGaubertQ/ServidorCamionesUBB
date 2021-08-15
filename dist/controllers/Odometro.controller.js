"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOdometro = getOdometro;
exports.getOdometroByPatente = getOdometroByPatente;
exports.addOdometro = addOdometro;
exports.updateOdometro = updateOdometro;
exports.deleteOdometro = deleteOdometro;

var _Odometro = _interopRequireDefault(require("../models/Odometro"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getOdometro(_x, _x2) {
  return _getOdometro.apply(this, arguments);
}

function _getOdometro() {
  _getOdometro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var odometro;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Odometro["default"].findAll({});

          case 3:
            odometro = _context.sent;
            res.status(200).json({
              data: odometro
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
  return _getOdometro.apply(this, arguments);
}

function getOdometroByPatente(_x3, _x4) {
  return _getOdometroByPatente.apply(this, arguments);
}

function _getOdometroByPatente() {
  _getOdometroByPatente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var patente, odometro;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            patente = req.params.patente;
            _context2.prev = 1;
            _context2.next = 4;
            return _Odometro["default"].findAll({
              where: {
                PATENTE_CAMION: patente
              }
            });

          case 4:
            odometro = _context2.sent;
            res.status(200).json({
              data: odometro
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
  return _getOdometroByPatente.apply(this, arguments);
}

function addOdometro(_x5, _x6) {
  return _addOdometro.apply(this, arguments);
}

function _addOdometro() {
  _addOdometro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, PATENTE_CAMION, ODOMETRO_CAMION, FECHA_ODOMETRO, formatFecha, newOdometro;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, PATENTE_CAMION = _req$body.PATENTE_CAMION, ODOMETRO_CAMION = _req$body.ODOMETRO_CAMION, FECHA_ODOMETRO = _req$body.FECHA_ODOMETRO;
            formatFecha = (0, _moment["default"])(FECHA_ODOMETRO, "YYYY-MM-DD").format("YYYY-MM-DD");
            console.log(FECHA_ODOMETRO, formatFecha);
            _context3.prev = 3;
            _context3.next = 6;
            return _Odometro["default"].create({
              PATENTE_CAMION: PATENTE_CAMION,
              ODOMETRO_CAMION: ODOMETRO_CAMION,
              FECHA_ODOMETRO: formatFecha
            }, {
              fields: ["PATENTE_CAMION", "ODOMETRO_CAMION", "FECHA_ODOMETRO"]
            });

          case 6:
            newOdometro = _context3.sent;

            if (newOdometro) {
              res.status(200).send({
                message: "Odómetro agregado correctamente",
                data: newOdometro
              });
            } else {
              res.status(500).send({
                message: "Ya existe el registro del odómetro en esta fecha",
                data: newOdometro
              });
            }

            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            res.status(500).send({
              message: "Ya existe el registro del odómetro en esta fecha",
              data: []
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 10]]);
  }));
  return _addOdometro.apply(this, arguments);
}

function updateOdometro(_x7, _x8) {
  return _updateOdometro.apply(this, arguments);
}

function _updateOdometro() {
  _updateOdometro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$params, patente, fecha, ODOMETRO_CAMION, odometro, newOdometro, odometroUpdate;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$params = req.params, patente = _req$params.patente, fecha = _req$params.fecha;
            ODOMETRO_CAMION = req.body.ODOMETRO_CAMION;
            _context4.prev = 2;
            _context4.next = 5;
            return _Odometro["default"].findOne({
              where: {
                PATENTE_CAMION: patente,
                FECHA_ODOMETRO: fecha
              }
            });

          case 5:
            odometro = _context4.sent;

            if (!(odometro === null)) {
              _context4.next = 13;
              break;
            }

            _context4.next = 9;
            return _Odometro["default"].create({
              PATENTE_CAMION: patente,
              ODOMETRO_CAMION: ODOMETRO_CAMION,
              FECHA_ODOMETRO: fecha
            }, {
              fields: ["PATENTE_CAMION", "ODOMETRO_CAMION", "FECHA_ODOMETRO"]
            });

          case 9:
            newOdometro = _context4.sent;

            if (newOdometro) {
              res.status(200).send({
                message: "Odómetro agregado correctamente",
                data: newOdometro
              });
            } else {
              res.status(500).send({
                message: "Ya existe el registro del odómetro en esta fecha",
                data: newOdometro
              });
            }

            _context4.next = 17;
            break;

          case 13:
            _context4.next = 15;
            return odometro.update({
              ODOMETRO_CAMION: ODOMETRO_CAMION
            });

          case 15:
            odometroUpdate = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              message: "Odómetro ha sido actualizado correctamente",
              data: odometroUpdate
            }));

          case 17:
            _context4.next = 23;
            break;

          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            res.status(400).json({
              message: "No se encontro este odometro",
              data: [_context4.t0]
            });

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 19]]);
  }));
  return _updateOdometro.apply(this, arguments);
}

function deleteOdometro(_x9, _x10) {
  return _deleteOdometro.apply(this, arguments);
}

function _deleteOdometro() {
  _deleteOdometro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$params2, patente, fecha, _deleteOdometro2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$params2 = req.params, patente = _req$params2.patente, fecha = _req$params2.fecha;
            _context5.next = 4;
            return _Odometro["default"].destroy({
              where: {
                PATENTE_CAMION: patente,
                FECHA_ODOMETRO: new Date(fecha)
              }
            });

          case 4:
            _deleteOdometro2 = _context5.sent;

            if (!(_deleteOdometro2 === 0)) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              message: "No existe este odómetro",
              count: _deleteOdometro2
            }));

          case 7:
            res.status(200).json({
              message: "Odómetro eliminado correctamente",
              count: _deleteOdometro2
            });
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar odómetro",
              count: 0
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return _deleteOdometro.apply(this, arguments);
}