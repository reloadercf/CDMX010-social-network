import { openModal } from './modal.js';
import { ErrorLoginGoogle } from './modalError.js';

export const loginGoogle = () => {
  // Cuando se haga click en la imagen de google, se ejecutará lo sigueinte:
  const btnGoogle = document.getElementById('google-login');
  btnGoogle.addEventListener('click', () => {
    // Se registrará el usuario con Google, creando en la colección de firebase un nuevo perfil.
    // Nota. "GoogleAuthProvider" es un método de Firebase
    const provider = new firebase.auth.GoogleAuthProvider();
    // Nota. "singInWithPopup" es un método de firebase, que es el que se vea la ventana para
    // aceptar acceder con Firebase, también podriamos solicitar que le llegara
    // un enlace a su corrreo.
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
