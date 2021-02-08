// Este es el punto de entrada de tu aplicacion
import { routes, getRouter } from "./routing.js";

//RESNDERIZAR "Home" en el div "root" POR DEFAULT AL INICIAR LA PÁGINA//
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

//ENLACES PARA ACCEDER A LAS SECCIONES//
let loginLink= document.getElementById('log');
let accountLink= document.getElementById('acc');
let homeLink= document.getElementById('hom');
let perfilLink= document.getElementById('per');

//FUNCIONES QUE RENDERIZAR CADA SECCIÓN// 
getRouter(loginLink, '/login');
getRouter(accountLink, '/account');
getRouter(homeLink, '/');
getRouter(perfilLink, '/perfil');

//NAVBAR
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


