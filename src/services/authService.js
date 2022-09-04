import axios from 'axios';
const API_URL = 'http://20.86.63.141:5000/api/';
class AuthService {
    login(user) {
        console.log("axios")
        console.log(user.username)
        console.log(user.password)
        const username = user.username;
        const password = user.password;
        return axios.get(API_URL + 'login', {auth: {
            username: username, password: password
            }},)
            .then(response => {
                console.log(response);
                    
                    localStorage.setItem('user', JSON.stringify(response.data));
                    if(response.data){
                    localStorage.setItem('userData', JSON.stringify({
                        username: username, password: password

                    })
                    );}

                return response.data;
            
    }).catch(e => {console.log(e);} )}
    logout() {
        console.log("odjavljanje")
        localStorage.removeItem('user')
        localStorage.removeItem(('userData'))
    }
    register(userData) {
        return axios.post(API_URL + 'registracija', userData);
    }
}
export default new AuthService();
