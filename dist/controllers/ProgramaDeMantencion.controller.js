"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProgramaDeMantencion = getProgramaDeMantencion;
exports.addProgramaDeMantencion = addProgramaDeMantencion;
exports.updateProgramaMantencion = updateProgramaMantencion;
exports.deleteProgramaDeMantencion = deleteProgramaDeMantencion;

var _ProgramaDeMantencion = _interopRequireDefault(require("../models/ProgramaDeMantencion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProgramaDeMantencion(_x, _x2) {
  return _getProgramaDeMantencion.apply(this, arguments);
}

function _getProgramaDeMantencion() {
  _getProgramaDeMantencion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var programaDeMantencion;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _ProgramaDeMantencion["default"].findAll({});

          case 3:
            programaDeMantencion = _context.sent;
            res.status(200).json({
              data: programaDeMantencion
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
  return _getProgramaDeMantencion.apply(this, arguments);
}

function addProgramaDeMantencion(_x3, _x4) {
  return _addProgramaDeMantencion.apply(this, arguments);
}

function _addProgramaDeMantencion() {
  _addProgramaDeMantencion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, CODIGO_MANTENCION, ELEMENTO, TIPO, MANTENCION, KILOMETRAJE_PROGRAMADO, KM_ULTIMA_MANT, FECHA_DE_MANTENCION, newProgramaDeMantencion;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, CODIGO_MANTENCION = _req$body.CODIGO_MANTENCION, ELEMENTO = _req$body.ELEMENTO, TIPO = _req$body.TIPO, MANTENCION = _req$body.MANTENCION, KILOMETRAJE_PROGRAMADO = _req$body.KILOMETRAJE_PROGRAMADO, KM_ULTIMA_MANT = _req$body.KM_ULTIMA_MANT, FECHA_DE_MANTENCION = _req$body.FECHA_DE_MANTENCION;
            _context2.prev = 1;
            _context2.next = 4;
            return _ProgramaDeMantencion["default"].create({
              CODIGO_MANTENCION: CODIGO_MANTENCION,
              ELEMENTO: ELEMENTO,
              TIPO: TIPO,
              MANTENCION: MANTENCION,
              KILOMETRAJE_PROGRAMADO: KILOMETRAJE_PROGRAMADO,
              KM_ULTIMA_MANT: KM_ULTIMA_MANT,
              FECHA_DE_MANTENCION: FECHA_DE_MANTENCION
            }, {
              fields: ["CODIGO_MANTENCION", "ELEMENTO", "TIPO", "MANTENCION", "KILOMETRAJE_PROGRAMADO", "KM_ULTIMA_MANT", "FECHA_DE_MANTENCION"]
            });

          case 4:
            newProgramaDeMantencion = _context2.sent;

            if (newProgramaDeMantencion) {
              res.status(200).send({
                message: "Programa Mantención agregado correctamente",
                data: newProgramaDeMantencion
              });
            } else {
              res.status(500).send({
                message: "Ya existe el registro de este programa mantención",
                data: newProgramaDeMantencion
              });
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(500).send({
              message: "Ya existe el registro de este programa mantención",
              data: []
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _addProgramaDeMantencion.apply(this, arguments);
}

function updateProgramaMantencion(_x5, _x6) {
  return _updateProgramaMantencion.apply(this, arguments);
}

function _updateProgramaMantencion() {
  _updateProgramaMantencion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var codigo, _req$body2, ELEMENTO, TIPO, MANTENCION, KILOMETRAJE_PROGRAMADO, FECHA_DE_MANTENCION, programaDeMantencion, programaDeMantencionUpdate;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            codigo = req.params.codigo;
            _req$body2 = req.body, ELEMENTO = _req$body2.ELEMENTO, TIPO = _req$body2.TIPO, MANTENCION = _req$body2.MANTENCION, KILOMETRAJE_PROGRAMADO = _req$body2.KILOMETRAJE_PROGRAMADO, FECHA_DE_MANTENCION = _req$body2.FECHA_DE_MANTENCION;
            _context3.prev = 2;
            _context3.next = 5;
            return _ProgramaDeMantencion["default"].findOne({
              where: {
                CODIGO_MANTENCION: codigo
              }
            });

          case 5:
            programaDeMantencion = _context3.sent;

            if (!(programaDeMantencion === null)) {
              _context3.next = 10;
              break;
            }

            res.status(200).json({
              message: "No se encontro este programa de mantención",
              data: []
            });
            _context3.next = 21;
            break;

          case 10:
            console.log(ELEMENTO, TIPO, MANTENCION, KILOMETRAJE_PROGRAMADO, FECHA_DE_MANTENCION);
            _context3.prev = 11;
            _context3.next = 14;
            return programaDeMantencion.update({
              ELEMENTO: "HOLI",
              TIPO: TIPO,
              MANTENCION: MANTENCION,
              KILOMETRAJE_PROGRAMADO: KILOMETRAJE_PROGRAMADO,
              FECHA_DE_MANTENCION: FECHA_DE_MANTENCION
            });

          case 14:
            programaDeMantencionUpdate = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              message: "Programa de mantención ha sido actualizado correctamente",
              data: programaDeMantencionUpdate
            }));

          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](11);
            console.log("hola");

          case 21:
            _context3.next = 26;
            break;

          case 23:
            _context3.prev = 23;
            _context3.t1 = _context3["catch"](2);
            res.status(400).json({
              message: "No se encontro este programa de mantención",
              data: [_context3.t1]
            });

          case 26:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 23], [11, 18]]);
  }));
  return _updateProgramaMantencion.apply(this, arguments);
}

function deleteProgramaDeMantencion(_x7, _x8) {
  return _deleteProgramaDeMantencion.apply(this, arguments);
}

function _deleteProgramaDeMantencion() {
  _deleteProgramaDeMantencion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var codigo, _deleteProgramaDeMantencion2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            codigo = req.params.codigo;
            _context4.next = 4;
            return _ProgramaDeMantencion["default"].destroy({
              where: {
                CODIGO_MANTENCION: codigo
              }
            });

          case 4:
            _deleteProgramaDeMantencion2 = _context4.sent;

            if (!(_deleteProgramaDeMantencion2 === 0)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "No existe este programa de mantención",
              count: _deleteProgramaDeMantencion2
            }));

          case 7:
            res.status(200).json({
              message: "Programa de mantención eliminado correctamente",
              count: _deleteProgramaDeMantencion2
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar este programa de mantención",
              count: 0
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _deleteProgramaDeMantencion.apply(this, arguments);
}