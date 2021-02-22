import {myFunction1} from './lib/login.js'
import { onNavigate } from './routers.js';
import { myFunction } from './lib/home.js'
import { myFunction2 } from './lib/home-login.js'

myFunction();
myFunction1();
myFunction2();

//home to login
const createNewUser = () => {
    console.log('HOla');
    let createUser = document.getElementById('newUser');
    console.log(createUser);
    createUser.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/login');
    });
};

window.addEventListener('DOMContentLoaded', () => createNewUser());


//home to home-login
const oldUser1 = () => {
    console.log('HOla');
    let enter = document.getElementById('oldUser');
    console.log(enter);
    enter.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/home-login');
    });
};

window.addEventListener('DOMContentLoaded', () => oldUser1());





