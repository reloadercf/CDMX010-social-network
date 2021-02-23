import {registrarse, acceso, loginGoogle} from './firebase.js';

//formulario para crear tu cuenta.
export const login = (`
    <div class='theLogin'>
        <div class='logo2'>
            <img src='assets/logo-login.png'>
        </div>
        <h2>Bienvenidx, crea tu cuenta</h2>
        <div class='formule'>
            <h3>Registro</h3>
            <form class='flexCenter2'>
              <input type="email" id="email" class='formLogin' placeholder="e-mail"/>
              <input type="password" id="password" class='formLogin' placeholder="password"/>
              <button id='CheckIn' class='buttons2'>Enviar</button>
            </form>
            
            <!--verificar PASSWORD-->
        </div>  
    </div>
    `);


const buttonLogin = document.getElementById('CheckIn')
      
buttonLogin?.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('lo que sea');
    });




export const myFunction1 = () => {
  // aqui tu codigo
  console.log('Hola mundote!');
};

  
  
  

//faltan las promesas
