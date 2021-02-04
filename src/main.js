// Este es el punto de entrada de tu aplicacion


import { home } from './home.js';
import { login } from './login.js';
import { perfil } from './perfil.js';
import { account } from './account.js';
//Router

const routes = {
    '/': home,
    '/login': login,
    '/account': account,
    '/perfil': perfil};

console.log(routes);
const rootDiv = document.getElementById('root');

rootDiv.innerHTML = routes[window.location.pathname];

//Indicamos la ruta a la que queremos acceder y la renderizamos
const onNavigate =(pathname)=>{
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML= routes[pathname]
}

let loginLink= document.getElementById('log');
let loginPathName= '/login'; 
let accountLink= document.getElementById('acc');
let accountPathName= '/account';
let homeLink= document.getElementById('hom');
let homePathName= '/';
let perfilLink= document.getElementById('per');
let perfilPathName= '/perfil';

getRouter(loginLink, loginPathName);
getRouter(accountLink, accountPathName);
getRouter(homeLink, homePathName);
getRouter(perfilLink, perfilPathName);

function getRouter(linkId,PathName){
linkId.addEventListener( 'click', () =>{
    onNavigate(PathName); return false;
})
}

// NAVBAR

let desplegar = document.getElementById("menu");

desplegar.onclick = function () {

    var navbar = document.getElementById("nav");      
    navbar.classList.toggle("show");
};
