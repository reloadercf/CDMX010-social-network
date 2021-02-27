import { ErrorLoginFacebook } from './modalError.js';
import { openModal } from './modal.js';

export const loginFacebook = () => {
  const btnFacebook = document.getElementById('facebook-login');
  btnFacebook.addEventListener('click', () => {
    // console.log('facebook login');
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
