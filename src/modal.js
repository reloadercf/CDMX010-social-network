import { ErrorAccount, ErrorLoginMail } from './modalError.js';
// Tache para cerrar el modal
const modal = document.querySelectorAll('.modal')[0];
const modalContainer = document.getElementById('modal-container');
const modalAlert = document.getElementById('modal-alert');

export const openModal = (mensajeError) => {
  // visibilidad de la transparencia del modal
  modalContainer.style.opacity = '1';
  modalContainer.style.visibility = 'visible';
  // toggle, quita o pone la clase "modal-close"
  modal.classList.toggle ('modal-close');
  modalAlert.innerHTML = mensajeError;
  closeModal();

  if (mensajeError === ErrorLoginMail) {
    const otherUserLogin = document.getElementById('otherUser');
    otherUserLogin.addEventListener('click', () => {
      const accountLink = document.getElementById('acc');
      accountLink.click();
      closeModalLink();
    });
  } else if (mensajeError === ErrorAccount) {
    document.getElementById('modalErrorLogin-link').addEventListener('click', () => {
      const loginLink = document.getElementById('log');
      loginLink.click();
      closeModalLink();
    });
    document.getElementById('modalErrorAccount-link').addEventListener('click', () => {
      const accountLink = document.getElementById('acc');
      accountLink.click();
      closeModalLink();
    });
  }
};

export function closeModal() {
  const close = document.getElementById('close');
  close.addEventListener('click', closeModalLink);
};

function closeModalLink() {
  modal.classList.toggle('odal-close');
  modalContainer.style.opacity = '0';
  modalContainer.style.visibility = 'hidden';
};
