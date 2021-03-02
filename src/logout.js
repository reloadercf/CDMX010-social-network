import { onNavigate } from './routing.js';
import { auth } from './firebase.js';

export const logoutfunction = () => {
  const btnlogout = document.getElementById('logout');
  btnlogout.addEventListener('click', () => {
    // Cuando seleccionemos el link de logout, de acuerdo a la utenticación
    // del usuario "auth", ejecutaremos el método de firevabe "songOut"
    auth.signOut().then(() => {
      // console.log('sign out');
      onNavigate('/');
    });
  });
};
