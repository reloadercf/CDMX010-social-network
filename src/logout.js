import { onNavigate } from "./routing.js";

//Links del "NAV"//
let loginLink = document.getElementById('log');
let accountLink = document.getElementById('acc');
let homeLink = document.getElementById('hom');
let perfilLink = document.getElementById('per');

export const logoutfunction = () => {
    const btnlogout = document.getElementById('logout');

    btnlogout.addEventListener('click', e => {
        auth.signOut().then(() => {
            console.log('sign out');
            onNavigate("/");

            //Lo que se ve del navbar al seleccionar el logout//
            btnlogout.style.display="none";
            loginLink.style.display="block";
            accountLink.style.display="block";
            homeLink.style.display = "none";
            perfilLink.style.display = "none";  
        })
    });
};   