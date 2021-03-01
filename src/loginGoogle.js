import { openModal } from './modal.js';
import { ErrorLoginGoogle } from './modalError.js';
import { onNavigate } from './routing.js';

export const loginGoogle = () => {
  const btnGoogle = document.getElementById('google-login');
  btnGoogle.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    // Nota. "singInWithPopup" es un método de firebase, que es el que se vea la ventana para
    // aceptar acceder con Firebase, también podriamos solicitar que le llegara
    // un enlace a su corrreo.
    auth.signInWithPopup(provider)
      .then((result) => {
        // console.log('inicio de sesión con google');
        // alert('¡Hola de nuevo! BIENVENIDA');
        // navLinkVisibilityLogin();
        onNavigate('/home');
      })
      .catch((err) => {
        // console.log(err);
        openModal(ErrorLoginGoogle);
      });
  });
};
