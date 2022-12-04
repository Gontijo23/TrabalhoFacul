import axios from "axios";
import { key } from "../keys";
import { keyword } from "../routes"

class EventService{
    // sugestoes de eventos
    getEvent = axios(`https://app.ticketmaster.com/discovery/v2/suggest.json?apikey=${key}`)
    .then((res) => {
        const data = res.data.results;
        return data;
    })
    .catch(error => console.log(error));

    //Busca os eventos por uma palavra chave
    getEventByKeyword = axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&apikey=${key}`)
    .then((res) => {
        const data = res.data.results; 
        return data;
    })
    .catch(error => console.log(error))
}

export default EventService;