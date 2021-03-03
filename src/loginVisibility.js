// Función para ver u ocultar la contraseña
export const loginVisibility = (btnVisibility, inputPassword) => {
  // Cuando le demos click al ojo, se ejecuta lo siguiente:
  btnVisibility.addEventListener('click', () => {
    // Si el input del password es tipo password, entonces cambiará
    // a tipo texto y cambiará la imagen.
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      btnVisibility.src = './images/visibility_off.png';
    } else {
      inputPassword.type = 'password';
      btnVisibility.src = './images/visibility.png';
    }
  });
};
