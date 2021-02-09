import { navLinkVisibilityLogin } from "./NavdisplayVisibilityFunctions.js";
export const loginFacebook = () => {
    const btnFacebook = document.getElementById('facebook-login');
    btnFacebook.addEventListener('click', e =>{
        console.log('facebook login');
        const provider = new firebase.auth.FacebookAuthProvider(); 
        auth.signInWithPopup(provider)
            .then(result =>{
            console.log(result);
            alert('¡Hola de nuevo! BIENVENIDA');
            navLinkVisibilityLogin();
            onNavigate('/home');
            })
            .catch(err =>{
                console.log(err);
            });
    });
};