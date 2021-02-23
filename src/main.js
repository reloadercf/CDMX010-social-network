import {registrarse, acceso} from './lib/login.js'
import { onNavigate } from './routers.js';





const theHome1 = () => {
    console.log('HOla');
    let login = document.getElementById('login');
    console.log(login);
    login.addEventListener('click', (e) => {
        //e.preventDefault();
        onNavigate('/login')
    });
};

 window.addEventListener('click', theHome1());

const registrarseFuncion = () =>{
    console.log("funcion registrarse");
    let registrarse1 = document.getElementById("registrarse");
    console.log(registrarse1);
    registrarse1.addEventListener('click', (e) => {
        //e.preventDefault();
        onNavigate('/wall')
    });
};
        //e.preventDefault();
        //onNavigate('/wall')
        //registrarse();
   // });


window.addEventListener("DOMContentLoaded",registrarseFuncion());
/*export const theLogin = (user) => {
let two  = login(user)
return two
}; */