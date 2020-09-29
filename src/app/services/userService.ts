import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class UserService {
    constructor() { }
    getData() {
        let data = new Array();
        axios.get('http://localhost:3000/users')
            .then(resp => {
                resp.data.map((user) => {
                    data.push(user);
                })
            })
            .catch(error => {
                console.log(error);
            });
        return data;
    }
    addUser(userdata) {
        axios.post('http://localhost:3000/users', userdata).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }
}