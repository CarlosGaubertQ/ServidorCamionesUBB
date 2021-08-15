"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObra = getObra;
exports.addObra = addObra;
exports.updateObra = updateObra;
exports.deleteObra = deleteObra;

var _Obra = _interopRequireDefault(require("../models/Obra"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getObra(_x, _x2) {
  return _getObra.apply(this, arguments);
}

function _getObra() {
  _getObra = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var obras;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Obra["default"].findAll();

          case 3:
            obras = _context.sent;
            res.status(200).json({
              data: obras
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
  return _getObra.apply(this, arguments);
}

function addObra(_x3, _x4) {
  return _addObra.apply(this, arguments);
}

function _addObra() {
  _addObra = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, CODIGO_OBRA, DESCRIPCION_OBRA, newObra;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, CODIGO_OBRA = _req$body.CODIGO_OBRA, DESCRIPCION_OBRA = _req$body.DESCRIPCION_OBRA;
            _context2.prev = 1;
            _context2.next = 4;
            return _Obra["default"].create({
              CODIGO_OBRA: CODIGO_OBRA,
              DESCRIPCION_OBRA: DESCRIPCION_OBRA
            }, {
              fields: ["CODIGO_OBRA", "DESCRIPCION_OBRA"]
            });

          case 4:
            newObra = _context2.sent;

            if (newObra) {
              res.status(200).send({
                message: "Obra registrada correctamente",
                data: newObra
              });
            } else {
              res.status(500).send({
                message: "Ya esta registrada este obra",
                data: newObra
              });
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(400).send({
              message: "Ya esta registrado esta obra",
              data: []
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _addObra.apply(this, arguments);
}

function updateObra(_x5, _x6) {
  return _updateObra.apply(this, arguments);
}

function _updateObra() {
  _updateObra = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var codigo, DESCRIPCION_OBRA, obra, obraUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            codigo = req.params.codigo;
            DESCRIPCION_OBRA = req.body.DESCRIPCION_OBRA;
            _context3.next = 4;
            return _Obra["default"].findOne({
              where: {
                CODIGO_OBRA: codigo
              }
            });

          case 4:
            obra = _context3.sent;

            if (!(obra === null)) {
              _context3.next = 9;
              break;
            }

            res.status(400).json({
              message: "No se encuentra registrado esta obra",
              data: []
            });
            _context3.next = 13;
            break;

          case 9:
            _context3.next = 11;
            return obra.update({
              DESCRIPCION_OBRA: DESCRIPCION_OBRA
            });

          case 11:
            obraUpdate = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              message: "Obra actualizada correctamente",
              data: obraUpdate
            }));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateObra.apply(this, arguments);
}

function deleteObra(_x7, _x8) {
  return _deleteObra.apply(this, arguments);
}

function _deleteObra() {
  _deleteObra = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var codigo, _deleteObra2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            codigo = req.params.codigo;
            _context4.next = 4;
            return _Obra["default"].destroy({
              where: {
                CODIGO_OBRA: codigo
              }
            });

          case 4:
            _deleteObra2 = _context4.sent;

            if (!(_deleteObra2 === 0)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "No esta registrado esta obra",
              count: _deleteObra2
            }));

          case 7:
            res.status(200).json({
              message: "Obra eliminada correctamente",
              count: _deleteObra2
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar este banco",
              count: 0
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _deleteObra.apply(this, arguments);
}