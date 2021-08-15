"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

require("regenerator-runtime/runtime");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _camion = _interopRequireDefault(require("./routes/camion.routes"));

var _odometro = _interopRequireDefault(require("./routes/odometro.routes"));

var _seguroCamion = _interopRequireDefault(require("./routes/seguroCamion.routes"));

var _cliente = _interopRequireDefault(require("./routes/cliente.routes"));

var _boletaCombustible = _interopRequireDefault(require("./routes/boletaCombustible.routes"));

var _banco = _interopRequireDefault(require("./routes/banco.routes"));

var _carro = _interopRequireDefault(require("./routes/carro.routes"));

var _chofer = _interopRequireDefault(require("./routes/chofer.routes"));

var _oTMantencion = _interopRequireDefault(require("./routes/oTMantencion.routes"));

var _tarjetaCredito = _interopRequireDefault(require("./routes/tarjetaCredito.routes"));

var _mantencionNormal = _interopRequireDefault(require("./routes/mantencionNormal.routes"));

var _programaDeMantencion = _interopRequireDefault(require("./routes/programaDeMantencion.routes"));

var _obra = _interopRequireDefault(require("./routes/obra.routes"));

var _camionChofer = _interopRequireDefault(require("./routes/camionChofer.routes"));

var _sueldoChofer = _interopRequireDefault(require("./routes/sueldoChofer.routes"));

var _eventoChofer = _interopRequireDefault(require("./routes/eventoChofer.routes"));

var _historiaChofer = _interopRequireDefault(require("./routes/historiaChofer.routes"));

var _empleado = _interopRequireDefault(require("./routes/empleado.routes"));

var _costoDistribuir = _interopRequireDefault(require("./routes/costoDistribuir.routes"));

var _recorrido = _interopRequireDefault(require("./routes/recorrido.routes"));

var _tarifa = _interopRequireDefault(require("./routes/tarifa.routes"));

var _programa = _interopRequireDefault(require("./routes/programa.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])(); //importing routers

//middlewares
app.use((0, _express.json)());
app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
app.set('port', process.env.PORT || 4000); //routes

app.use('/api/camion', _camion["default"]);
app.use('/api/carro', _carro["default"]);
app.use('/api/odometro', _odometro["default"]);
app.use('/api/segurocamion', _seguroCamion["default"]);
app.use('/api/cliente', _cliente["default"]);
app.use('/api/boletacombustible', _boletaCombustible["default"]);
app.use('/api/banco', _banco["default"]);
app.use('/api/chofer', _chofer["default"]);
app.use('/api/otmantencion', _oTMantencion["default"]);
app.use('/api/tarjetacredito', _tarjetaCredito["default"]);
app.use('/api/mantencionnormal', _mantencionNormal["default"]);
app.use('/api/programademantencion', _programaDeMantencion["default"]);
app.use('/api/obra', _obra["default"]);
app.use('/api/camionchofer', _camionChofer["default"]);
app.use('/api/sueldochofer', _sueldoChofer["default"]);
app.use('/api/eventochofer', _eventoChofer["default"]);
app.use('/api/historiachofer', _historiaChofer["default"]);
app.use('/api/empleado', _empleado["default"]);
app.use('/api/costodistribuir', _costoDistribuir["default"]);
app.use('/api/recorrido', _recorrido["default"]);
app.use('/api/tarifa', _tarifa["default"]);
app.use('/api/programa', _programa["default"]);
var _default = app;
exports["default"] = _default;
module.exports = app;