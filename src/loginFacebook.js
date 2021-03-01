import { ErrorLoginFacebook } from './modalError.js';
import { openModal } from './modal.js';

export const loginFacebook = () => {
  // Se va a ejecutar al momento de hacerle click a la imagen de FB
  const btnFacebook = document.getElementById('facebook-login');
  btnFacebook.addEventListener('click', () => {
    // console.log('facebook login');
    // Se crea un  nuevo usuario con la información de FB.
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
    // El parámetro que va dentro de .then es "result"
      .then(() => {
        // console.log(result);
        const homelink = document.getElementById('hom');
        homelink.click();
      })
      // El parametro que va dentro de .catch es "err"
      .catch(() => {
        // console.log(err);
        openModal(ErrorLoginFacebook);
      });
  });
};
