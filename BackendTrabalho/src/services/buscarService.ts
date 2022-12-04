import axios from "axios";
import { key } from "../keys"

class BuscarService {
    get = axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${key}`)
    .then(response => {
        return response.data;
    })
    .catch(error => console.log(error));
}

export default BuscarService;