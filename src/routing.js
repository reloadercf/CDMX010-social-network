import { home } from './home.js';
import { login, loginWithMail } from './login.js';
import { perfil } from './perfil.js';
import { account, createAccount } from './account.js';

//OBJETO QUE TIENE LOS PATHNAMES DE LAS SECCIONES//
export const routes = {
    '/': home,
    '/login': login,
    '/account': account,
    '/perfil': perfil
};

//DIV DONDE SE RENDARIZAN TODAS LAS SECCIONES//
const rootDiv = document.getElementById('root');

//EVENTO CLICK QUE DEFINE EL PATHNAME QUE SE RENDERIZARÁ //
export function getRouter(linkId,PathName){
    linkId.addEventListener( 'click', () =>{
        onNavigate(PathName); return false;
    })
    }
//FUNCIÓN QUE RENDERIZA EL PATHNAME INDICADO
export const onNavigate =(pathname)=>{
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML= routes[pathname];
    if(routes[pathname]== login){
        console.log('Ingresar')
        loginWithMail();
    }else if(routes[pathname]== account){
        console.log('Registrarse');
        createAccount();
    } else{
        console.log('Es diferente');
    }
}



