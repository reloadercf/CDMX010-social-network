//LINKS DEL NAV//
let logoutLink =document.getElementById('logout');
let loginLink = document.getElementById('log');
let accountLink = document.getElementById('acc'); 

export const navLinkVisibilityLogin = () => {
    logoutLink.style.display = "block";
    loginLink.style.display = "none";
    accountLink.style.display = "none";
};