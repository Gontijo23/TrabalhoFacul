"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../keys");
class BuscarService {
    constructor() {
        this.get = axios_1.default.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${keys_1.key}`)
            .then(response => {
            return response.data;
        })
            .catch(error => console.log(error));
    }
}
exports.default = BuscarService;
