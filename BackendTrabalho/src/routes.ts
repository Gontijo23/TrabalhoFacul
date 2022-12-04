import { Router, Request, Response } from "express";
import EventsControllers from "./controllers/EventsControllers";


const routes = Router();
let keyword: string = 'safe-guard';
let id: string = '9999';
let pagina : string = '1';


// rota da home
routes.get('/eventos', EventsControllers.buscarEventos);

// rotas para pesquisa por palavra chave
routes.post('/pesquisa/:keyword', (req: Request, res: Response) => {
    keyword = req.params['keyword'];
    keyword = keyword.replace('%20', '+');
    res.status(200).send({"status": "received"})});
routes.get('/eventos', EventsControllers.buscarEventoPorPalavraChave);

export {routes, keyword, id, pagina};