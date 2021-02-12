//LINKS DEL NAV//
let logoutLink = document.getElementById('logout');
let loginLink = document.getElementById('log');
let accountLink = document.getElementById('acc'); 
let homeLink = document.getElementById('hom');
let perfilLink = document.getElementById('per');

//Cuando el usuario se logea y entra al home esto es lo que ve://
export const navLinkVisibilityLogin = () => {
    logoutLink.style.display= "block";
    homeLink.style.display= 'block';
    perfilLink.style.display='block';
    loginLink.style.display = "none";
    accountLink.style.display = "none";  
}
export const navLinkVisibilityWithoutLogin= ()=>{
    logoutLink.style.display="none";
    homeLink.style.display='none';
    perfilLink.style.display='none';
    loginLink.style.display = "block";
    accountLink.style.display = "block";
}