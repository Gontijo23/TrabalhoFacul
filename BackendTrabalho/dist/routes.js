"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagina = exports.id = exports.keyword = exports.routes = void 0;
const express_1 = require("express");
const EventsControllers_1 = __importDefault(require("./controllers/EventsControllers"));
const routes = (0, express_1.Router)();
exports.routes = routes;
let keyword = 'safe-guard';
exports.keyword = keyword;
let id = '9999';
exports.id = id;
let pagina = '1';
exports.pagina = pagina;
// rota da home
routes.get('/eventos', EventsControllers_1.default.buscarEventos);
// rotas para pesquisa por palavra chave
routes.post('/pesquisa/:keyword', (req, res) => {
    exports.keyword = keyword = req.params['keyword'];
    exports.keyword = keyword = keyword.replace('%20', '+');
    res.status(200).send({ "status": "received" });
});
routes.get('/eventos', EventsControllers_1.default.buscarEventoPorPalavraChave);
