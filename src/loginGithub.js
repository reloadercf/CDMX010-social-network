import { ErrorLoginGithub } from './modalError.js';
import { openModal } from './modal.js';

export const loginGithub = () => {
  const btnGithub = document.getElementById('github-login');
  btnGithub.addEventListener('click', () => {
    // console.log('Github login');
    const provider = new firebase.auth.GithubAuthProvider();
    auth
      .signInWithPopup(provider)
      // El parámetro dentro de .then es "result"
      .then(() => {
        // console.log('inicio de sesión con Github');
        const homelink = document.getElementById('hom');
        homelink.click();
      })
      // El parámetro dentro de .catch es "error"
      .catch(() => {
        openModal(ErrorLoginGithub);
      });
  });
};
