import { loginFacebook } from './loginFacebook.js';
import { loginGoogle } from './loginGoogle.js';
import { loginVisibility } from './loginVisibility.js';
import { openModal } from './modal.js';
import { loginGithub } from './loginGithub.js';
import { ErrorLoginMail } from './modalError.js';

export const login = `<div class="container-login">
    <div id="A-logo-container">
        <img id="A-logo" src="./images/logoGris.png" alt="Logo"> 
    </div>
    <form class="input-section" id="input-section-login">
        <div class="input-login">
            <input id="login-mail-input" class="A-input-mail" type="email" maxlength=50 placeholder="Email" required></input><br>
        </div>
        <div class="input-login">
            <input id="login-password-input" class="A-input-password" type="password" maxlength=16 placeholder="Password" required></input>
            <img src="./images/visibility.png" class="visibility" id="visibility-login-password">
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
        <p>¿No tienes cuenta? <a href="#" id="accountLink-login" class="beUser">Regístrate</a></p>
    </div>
</div>`;

export const loginWithMail = () => {
  const singupForm = document.getElementById('input-section-login');
  singupForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  // Enlace de 'REGISTRO' que lleva a la sección 'ACCOUNT´para el registro//
  const accountLinkLogin = document.getElementById('accountLink-login');
  accountLinkLogin.addEventListener('click', () => {
    const accountLink = document.getElementById('acc');
    accountLink.click();
  });
  // Se asigna el evento 'click' al botón de LOGIN//
  const submitAccountButton = document.getElementById('login-mail-button');
  submitAccountButton.addEventListener('click', () => {
    // se obtienen los valores de los INPUTS//
    const loginMail = document.getElementById('login-mail-input').value;
    const loginPassword = document.getElementById('login-password-input').value;
    // Se llama la variable 'auth' para aplicar los métodos de Firebase//
    auth
      .signInWithEmailAndPassword(loginMail, loginPassword)
      // En el parametro del .then definimos el "userCredential"
      .then(() => {
        const homelink = document.getElementById('hom');
        homelink.click();
      })
      // El parámetro del .catch es el "error"
      .catch(() => {
        openModal(ErrorLoginMail);
      });
  });
  const showLoginPassword = document.getElementById('visibility-login-password');
  const loginPasswordInput = document.getElementById('login-password-input');
  // Ejecutar visibility//
  loginVisibility(showLoginPassword, loginPasswordInput);
  // GOOGLE LOGIN
  loginGoogle();
  // FACEBOOK LOGIN
  loginFacebook();
  // GITHUB LOGIN
  loginGithub();
};
