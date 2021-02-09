import { onNavigate } from "./routing.js";
export const logoutfunction =()=>{
     const btnlogout = document.getElementById('logout');
    btnlogout.addEventListener('click',e =>{
        auth.signOut().then(()=>{
            console.log('sign out');
            onNavigate("/login");
            btnlogout.style.display="none";
        })
    })
}
   