import { auth, firestore } from './firebase.js';

// Obtenemos la información del "usermail" de la colección de procfile
// desde Firebase (Segunda columna de Firebase)
export const getInfoUser = (usermail) => {
  firestore.collection('procfile').doc(usermail).get();
};

// Enviamos la información desglosada que corresponde al correo electronico
// que obtenemos anteriormente (tercera columna de Firebase)
export const saveInfoUser = (usermail, uid, password, name, aboutUser, imgUser) => {
  firestore.collection('procfile').doc(usermail).set({
    usermail,
    uid,
    password,
    name,
    aboutUser,
    imgUser,
  });
};

// NOTAAAAAAAAAAAA! Se le pone el nombre al perfil y al home del usuario
export const onAuthDataUser = () => {
  // Cuando el usuario se acaba de logear y si se encuentra autenticado, ejecuta:
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const user = auth.currentUser;
      // Obtenemos su correo electronico para mostrarlo
      const userEmail = user.email;
      // console.log(user, userEmail);
      document.getElementById('p-userName').innerHTML = userEmail;
      // const procfileUser= await getNameUserColecction(userEmail);
      // console.log(procfileUser.data());
    } else {
      // console.log('sesión no iniciada');
    }
  });
};
