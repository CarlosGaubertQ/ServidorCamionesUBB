"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMantencionNormal = getMantencionNormal;
exports.addMantencionNormal = addMantencionNormal;
exports.updateMantencionNormal = updateMantencionNormal;
exports.deleteMantencionNormal = deleteMantencionNormal;

var _MantencionNormal = _interopRequireDefault(require("../models/MantencionNormal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getMantencionNormal(_x, _x2) {
  return _getMantencionNormal.apply(this, arguments);
}

function _getMantencionNormal() {
  _getMantencionNormal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var mantencionNormal;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _MantencionNormal["default"].findAll({});

          case 3:
            mantencionNormal = _context.sent;
            res.status(200).json({
              data: mantencionNormal
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
  return _getMantencionNormal.apply(this, arguments);
}

function addMantencionNormal(_x3, _x4) {
  return _addMantencionNormal.apply(this, arguments);
}

function _addMantencionNormal() {
  _addMantencionNormal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, CODIGO_MANTENCION, OBSERVACION_MANTENCION, newMantencionNormal;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, CODIGO_MANTENCION = _req$body.CODIGO_MANTENCION, OBSERVACION_MANTENCION = _req$body.OBSERVACION_MANTENCION;
            _context2.prev = 1;
            _context2.next = 4;
            return _MantencionNormal["default"].create({
              CODIGO_MANTENCION: CODIGO_MANTENCION,
              OBSERVACION_MANTENCION: OBSERVACION_MANTENCION
            }, {
              fields: ["CODIGO_MANTENCION", "OBSERVACION_MANTENCION"]
            });

          case 4:
            newMantencionNormal = _context2.sent;

            if (newMantencionNormal) {
              res.status(200).send({
                message: "Mantencion normal agregado correctamente",
                data: newMantencionNormal
              });
            } else {
              res.status(500).send({
                message: "Ya existe el registro de esta mantencion normal",
                data: newMantencionNormal
              });
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(500).send({
              message: "Ya existe el registro de esta mantencion normal",
              data: []
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _addMantencionNormal.apply(this, arguments);
}

function updateMantencionNormal(_x5, _x6) {
  return _updateMantencionNormal.apply(this, arguments);
}

function _updateMantencionNormal() {
  _updateMantencionNormal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var codigo, OBSERVACION_MANTENCION, mantencionNormal, mantencionNormalUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            codigo = req.params.codigo;
            OBSERVACION_MANTENCION = req.body.OBSERVACION_MANTENCION;
            _context3.prev = 2;
            _context3.next = 5;
            return _MantencionNormal["default"].findOne({
              where: {
                CODIGO_MANTENCION: codigo
              }
            });

          case 5:
            mantencionNormal = _context3.sent;

            if (!(mantencionNormal === null)) {
              _context3.next = 10;
              break;
            }

            res.status(200).json({
              message: "No se encontro este mantención normal",
              data: []
            });
            _context3.next = 14;
            break;

          case 10:
            _context3.next = 12;
            return mantencionNormal.update({
              OBSERVACION_MANTENCION: OBSERVACION_MANTENCION
            });

          case 12:
            mantencionNormalUpdate = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              message: "Mantención normal ha sido actualizado correctamente",
              data: mantencionNormalUpdate
            }));

          case 14:
            _context3.next = 19;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](2);
            res.status(400).json({
              message: "No se encontro esta mantención normal",
              data: [_context3.t0]
            });

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 16]]);
  }));
  return _updateMantencionNormal.apply(this, arguments);
}

function deleteMantencionNormal(_x7, _x8) {
  return _deleteMantencionNormal.apply(this, arguments);
}

function _deleteMantencionNormal() {
  _deleteMantencionNormal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var codigo, _deleteMantencionNormal2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            codigo = req.params.codigo;
            _context4.next = 4;
            return _MantencionNormal["default"].destroy({
              where: {
                CODIGO_MANTENCION: codigo
              }
            });

          case 4:
            _deleteMantencionNormal2 = _context4.sent;

            if (!(_deleteMantencionNormal2 === 0)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "No existe esta mantención normal",
              count: _deleteMantencionNormal2
            }));

          case 7:
            res.status(200).json({
              message: "Mantención normal eliminado correctamente",
              count: _deleteMantencionNormal2
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar esta mantención normal",
              count: 0
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _deleteMantencionNormal.apply(this, arguments);
}