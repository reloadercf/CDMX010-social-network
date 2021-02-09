import { onNavigate } from "./routing.js";

//LINKS DEL NAV//
let loginLink= document.getElementById('log');
let accountLink= document.getElementById('acc');
export const logoutfunction =()=>{
     const btnlogout = document.getElementById('logout');
    btnlogout.addEventListener('click',e =>{
        auth.signOut().then(()=>{
            console.log('sign out');
            onNavigate("/");
            btnlogout.style.display="none";
            loginLink.style.display="block";
            accountLink.style.display="block";
        })
    })
}
   