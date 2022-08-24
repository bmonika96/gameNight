import axios from 'axios';
const API_URL = 'http://20.86.63.141:5000/api/';
class AuthService {
    login(user) {
        console.log("axios")
        console.log(user.username)
        console.log(user.password)
        const username = user.username;
        const password = user.password;
        const basicAuth = 'Basic ' + btoa(username + ':' + password);
        return axios.get(API_URL + 'login', {auth: {
            username: username, password: password
            }},)
            .then(response => {
                console.log(response)
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        return axios.post(API_URL + 'registracija', {
            uporabnisko_ime: user.uporabnisko_ime,
            email: user.email,
            geslo: user.geslo,
            ime:user.ime,
            priimek: user.priimek
        });
    }
}
export default new AuthService();
