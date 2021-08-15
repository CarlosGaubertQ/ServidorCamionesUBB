"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBanco = getBanco;
exports.addBanco = addBanco;
exports.updateBanco = updateBanco;
exports.deleteBanco = deleteBanco;

var _Banco = _interopRequireDefault(require("../models/Banco"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getBanco(_x, _x2) {
  return _getBanco.apply(this, arguments);
}

function _getBanco() {
  _getBanco = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var banco;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Banco["default"].findAll();

          case 3:
            banco = _context.sent;
            res.status(200).json({
              data: banco
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
  return _getBanco.apply(this, arguments);
}

function addBanco(_x3, _x4) {
  return _addBanco.apply(this, arguments);
}

function _addBanco() {
  _addBanco = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, CODIGO_BANCO, NOMBRE_BANCO, DIRECCION_INSTITUCION, FONO_BANCO, FAX_BANCO, DIGITO_BANCO, newBanco;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, CODIGO_BANCO = _req$body.CODIGO_BANCO, NOMBRE_BANCO = _req$body.NOMBRE_BANCO, DIRECCION_INSTITUCION = _req$body.DIRECCION_INSTITUCION, FONO_BANCO = _req$body.FONO_BANCO, FAX_BANCO = _req$body.FAX_BANCO, DIGITO_BANCO = _req$body.DIGITO_BANCO;
            _context2.prev = 1;
            _context2.next = 4;
            return _Banco["default"].create({
              CODIGO_BANCO: CODIGO_BANCO,
              NOMBRE_BANCO: NOMBRE_BANCO,
              DIRECCION_INSTITUCION: DIRECCION_INSTITUCION,
              FONO_BANCO: FONO_BANCO,
              FAX_BANCO: FAX_BANCO,
              DIGITO_BANCO: DIGITO_BANCO
            }, {
              fields: ["CODIGO_BANCO", "NOMBRE_BANCO", "DIRECCION_INSTITUCION", "FONO_BANCO", "FAX_BANCO", "DIGITO_BANCO"]
            });

          case 4:
            newBanco = _context2.sent;

            if (newBanco) {
              res.status(200).send({
                message: "Banco registrado correctamente",
                data: newBanco
              });
            } else {
              res.status(500).send({
                message: "Ya esta registrado este banco",
                data: newBanco
              });
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(400).send({
              message: "Ya esta registrado este banco",
              data: []
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _addBanco.apply(this, arguments);
}

function updateBanco(_x5, _x6) {
  return _updateBanco.apply(this, arguments);
}

function _updateBanco() {
  _updateBanco = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var codigo, _req$body2, NOMBRE_BANCO, DIRECCION_INSTITUCION, FONO_BANCO, FAX_BANCO, DIGITO_BANCO, banco, bancoUpdate;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            codigo = req.params.codigo;
            _req$body2 = req.body, NOMBRE_BANCO = _req$body2.NOMBRE_BANCO, DIRECCION_INSTITUCION = _req$body2.DIRECCION_INSTITUCION, FONO_BANCO = _req$body2.FONO_BANCO, FAX_BANCO = _req$body2.FAX_BANCO, DIGITO_BANCO = _req$body2.DIGITO_BANCO;
            _context3.next = 4;
            return _Banco["default"].findOne({
              where: {
                CODIGO_BANCO: codigo
              }
            });

          case 4:
            banco = _context3.sent;

            if (!(banco === null)) {
              _context3.next = 9;
              break;
            }

            res.status(400).json({
              message: "No se encuentra registrao este banco",
              data: []
            });
            _context3.next = 11;
            break;

          case 9:
            bancoUpdate = banco.update({
              NOMBRE_BANCO: NOMBRE_BANCO,
              DIRECCION_INSTITUCION: DIRECCION_INSTITUCION,
              FONO_BANCO: FONO_BANCO,
              FAX_BANCO: FAX_BANCO,
              DIGITO_BANCO: DIGITO_BANCO
            });
            return _context3.abrupt("return", res.status(200).json({
              message: "Banco actualizado correctamente",
              data: bancoUpdate
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateBanco.apply(this, arguments);
}

function deleteBanco(_x7, _x8) {
  return _deleteBanco.apply(this, arguments);
}

function _deleteBanco() {
  _deleteBanco = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$params, codigo, _deleteBanco2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$params = _slicedToArray(req.params, 1), codigo = _req$params[0];
            _context4.next = 4;
            return _Banco["default"].destroy({
              where: {
                CODIGO_BANCO: codigo
              }
            });

          case 4:
            _deleteBanco2 = _context4.sent;

            if (!(_deleteBanco2 === 0)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "No esta registrado este banco",
              count: _deleteBanco2
            }));

          case 7:
            res.status(200).json({
              message: "Banco eliminado correctamente",
              count: _deleteBanco2
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
  return _deleteBanco.apply(this, arguments);
}