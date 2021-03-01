import { onNavigate } from './routing.js';

export const logoutfunction = () => {
  const btnlogout = document.getElementById('logout');
  btnlogout.addEventListener('click', () => {
    auth.signOut().then(() => {
      // console.log('sign out');
      onNavigate('/');
    });
  });
};
