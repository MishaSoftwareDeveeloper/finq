
import axios from "axios"
export default class Api {
    GetData(){
        return axios.get('https://randomuser.me/api/?results=50');
    }
}