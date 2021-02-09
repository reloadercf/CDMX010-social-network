import { loginFacebook } from "./loginFacebook.js"
import { loginGoogle } from "./loginGoogle.js"
import { loginVisibility } from "./loginVisibility.js"
import { openModal, closeModal } from "./modal.js"
import { loginGithub } from "./loginGithub.js";
import { onNavigate, getRouter } from "./routing.js";
import { navLinkVisibilityLogin } from "./NavdisplayVisibilityFunctions.js";
// import {openModal, closeModal} from "./modal.js"

export const login = `<div class="container-login">
<div class="logo-login">
<img id="A-logo" src="./images/logoGris.png" alt="Logo"> 
</div>
<form class="input-section" id="input-section-login">
<div class="input-login">
    <input id="login-mail-input" class="A-input-mail" type="email" maxlength=50 placeholder="Email" required></input><br>
</div>
<div class="input-login">
    <input id="login-password-input" class="A-input-password" type="password" maxlength=16 placeholder="Password" required></input>
    <img src="./images/visibility.png" id="visibility">
</div>
<div class="check-login">
<br>
<input type="checkbox" class="checkin">  &nbsp; Recordar usuario</input></div>
<div class="button-login">
<button class="account-button" id="login-mail-button"> Iniciar Sesión</button>
<a href="#" class="new-password">Recuperar contraseña</a>
</div>
</form>
<div class="socialNet-login">
<div class="singin">
<a>Ingresar con:</a>
</div>
<div class="social">
 <img src="./images/fb.png" class="users" id="facebook-login">
 <img src="./images/github.png" class="users" id="github-login">
 <img src="./images/google.png" class="users" id="google-login">
</div> 
</div>
<div class="register-login">
<p>¿No tienes cuenta? <a href="#" id="accountLink" class="beUser">Regístrate</a></p>
</div>
</div>`


export const loginWithMail = () => {
    // PARA DETENER LA ACCIÓN DEL FORM///
    let singupForm = document.getElementById('input-section-login');
    singupForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    //ENLACE DE 'REGISTRO' LLEVA A LA SECCIÓN ACCOUNT PARA REGISTRO///
    let accountLinkLogin= document.getElementById('accountLink');
    getRouter(accountLinkLogin, '/account');
    //SE ASIGNA EL EVENTO CLICK AL BOTÓN DE LOGIN///
    let submitAccountButton= document.getElementById('login-mail-button');
        submitAccountButton.addEventListener ('click', () => {
            //SE OBTIENEN LOS VALORES DE LOS INPUTS//
            let loginMail=document.getElementById('login-mail-input').value;
            let loginPassword= document.getElementById('login-password-input').value;
            console.log(loginMail);
            console.log(loginPassword);         
            //SE LLAMA A LA VARIABE 'auth' PARA APLICAR LOS MÉTODOS DE FIREBASE
            auth
                .signInWithEmailAndPassword(loginMail, loginPassword)
                .then(userCredential =>{
                    console.log('inicio de sesión');
                    alert('¡Hola de nuevo! BIENVENIDA');
                    navLinkVisibilityLogin()
                    onNavigate('/home');
                })   
                .catch(userCredential =>{                    
                    // console.log('Usuario sin registro');
                    openModal();
                    closeModal();
                    // onNavigate('/account');
                })             
        });

    //Visualizar contraseña
    loginVisibility();
    //GOOGLE LOGIN
    loginGoogle();   
    //FACEBOOK LOGIN
    loginFacebook();
    //GITHUB LOGIN
    loginGithub();
}
