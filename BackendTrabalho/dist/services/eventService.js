"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../keys");
const routes_1 = require("../routes");
class EventService {
    constructor() {
        // sugestoes de eventos
        this.getEvent = (0, axios_1.default)(`https://app.ticketmaster.com/discovery/v2/suggest.json?apikey=${keys_1.key}`)
            .then((res) => {
            const data = res.data.results;
            return data;
        })
            .catch(error => console.log(error));
        //Busca os eventos por uma palavra chave
        this.getEventByKeyword = axios_1.default.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${routes_1.keyword}&apikey=${keys_1.key}`)
            .then((res) => {
            const data = res.data.results;
            return data;
        })
            .catch(error => console.log(error));
    }
}
exports.default = EventService;
