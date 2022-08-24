import axios from 'axios';
import authHeader from './authHeader'
const API_URL = 'http://http://game-night.westeurope.cloudapp.azure.com:5000/api/';
class APIklici {

    getDogodki(uporabniskoIme) {
        return axios.get(API_URL + 'dogodki/' + uporabniskoIme, { headers: authHeader() });
    }
    getIgre(uporabniskoIme) {
        return axios.get(API_URL + 'igre/' + uporabniskoIme, { headers: authHeader() });
    }
    getDogodek(uporabniskoIme, idDogodek) {
        return axios.get(API_URL + 'dogodki/' + uporabniskoIme + '/' + idDogodek, { headers: authHeader() });
    }
    getIgra(uporabniskoIme, idIgra) {
        return axios.get(API_URL + 'igre/' + idIgra, { headers: authHeader() });
    }
    getUporabnik(uporabniskoIme) {
        return axios.get(API_URL + 'uporabnik/' + uporabniskoIme, { headers: authHeader() });
    }
    postIgra(uporabniskoIme, igra) {
        return axios.post(API_URL + 'igre/' + uporabniskoIme, igra,{ headers: authHeader() });
    }
    postDogodek(uporabniskoIme, dogodek) {
        return axios.post(API_URL + 'dogodki/' + uporabniskoIme, dogodek,{ headers: authHeader() });
    }
}
export default new APIklici();
