"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOTMantencion = getOTMantencion;
exports.addOTMantencion = addOTMantencion;
exports.updateOTMantencion = updateOTMantencion;
exports.deleteOTMantencion = deleteOTMantencion;

var _OTMantencion = _interopRequireDefault(require("../models/OTMantencion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getOTMantencion(_x, _x2) {
  return _getOTMantencion.apply(this, arguments);
}

function _getOTMantencion() {
  _getOTMantencion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var oTMantencion;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _OTMantencion["default"].findAll();

          case 3:
            oTMantencion = _context.sent;
            res.status(200).json({
              data: oTMantencion
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
  return _getOTMantencion.apply(this, arguments);
}

function addOTMantencion(_x3, _x4) {
  return _addOTMantencion.apply(this, arguments);
}

function _addOTMantencion() {
  _addOTMantencion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, CODIGO_OT, PATENTE_CAMION, PATENTE_CARRO, TIPO_ORDEN, DESCRIPCION_OT, FECHA_OT, DURACION_ESTIMADA, newOTMantencion;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = _slicedToArray(req.body, 7), CODIGO_OT = _req$body[0], PATENTE_CAMION = _req$body[1], PATENTE_CARRO = _req$body[2], TIPO_ORDEN = _req$body[3], DESCRIPCION_OT = _req$body[4], FECHA_OT = _req$body[5], DURACION_ESTIMADA = _req$body[6];
            _context2.prev = 1;
            _context2.next = 4;
            return _OTMantencion["default"].create({
              CODIGO_OT: CODIGO_OT,
              PATENTE_CAMION: PATENTE_CAMION,
              PATENTE_CARRO: PATENTE_CARRO,
              TIPO_ORDEN: TIPO_ORDEN,
              DESCRIPCION_OT: DESCRIPCION_OT,
              FECHA_OT: FECHA_OT,
              DURACION_ESTIMADA: DURACION_ESTIMADA
            }, {
              fields: ["CODIGO_OT", "PATENTE_CAMION", "PATENTE_CARRO", "TIPO_ORDEN", "DESCRIPCION_OT", "FECHA_OT", "DURACION_ESTIMADA"]
            });

          case 4:
            newOTMantencion = _context2.sent;

            if (newOTMantencion) {
              res.status(200).send({
                message: "Orden de trabajo agregada correctamente",
                data: newOTMantencion
              });
            } else {
              res.status(500).send({
                message: "Ya esta registrado esta orden de trabajo",
                data: newOTMantencion
              });
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(400).send({
              message: "Ya esta registrado esta orden de trabajo",
              data: []
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _addOTMantencion.apply(this, arguments);
}

function updateOTMantencion(_x5, _x6) {
  return _updateOTMantencion.apply(this, arguments);
}

function _updateOTMantencion() {
  _updateOTMantencion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$params, codigo, _req$body2, PATENTE_CAMION, PATENTE_CARRO, TIPO_ORDEN, DESCRIPCION_OT, FECHA_OT, DURACION_ESTIMADA, oTMantencion, oTMantencionUpdate;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$params = _slicedToArray(req.params, 1), codigo = _req$params[0];
            _req$body2 = _slicedToArray(req.body, 6), PATENTE_CAMION = _req$body2[0], PATENTE_CARRO = _req$body2[1], TIPO_ORDEN = _req$body2[2], DESCRIPCION_OT = _req$body2[3], FECHA_OT = _req$body2[4], DURACION_ESTIMADA = _req$body2[5];
            _context3.next = 4;
            return _OTMantencion["default"].findOne({
              where: {
                CODIGO_OT: codigo
              }
            });

          case 4:
            oTMantencion = _context3.sent;

            if (!(oTMantencion === null)) {
              _context3.next = 9;
              break;
            }

            res.status(400).json({
              message: "No se encontro esta orden de trabajo",
              data: []
            });
            _context3.next = 13;
            break;

          case 9:
            _context3.next = 11;
            return oTMantencion.update({
              PATENTE_CAMION: PATENTE_CAMION,
              PATENTE_CARRO: PATENTE_CARRO,
              TIPO_ORDEN: TIPO_ORDEN,
              DESCRIPCION_OT: DESCRIPCION_OT,
              FECHA_OT: FECHA_OT,
              DURACION_ESTIMADA: DURACION_ESTIMADA
            });

          case 11:
            oTMantencionUpdate = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              message: "Orden de trabajo actualizada correctamente",
              data: oTMantencionUpdate
            }));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateOTMantencion.apply(this, arguments);
}

function deleteOTMantencion(_x7, _x8) {
  return _deleteOTMantencion.apply(this, arguments);
}

function _deleteOTMantencion() {
  _deleteOTMantencion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$params2, codigo, _deleteOTMantencion2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$params2 = _slicedToArray(req.params, 1), codigo = _req$params2[0];
            _context4.next = 4;
            return _OTMantencion["default"].destroy({
              where: {
                CODIGO_OT: codigo
              }
            });

          case 4:
            _deleteOTMantencion2 = _context4.sent;

            if (!(_deleteOTMantencion2 === 0)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "No se encontro esta orden de trabajo",
              count: _deleteOTMantencion2
            }));

          case 7:
            res.status(200).json({
              message: "Orden de trabajo eliminada correctamente",
              count: _deleteOTMantencion2
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar esta orden de trabajo",
              count: 0
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _deleteOTMantencion.apply(this, arguments);
}