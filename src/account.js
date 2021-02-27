import { loginVisibility } from './loginVisibility.js';
import { openModal } from './modal.js';
import { ErrorAccount, SuccessAccount } from './modalError.js';
import { saveInfoUser } from './userColection.js';

export const account = `<div class="container-login">
    <div id="A-logo-container">
        <img id="A-logo" src="./images/logoGris.png" alt="Logo"> 
    </div>
    <form class="input-section" id="input-section-account">
        <div class="input-login">
            <input id="A-input-nameUser" class="A-input-nameUser" type="text" maxlength=30 placeholder="Nombre de usuario" required></input>
            <br>
        </div>
        <div class="input-login">
            <input id="A-input-mail" class="A-input-mail" type="email" maxlength=50 placeholder="Correo electrónico" required></input>
        </div>
        <div class="input-login">
            <input id="A-input-password" class="A-input-password" type="password" maxlength=16 placeholder="Contraseña" required></input>
            <img src="./images/visibility.png" class="visibility" id="visibility-account-password">          
        </div>
        <div class="error-input-container"><p class="A-error-input" id="A-error-password">La contraseña debe tener al menos 8 caracteres</p></div>
        <div class="input-login">
            <input id="A-input-password-confirm" class="A-input-password-confirm" type="password" maxlength=16 placeholder="Confirmar contraseña" required></input>
            <img src="./images/visibility.png" class="visibility" id="visibility-confirm-password"> 
        </div>
        <div class="error-input-container"><p class="A-error-input" id="A-error-confirmPassworrd">Las contraseñas no coinciden</p></div>
        <div class="singin">
            <a class="aboutUser">La siguiente información aparecerá en tu perfil:</a>
        </div>
        <div class="input-login">
            <input id="A-input-aboutme" class="A-input-aboutme" type="text" maxlength=140 placeholder="Sobre mi"></input>
        </div>
        <div class="button-login">
            <button class="account-button" id="A-createAcount-button" type"submit">Crear cuenta</button>
        </div>
    </form>
</div>`;

// FUNCIÓN PARA REGISTRARSE CON CORREO ELECTRÓNICO Y CONTRASEÑA//
export const createAccount = () => {
  const accountForm = document.getElementById('input-section-account');
  // Para detener la acción del fotm///
  accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  // Se asigna el evento "Click" al botón de registro///
  const submitAccountButton = document.getElementById('A-createAcount-button');
  submitAccountButton.addEventListener('click', () => {
    // Se obtienen los valores de los inputs
    const newMail = document.getElementById('A-input-mail').value;
    const createPassword = document.getElementById('A-input-password').value;
    const inputConfirmPassword = document.getElementById('A-input-password-confirm').value;
    const nameUser = document.getElementById('A-input-nameUser').value;
    const aboutUser = document.getElementById('A-input-aboutme').value;
    document.getElementById('A-error-password').style.display = 'none';
    document.getElementById('A-error-confirmPassworrd').style.display = 'none';
    if (nameUser !== '' && createPassword.length >= 8) {
      if (createPassword === inputConfirmPassword) {
        // Se llama la variable 'auth' para aplicar los métodos de Firebase
        auth
          .createUserWithEmailAndPassword(newMail, createPassword)
          .then((userCredential) => {
            openModal(SuccessAccount);
            const loginlink = document.getElementById('log');
            loginlink.click();
            const uidUser = userCredential.user.uid;
            saveInfoUser(newMail, uidUser, createPassword, nameUser, aboutUser, 'urlimg');
          })
          .catch(() => {
            openModal(ErrorAccount);
          });
      } else {
        document.getElementById('A-error-confirmPassworrd').style.display = 'block';
      }
    } else if (createPassword.length < 8) {
      document.getElementById('A-error-password').style.display = 'block';
    }
  });
  const showAccountPassword = document.getElementById('visibility-account-password');
  const accountPasswordInput = document.getElementById('A-input-password');
  const showConfirmPassword = document.getElementById('visibility-confirm-password');
  const confirmPasswordInput = document.getElementById('A-input-password-confirm');
  // Se ejecuta la función de visibility//
  loginVisibility(showAccountPassword, accountPasswordInput);
  loginVisibility(showConfirmPassword, confirmPasswordInput);
};
