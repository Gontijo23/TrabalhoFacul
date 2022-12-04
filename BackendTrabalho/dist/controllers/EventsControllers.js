"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventService_1 = __importDefault(require("../services/eventService"));
const Data_1 = require("../models/Data");
exports.default = {
    // Retornar um array com 20 eventos
    buscarEventos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let array_eventos = [];
            const fetch = new eventService_1.default();
            const response = yield fetch.getEvent;
            response.forEach((element) => {
                const event = new Data_1.Data();
                event.id = element.id;
                event.nome = element.title;
                event.descricao = element.overview;
                array_eventos.push(event);
            });
            return res.json(array_eventos);
        });
    },
    // retornar um array de 10 eventos buscados por palavra chave
    buscarEventoPorPalavraChave(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let resultado_pesquisa = [];
            const fetch = new eventService_1.default();
            const response = yield fetch.getEventByKeyword;
            try {
                for (let i = 0; i <= 10; i++) {
                    const data = new Data_1.Data();
                    data.id = response[i].id;
                    data.nome = response[i].title;
                    if (response[i].overview == undefined || response[i].overview == '') {
                        data.descricao = "Descrição não encontrada.";
                    }
                    else {
                        data.descricao = response[i].overview;
                    }
                    resultado_pesquisa.push(data);
                }
            }
            catch (error) {
                console.log(error);
            }
            return res.json(resultado_pesquisa);
        });
    },
};
