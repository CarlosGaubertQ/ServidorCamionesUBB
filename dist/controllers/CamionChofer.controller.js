"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCamionChofer = getCamionChofer;
exports.getCamionChoferByPC = getCamionChoferByPC;
exports.getCamionChoferByP = getCamionChoferByP;
exports.addCamionChofer = addCamionChofer;
exports.updateCamionChofer = updateCamionChofer;
exports.deleteCamionChofer = deleteCamionChofer;

var _CamionChofer = _interopRequireDefault(require("../models/CamionChofer"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCamionChofer(_x, _x2) {
  return _getCamionChofer.apply(this, arguments);
}

function _getCamionChofer() {
  _getCamionChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var camionChofer;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _CamionChofer["default"].findAll();

          case 3:
            camionChofer = _context.sent;
            res.status(200).json({
              data: camionChofer
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
  return _getCamionChofer.apply(this, arguments);
}

function getCamionChoferByPC(_x3, _x4) {
  return _getCamionChoferByPC.apply(this, arguments);
}

function _getCamionChoferByPC() {
  _getCamionChoferByPC = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$params, patente, chofer, camionChofer;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$params = req.params, patente = _req$params.patente, chofer = _req$params.chofer;
            _context2.next = 4;
            return _CamionChofer["default"].findAll({
              where: {
                Rut_Conductor: chofer,
                Patente_Camion: patente
              }
            });

          case 4:
            camionChofer = _context2.sent;
            res.status(200).json({
              data: camionChofer
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
  return _getCamionChoferByPC.apply(this, arguments);
}

function getCamionChoferByP(_x5, _x6) {
  return _getCamionChoferByP.apply(this, arguments);
}

function _getCamionChoferByP() {
  _getCamionChoferByP = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var patente, camionChofer;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            patente = req.params.patente;
            _context3.next = 4;
            return _CamionChofer["default"].findAll({
              where: {
                Patente_Camion: patente
              }
            });

          case 4:
            camionChofer = _context3.sent;
            res.status(200).json({
              data: camionChofer
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(500).send({
              data: _context3.t0
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getCamionChoferByP.apply(this, arguments);
}

function addCamionChofer(_x7, _x8) {
  return _addCamionChofer.apply(this, arguments);
}

function _addCamionChofer() {
  _addCamionChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, FechaDesde, FechaHasta, Patente_Camion, Rut_Conductor, formatFechaDesde, formatFechaHasta, newCamionChofer;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, FechaDesde = _req$body.FechaDesde, FechaHasta = _req$body.FechaHasta, Patente_Camion = _req$body.Patente_Camion, Rut_Conductor = _req$body.Rut_Conductor;
            formatFechaDesde = (0, _moment["default"])(FechaDesde, "YYYY-MM-DD").format("YYYY-MM-DD");
            formatFechaHasta = (0, _moment["default"])(FechaHasta, "YYYY-MM-DD").format("YYYY-MM-DD");
            _context4.prev = 3;
            _context4.next = 6;
            return _CamionChofer["default"].create({
              FechaDesde: formatFechaDesde,
              FechaHasta: formatFechaHasta,
              Patente_Camion: Patente_Camion,
              Rut_Conductor: Rut_Conductor
            }, {
              fields: ["FechaDesde", "FechaHasta", "Patente_Camion", "Rut_Conductor"]
            });

          case 6:
            newCamionChofer = _context4.sent;

            if (newCamionChofer) {
              res.status(200).send({
                message: "Camion asignacion al chofer correctamente",
                data: newCamionChofer
              });
            } else {
              res.status(500).send({
                message: "Ya esta asignado el camion a este chofer",
                data: newCamionChofer
              });
            }

            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](3);
            res.status(500).send({
              message: "Ya esta asignado el camion a este chofer",
              data: []
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 10]]);
  }));
  return _addCamionChofer.apply(this, arguments);
}

function updateCamionChofer(_x9, _x10) {
  return _updateCamionChofer.apply(this, arguments);
}

function _updateCamionChofer() {
  _updateCamionChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$params2, patente, chofer, _req$body2, FechaHasta, FechaDesde, formatFechaDesde, formatFechaHasta, camionChofer, camionChoferUpdate;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$params2 = req.params, patente = _req$params2.patente, chofer = _req$params2.chofer;
            _req$body2 = req.body, FechaHasta = _req$body2.FechaHasta, FechaDesde = _req$body2.FechaDesde;
            formatFechaDesde = (0, _moment["default"])(FechaDesde, "YYYY-MM-DD").format("YYYY-MM-DD");
            formatFechaHasta = (0, _moment["default"])(FechaHasta, "YYYY-MM-DD").format("YYYY-MM-DD");
            _context5.next = 6;
            return _CamionChofer["default"].findOne({
              where: {
                Rut_Conductor: chofer,
                Patente_Camion: patente
              }
            });

          case 6:
            camionChofer = _context5.sent;

            if (!(camionChofer === null)) {
              _context5.next = 11;
              break;
            }

            res.status(400).json({
              message: "No se encontro esta asignación",
              data: []
            });
            _context5.next = 15;
            break;

          case 11:
            _context5.next = 13;
            return camionChofer.update({
              FechaDesde: new Date(formatFechaDesde),
              FechaHasta: new Date(formatFechaHasta)
            });

          case 13:
            camionChoferUpdate = _context5.sent;
            return _context5.abrupt("return", res.status(200).json({
              message: "Asignación actualizado correctamente",
              data: camionChoferUpdate
            }));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateCamionChofer.apply(this, arguments);
}

function deleteCamionChofer(_x11, _x12) {
  return _deleteCamionChofer.apply(this, arguments);
}

function _deleteCamionChofer() {
  _deleteCamionChofer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$params3, fechadesde, patente, rut, formatFechaDesde, _deleteCamionChofer2;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$params3 = req.params, fechadesde = _req$params3.fechadesde, patente = _req$params3.patente, rut = _req$params3.rut;
            formatFechaDesde = (0, _moment["default"])(fechadesde, "DD-MM-YYYY").format("YYYY-MM-DD");
            console.log(fechadesde, formatFechaDesde, patente, rut);
            _context6.next = 6;
            return _CamionChofer["default"].destroy({
              where: {
                FechaDesde: new Date(formatFechaDesde),
                Patente_Camion: patente,
                Rut_Conductor: rut
              }
            });

          case 6:
            _deleteCamionChofer2 = _context6.sent;

            if (!(_deleteCamionChofer2 === 0)) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              message: "No existe esta relacion entre camion y chofer",
              count: _deleteCamionChofer2
            }));

          case 9:
            res.status(200).json({
              message: "Asignacion camion y chofer eliminada correctamente",
              count: _deleteCamionChofer2
            });
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar esta relación entre camion y chofer",
              count: 0
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 12]]);
  }));
  return _deleteCamionChofer.apply(this, arguments);
}