import { openModal } from './modal.js';
import { ErrorLoginGoogle } from './modalError.js';

export const loginGoogle = () => {
  const btnGoogle = document.getElementById('google-login');
  btnGoogle.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      // El parámetro dentro de .then es "result"
      .then(() => {
        // console.log('inicio de sesión con google');
        const homelink = document.getElementById('hom');
        homelink.click();
      })
      // El parámetro dentro de .catch es "error"
      .catch(() => {
        // console.log(err);
        openModal(ErrorLoginGoogle);
      });
  });
};
