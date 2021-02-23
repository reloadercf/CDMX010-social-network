import {registrarse, acceso, loginGoogle} from './firebase.js';




export const login= `
    <div class='loging'>
    <div>
        <img src='assets/logo-jalo.png'>
        <h2>Bienvenid@, crea tu cuenta</h2>
    </div>
    <div>
        <h3>Registro</h3>
            <input type="email" id="email" placeholder="e-mail"/>
            <input type="password" id="password" placeholder="password"/>
            <button id="registrarse">Registrarse</button>
            <h1 id="login"></h1>
    </div>
    </div>
    `;

let rootLogin = document.getElementById("root");
rootLogin.innerHTML = login;
window.addEventListener("DOMContentLoaded",()=>{
    let botonLogin = document.getElementById("registrarse");
    console.log(botonLogin);
}
)




  //This is the loging´page
/*
  
*/


