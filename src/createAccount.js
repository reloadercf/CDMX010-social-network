import { loginVisibility } from './loginVisibility.js';
import { openModal } from './modal.js';
import { ErrorAccount, SuccessAccount } from './modalError.js';
import { saveInfoUser } from './userColection.js';
// FUNCIÓN PARA REGISTRARSE CON CORREO ELECTRÓNICO Y CONTRASEÑA//
export const createAccount = () => {
  const accountForm = document.getElementById('input-section-account');
  // Para detener la acción del fotm //
  accountForm.addEventListener('submit', (e) => { e.preventDefault(); });
  // Se asigna el evento "Click" al botón de registro//
  const submitAccountButton = document.getElementById('A-createAcount-button');
  submitAccountButton.addEventListener('click', () => {
  // Se obtienen los valores de los inputs//
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
            // console.log(userCredential);
            const uidUser = userCredential.user.uid;
            // console.log(uidUser);
            saveInfoUser(newMail, uidUser, createPassword, nameUser, aboutUser, 'urlimg');
          })
        // Aquí obtenemos el "userCredential" del usuario
          .catch(() => {
            // console.log('Usuario sin registro,userCredential');
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
