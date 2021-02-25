import { myFunction1 } from './lib/login.js';
import { onNavigate } from './routers.js';
import { myFunction } from './lib/home.js';
import { myFunction2 } from './lib/home-login.js';
import { registrarse } from './firebase.js';

myFunction();
myFunction1();
myFunction2();

// Función para mandar llamar el id que se usa para el evento para ir de home a login.
const createNewUser = () => {
  const createUser = document.getElementById('newUser');

  createUser.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/login');
  });
};

window.addEventListener('DOMContentLoaded', () => createNewUser());

// Función para mandar llamar el id que se usa para el evento para ir de home a home-login.
const oldUser1 = () => {
  const enter = document.getElementById('oldUser');

  enter.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/home-login');
  });
};

window.addEventListener('DOMContentLoaded', () => oldUser1());

// login a wall
const buttonLogin = () => {
  const youLogin = document.getElementById('checkIn');

  youLogin.addEventListener('click', (e) => {
    e.preventDefault();

    registrarse();
  });
};

window.addEventListener('DOMContentLoaded', () => buttonLogin());
