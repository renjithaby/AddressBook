/**
 * Created by rabby on 26/09/2017.
 */
class dataApi {
    constructor() {

    }


    static login(usr) {

        const request = new Request("http://10.93.17.59:3000/authenticate",{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ username: usr.username, password : usr.password})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }


    static register(usr) {

        const request = new Request("http://10.93.17.59:3000/"+'adduser',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({username: usr.username, password : usr.password,email: usr.email})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }




}

export default dataApi;


