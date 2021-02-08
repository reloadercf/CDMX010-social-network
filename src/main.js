// Este es el punto de entrada de tu aplicacion

import { home } from './home.js';
import { login, loginWithMail } from './login.js';
import { perfil } from './perfil.js';
import { account, createAccount } from './account.js';

//Router

const routes = {
    '/': home,
    '/login': login,
    '/account': account,
    '/perfil': perfil
};

// console.log(routes);
const rootDiv = document.getElementById('root');

rootDiv.innerHTML = routes[window.location.pathname];

//Indicamos la ruta a la que queremos acceder y la renderizamos
const onNavigate =(pathname)=>{
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML= routes[pathname];
    if(routes[pathname]== login){
        console.log('Ingresar')
        loginWithMail();
    }else if(routes[pathname]== account){
        console.log('Registrarse');
        createAccount();
    } else{
        console.log('Es diferente');
    }
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

/*// ENTRAR EN LA  (Login)

let singupForm = document.getElementById('input-section');

// Definimos el Evento, para la obtención de la información en los inputs
singupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = document.getElementById('A-input-mail').value;
    let password = document.getElementById('A-input-password').value;

    console.log(email,password)

    // MÉTODO DE FIREBASE, QUE PERMITE ENVIAR LOS DATOS DEL EMAIL Y PASSWORD PARA CREAR UN USUARIO
    auth.crateUserWithEmailAndPassword(email, password)
    // SI FIREBASE REGISTRÓ CORRECTAMENTE LOS DATOS, NOS VA A REGRESAR LO SIGUIENTE (PROMESA)
    auth.then(userCredential => {
        console.log('Registro exitoso')
    })
    auth.catch(userCredential => {
        console.log('404 PAGE NOT FOUND ):')
    }) 
})*/


