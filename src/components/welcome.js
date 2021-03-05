// aqui exportaras las funciones que necesites

export function bienvenida(target){
  const html=  `<h1>Beauty Culture</h1>
          <div id="dates">
          <h2>Iniciar sesión</h2>
          <form class="form" id="form">
          <h4>Correo electrónico</h4>
          <input type="email" class="form-control" id="useremail" placeholder="Ej: usuario@servidor.com" required>
          <h4>Contraseña</h4>
          <input type="password" class="form-control" id="password" placeholder="Ingrese contraseña:" required>
          <button type="submit" class="btn btn-outline-success">Iniciar</button>
          </div>`

        target.innerHTML= html
};

// const form= document.getElementById('form')
// const useremail= document.getElementById('useremail')
// const password= document.getElementById('password')

// form.addEventListener('submit', function (event){
//  event.preventDefault();
// //  let users= Array[
// //     {
// //        correo: useremail.value,
// //        contraseña: password.value
// //     }
// //  ];
//  console.log('click');
// });
