import { Request, Response } from "express";
import EventService from "../services/eventService";
import BuscarService from "../services/buscarService";
import { Data } from "../models/Data";
import { Titulo } from "../models/Titulo";

export default{
    // Retornar um array com 20 eventos
    async buscarEventos(req: Request, res: Response){
        let array_eventos: {}[] = [];
        const fetch = new EventService();
        const response = await fetch.getEvent;
            response.forEach((element: { id: any; title: string; overview: string; }) => {
                const event = new Data();
                event.id = element.id;
                event.nome = element.title;
                event.descricao = element.overview;
                array_eventos.push(event);
            });
        return res.json(array_eventos);
    },

    // retornar um array de 10 eventos buscados por palavra chave
    async buscarEventoPorPalavraChave(req: Request, res: Response){
        let resultado_pesquisa: {}[] = [];
        const fetch = new EventService();
        const response = await fetch.getEventByKeyword;
        try {
            for(let i = 0; i<= 10; i++){
                const data = new Data();
                data.id = response[i].id;
                data.nome = response[i].title;
                if(response[i].overview == undefined || response[i].overview == ''){
                    data.descricao = "Descrição não encontrada.";
                }else{
                    data.descricao = response[i].overview;
                }
                resultado_pesquisa.push(data);
            }
        } catch (error: any) {
            console.log(error);
        }
        return res.json(resultado_pesquisa);
    },
}