// Este es el punto de entrada de tu aplicacion
import {getRouter, onNavigate } from "./routing.js";
import {logoutfunction} from "./logout.js";

//RESNDERIZAR "Login" en el div "root" POR DEFAULT AL INICIAR LA PÁGINA//
let currentPathname = window.location.pathname;
onNavigate(currentPathname);

//ENLACES PARA ACCEDER A LAS SECCIONES//
let loginLink = document.getElementById('log');
let accountLink = document.getElementById('acc');
let homeLink = document.getElementById('hom');
let perfilLink = document.getElementById('per');
let logooutLink =document.getElementById('logout');

//FUNCIONES QUE RENDERIZAR CADA SECCIÓN// 
getRouter(loginLink, '/');
getRouter(accountLink, '/account');
getRouter(homeLink, '/home');
getRouter(perfilLink, '/perfil');
logoutfunction();

//NAVBAR
let desplegar = document.getElementById("menu");

desplegar.onclick = function () {
    var navbar = document.getElementById("nav"); 
    navbar.classList.toggle("show");
};