//LINKS DEL NAV//
let logoutLink = document.getElementById('logout');
let loginLink = document.getElementById('log');
let accountLink = document.getElementById('acc'); 
let homeLink = document.getElementById('hom');
let perfilLink = document.getElementById('per');

//Cuando el usuario se logea y entra al home esto es lo que ve://
export const navLinkVisibilityLogin = () => {
    logoutLink.style.display = "block";
    loginLink.style.display = "none";
    accountLink.style.display = "none";  
    homeLink.style.display = "block";
    perfilLink.style.display = "block";  
}