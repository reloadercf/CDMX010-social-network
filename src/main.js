// Este es el punto de entrada de tu aplicacion
import { routes, getRouter } from "./routing.js";
import {logoutfunction} from "./logout.js";
import { loginWithMail } from "./login.js";

//RESNDERIZAR "Login" en el div "root" POR DEFAULT AL INICIAR LA PÁGINA//
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];
console.log('Ingresar')
loginWithMail();

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
logooutLink.style.display="none";

//NAVBAR
let desplegar = document.getElementById("menu");

desplegar.onclick = function () {
    var navbar = document.getElementById("nav"); 
         
    navbar.classList.toggle("show");
};
//MODAL

// let closeModal = document.getElementById("close");
// let openModal = document.getElementById("modal-open");
// let modal = document.querySelectorAll(".modal")[0];
// let modalContainer = document.getElementById("modal-container");

// openModal.addEventListener("click", function (e){
//     e.preventDefault();
//     // visibilidad de la transparencia del modal
//     modalContainer.style.opacity = "1";
//     modalContainer.style.visibility = "visible";
//     // toggle, quita o pone la clase "closemodal"
//     modal.classList.toggle = ("closeModal");
// });

// closeModal.addEventListener("click", function(){
//     modal.classList.toggle("closeModal");
//     modalContainer.style.opacity = "0";
//     modalContainer.style.visibility = "hidden";
// })

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


