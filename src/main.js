// Este es el punto de entrada de tu aplicacion
import { getRouter, onNavigate } from './routing.js';
import { logoutfunction } from './logout.js';

// RESNDERIZAR "Login" en el div "root" POR DEFAULT AL INICIAR LA PÁGINA//
const currentPathname = window.location.pathname;
onNavigate(currentPathname);

// ENLACES PARA ACCEDER A LAS SECCIONES//
const loginLink = document.getElementById('log');
const accountLink = document.getElementById('acc');
const homeLink = document.getElementById('hom');
const perfilLink = document.getElementById('per');
// const logooutLink = document.getElementById('logout');

// FUNCIONES QUE RENDERIZAR CADA SECCIÓN//
getRouter(loginLink, '/');
getRouter(accountLink, '/account');
getRouter(homeLink, '/home');
getRouter(perfilLink, '/perfil');
logoutfunction();

// NAVBAR
const desplegar = document.getElementById('menu');
desplegar.onclick = () => {
  const navbar = document.getElementById('nav');
  navbar.classList.toggle('show');
};
