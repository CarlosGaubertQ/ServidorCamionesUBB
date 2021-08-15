"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCamiones = getCamiones;
exports.getCamionByPatente = getCamionByPatente;
exports.addCamion = addCamion;
exports.updateCamion = updateCamion;
exports.deleteCamion = deleteCamion;

var _Camion = _interopRequireDefault(require("../models/Camion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCamiones(_x, _x2) {
  return _getCamiones.apply(this, arguments);
}

function _getCamiones() {
  _getCamiones = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var camiones;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Camion["default"].findAll();

          case 3:
            camiones = _context.sent;
            res.status(200).json({
              data: camiones
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
  return _getCamiones.apply(this, arguments);
}

function getCamionByPatente(_x3, _x4) {
  return _getCamionByPatente.apply(this, arguments);
}

function _getCamionByPatente() {
  _getCamionByPatente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var patente, camion;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            patente = req.params.patente;
            _context2.prev = 1;
            _context2.next = 4;
            return _Camion["default"].findAll({
              where: {
                PATENTE_CAMION: patente
              }
            });

          case 4:
            camion = _context2.sent;
            res.status(200).json({
              data: camion
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
  return _getCamionByPatente.apply(this, arguments);
}

function addCamion(_x5, _x6) {
  return _addCamion.apply(this, arguments);
}

function _addCamion() {
  _addCamion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, PATENTE_CAMION, MODELO_CAMION, CODIGO_MANTENCION, MARCA_CAMION, COLOR_CAMION, ANO_FABRICACION_CAMION, KILOMETRAJE_COMPRA_CAMION, FECHA_COMPRA_CAMION, VALOR_COMPRA_CAMION, CARGA_MAXIMA, OBSERVACION_CAMION, CAPACIDAD_CARTER, CAPACIDAD_CAJA, CAPACIDAD_DIFERENCIAL, TIPO_CAJA_CAMBIO, TIPO_DIFERENCIAL, TIPO_EMBRIAGE, TIPO_SUSPENCION, MODELO_FRENO_MOTOR, MODELO_DIRECCION, MODELO_INYECCION, MODELO_SISTEMA_ELECTRICO, NRO_CAMION, NRO_CHASIS, NRO_EJES, newCamion;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, PATENTE_CAMION = _req$body.PATENTE_CAMION, MODELO_CAMION = _req$body.MODELO_CAMION, CODIGO_MANTENCION = _req$body.CODIGO_MANTENCION, MARCA_CAMION = _req$body.MARCA_CAMION, COLOR_CAMION = _req$body.COLOR_CAMION, ANO_FABRICACION_CAMION = _req$body.ANO_FABRICACION_CAMION, KILOMETRAJE_COMPRA_CAMION = _req$body.KILOMETRAJE_COMPRA_CAMION, FECHA_COMPRA_CAMION = _req$body.FECHA_COMPRA_CAMION, VALOR_COMPRA_CAMION = _req$body.VALOR_COMPRA_CAMION, CARGA_MAXIMA = _req$body.CARGA_MAXIMA, OBSERVACION_CAMION = _req$body.OBSERVACION_CAMION, CAPACIDAD_CARTER = _req$body.CAPACIDAD_CARTER, CAPACIDAD_CAJA = _req$body.CAPACIDAD_CAJA, CAPACIDAD_DIFERENCIAL = _req$body.CAPACIDAD_DIFERENCIAL, TIPO_CAJA_CAMBIO = _req$body.TIPO_CAJA_CAMBIO, TIPO_DIFERENCIAL = _req$body.TIPO_DIFERENCIAL, TIPO_EMBRIAGE = _req$body.TIPO_EMBRIAGE, TIPO_SUSPENCION = _req$body.TIPO_SUSPENCION, MODELO_FRENO_MOTOR = _req$body.MODELO_FRENO_MOTOR, MODELO_DIRECCION = _req$body.MODELO_DIRECCION, MODELO_INYECCION = _req$body.MODELO_INYECCION, MODELO_SISTEMA_ELECTRICO = _req$body.MODELO_SISTEMA_ELECTRICO, NRO_CAMION = _req$body.NRO_CAMION, NRO_CHASIS = _req$body.NRO_CHASIS, NRO_EJES = _req$body.NRO_EJES;
            _context3.prev = 1;
            _context3.next = 4;
            return _Camion["default"].create({
              PATENTE_CAMION: PATENTE_CAMION,
              MODELO_CAMION: MODELO_CAMION,
              CODIGO_MANTENCION: CODIGO_MANTENCION,
              MARCA_CAMION: MARCA_CAMION,
              COLOR_CAMION: COLOR_CAMION,
              ANO_FABRICACION_CAMION: ANO_FABRICACION_CAMION,
              KILOMETRAJE_COMPRA_CAMION: KILOMETRAJE_COMPRA_CAMION,
              FECHA_COMPRA_CAMION: FECHA_COMPRA_CAMION,
              VALOR_COMPRA_CAMION: VALOR_COMPRA_CAMION,
              CARGA_MAXIMA: CARGA_MAXIMA,
              OBSERVACION_CAMION: OBSERVACION_CAMION,
              CAPACIDAD_CARTER: CAPACIDAD_CARTER,
              CAPACIDAD_CAJA: CAPACIDAD_CAJA,
              CAPACIDAD_DIFERENCIAL: CAPACIDAD_DIFERENCIAL,
              TIPO_CAJA_CAMBIO: TIPO_CAJA_CAMBIO,
              TIPO_DIFERENCIAL: TIPO_DIFERENCIAL,
              TIPO_EMBRIAGE: TIPO_EMBRIAGE,
              TIPO_SUSPENCION: TIPO_SUSPENCION,
              MODELO_FRENO_MOTOR: MODELO_FRENO_MOTOR,
              MODELO_DIRECCION: MODELO_DIRECCION,
              MODELO_INYECCION: MODELO_INYECCION,
              MODELO_SISTEMA_ELECTRICO: MODELO_SISTEMA_ELECTRICO,
              NRO_CAMION: NRO_CAMION,
              NRO_CHASIS: NRO_CHASIS,
              NRO_EJES: NRO_EJES
            }, {
              fields: ["PATENTE_CAMION", "MODELO_CAMION", "CODIGO_MANTENCION", "MARCA_CAMION", "COLOR_CAMION", "ANO_FABRICACION_CAMION", "KILOMETRAJE_COMPRA_CAMION", "FECHA_COMPRA_CAMION", "VALOR_COMPRA_CAMION", "CARGA_MAXIMA", "OBSERVACION_CAMION", "CAPACIDAD_CARTER", "CAPACIDAD_CAJA", "CAPACIDAD_DIFERENCIAL", "TIPO_CAJA_CAMBIO", "TIPO_DIFERENCIAL", "TIPO_EMBRIAGE", "TIPO_SUSPENCION", "MODELO_FRENO_MOTOR", "MODELO_DIRECCION", "MODELO_INYECCION", "MODELO_SISTEMA_ELECTRICO", "NRO_CAMION", "NRO_CHASIS", "NRO_EJES"]
            });

          case 4:
            newCamion = _context3.sent;

            if (newCamion) {
              res.status(200).send({
                message: "Camión creado correctamente",
                data: newCamion
              });
            } else {
              res.status(500).send({
                message: "Ya existe este camión",
                data: newCamion
              });
            }

            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(400).send({
              message: "Ya existe este camión",
              data: []
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _addCamion.apply(this, arguments);
}

function updateCamion(_x7, _x8) {
  return _updateCamion.apply(this, arguments);
}

function _updateCamion() {
  _updateCamion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var patente, _req$body2, MODELO_CAMION, CODIGO_MANTENCION, MARCA_CAMION, COLOR_CAMION, ANO_FABRICACION_CAMION, KILOMETRAJE_COMPRA_CAMION, FECHA_COMPRA_CAMION, VALOR_COMPRA_CAMION, CARGA_MAXIMA, OBSERVACION_CAMION, CAPACIDAD_CARTER, CAPACIDAD_CAJA, CAPACIDAD_DIFERENCIAL, TIPO_CAJA_CAMBIO, TIPO_DIFERENCIAL, TIPO_EMBRIAGE, TIPO_SUSPENCION, MODELO_FRENO_MOTOR, MODELO_DIRECCION, MODELO_INYECCION, MODELO_SISTEMA_ELECTRICO, NRO_CAMION, NRO_CHASIS, NRO_EJES, Patente_Carro, camion, camionUpdate;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            patente = req.params.patente;
            _req$body2 = req.body, MODELO_CAMION = _req$body2.MODELO_CAMION, CODIGO_MANTENCION = _req$body2.CODIGO_MANTENCION, MARCA_CAMION = _req$body2.MARCA_CAMION, COLOR_CAMION = _req$body2.COLOR_CAMION, ANO_FABRICACION_CAMION = _req$body2.ANO_FABRICACION_CAMION, KILOMETRAJE_COMPRA_CAMION = _req$body2.KILOMETRAJE_COMPRA_CAMION, FECHA_COMPRA_CAMION = _req$body2.FECHA_COMPRA_CAMION, VALOR_COMPRA_CAMION = _req$body2.VALOR_COMPRA_CAMION, CARGA_MAXIMA = _req$body2.CARGA_MAXIMA, OBSERVACION_CAMION = _req$body2.OBSERVACION_CAMION, CAPACIDAD_CARTER = _req$body2.CAPACIDAD_CARTER, CAPACIDAD_CAJA = _req$body2.CAPACIDAD_CAJA, CAPACIDAD_DIFERENCIAL = _req$body2.CAPACIDAD_DIFERENCIAL, TIPO_CAJA_CAMBIO = _req$body2.TIPO_CAJA_CAMBIO, TIPO_DIFERENCIAL = _req$body2.TIPO_DIFERENCIAL, TIPO_EMBRIAGE = _req$body2.TIPO_EMBRIAGE, TIPO_SUSPENCION = _req$body2.TIPO_SUSPENCION, MODELO_FRENO_MOTOR = _req$body2.MODELO_FRENO_MOTOR, MODELO_DIRECCION = _req$body2.MODELO_DIRECCION, MODELO_INYECCION = _req$body2.MODELO_INYECCION, MODELO_SISTEMA_ELECTRICO = _req$body2.MODELO_SISTEMA_ELECTRICO, NRO_CAMION = _req$body2.NRO_CAMION, NRO_CHASIS = _req$body2.NRO_CHASIS, NRO_EJES = _req$body2.NRO_EJES, Patente_Carro = _req$body2.Patente_Carro;
            _context4.next = 4;
            return _Camion["default"].findOne({
              where: {
                PATENTE_CAMION: patente
              }
            });

          case 4:
            camion = _context4.sent;

            if (!(camion === null)) {
              _context4.next = 9;
              break;
            }

            res.status(200).json({
              message: "No se encontro este camión",
              data: []
            });
            _context4.next = 13;
            break;

          case 9:
            _context4.next = 11;
            return camion.update({
              MODELO_CAMION: MODELO_CAMION,
              CODIGO_MANTENCION: CODIGO_MANTENCION,
              MARCA_CAMION: MARCA_CAMION,
              COLOR_CAMION: COLOR_CAMION,
              ANO_FABRICACION_CAMION: ANO_FABRICACION_CAMION,
              KILOMETRAJE_COMPRA_CAMION: KILOMETRAJE_COMPRA_CAMION,
              FECHA_COMPRA_CAMION: FECHA_COMPRA_CAMION,
              VALOR_COMPRA_CAMION: VALOR_COMPRA_CAMION,
              CARGA_MAXIMA: CARGA_MAXIMA,
              OBSERVACION_CAMION: OBSERVACION_CAMION,
              CAPACIDAD_CARTER: CAPACIDAD_CARTER,
              CAPACIDAD_CAJA: CAPACIDAD_CAJA,
              CAPACIDAD_DIFERENCIAL: CAPACIDAD_DIFERENCIAL,
              TIPO_CAJA_CAMBIO: TIPO_CAJA_CAMBIO,
              TIPO_DIFERENCIAL: TIPO_DIFERENCIAL,
              TIPO_EMBRIAGE: TIPO_EMBRIAGE,
              TIPO_SUSPENCION: TIPO_SUSPENCION,
              MODELO_FRENO_MOTOR: MODELO_FRENO_MOTOR,
              MODELO_DIRECCION: MODELO_DIRECCION,
              MODELO_INYECCION: MODELO_INYECCION,
              MODELO_SISTEMA_ELECTRICO: MODELO_SISTEMA_ELECTRICO,
              NRO_CAMION: NRO_CAMION,
              NRO_CHASIS: NRO_CHASIS,
              NRO_EJES: NRO_EJES,
              Patente_Carro: Patente_Carro
            });

          case 11:
            camionUpdate = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              message: "Camion ha sido actualizado correctamente",
              data: camionUpdate
            }));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateCamion.apply(this, arguments);
}

function deleteCamion(_x9, _x10) {
  return _deleteCamion.apply(this, arguments);
}

function _deleteCamion() {
  _deleteCamion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var patente, _deleteCamion2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            patente = req.params.patente;
            _context5.next = 4;
            return _Camion["default"].destroy({
              where: {
                PATENTE_CAMION: patente
              }
            });

          case 4:
            _deleteCamion2 = _context5.sent;

            if (!(_deleteCamion2 === 0)) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              message: "No existe este camión",
              count: _deleteCamion2
            }));

          case 7:
            res.status(200).json({
              message: "Camión eliminado correctamente",
              count: _deleteCamion2
            });
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: "Algo ocurrio cuando se queria eliminar este camión",
              count: 0
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return _deleteCamion.apply(this, arguments);
}