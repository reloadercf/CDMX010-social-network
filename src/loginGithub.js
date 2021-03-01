import { onNavigate } from './routing.js';
import { ErrorLoginGithub } from './modalError.js';
import { openModal } from './modal.js';

export const loginGithub = () => {
  const btnGithub = document.getElementById('github-login');
  btnGithub.addEventListener('click', () => {
    // console.log('Github login');
    const provider = new firebase.auth.GithubAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log('inicio de sesión con Github');
        // alert('¡Hola de nuevo! BIENVENIDA');
        // navLinkVisibilityLogin();
        onNavigate('/home');
      })
      .catch((error) => {
        openModal(ErrorLoginGithub);
      });
  });
};
