export const login = `<div class="container-login">
<div class="logo-login">
<img id="A-logo" src="./images/logoGris.png" alt="Logo"> 
</div>

<form class="input-section" id="input-section">
<div class="input-login">
    <input id="login-mail-input" class="A-input-mail" type="email" maxlength=50 placeholder="Email" required></input><br>
</div>
<div class="input-login">
    <input id="login-password-input" class="A-input-password" type="password" maxlength=16 placeholder="Password" required></input>
</div>

<div class="check-login">
<br>
<input type="checkbox" class="checkin">  &nbsp; Recordar usuario</input></div>
<div class="button-login">
<button class="account-button" id="login-mail-button"> Iniciar Sesión</button>
<a href="#" class="new-password">Recuperar contraseña</a>
</div>

</form>

<div class="socialNet-login">
<div class="singin">
<a>Ingresar con:</a>
</div>
<div class="social">
 <img src="./images/fb.png" class="users">
 <img src="./images/github.png" class="users">
 <img src="./images/google.png" class="users">
</div> 
</div>
<div class="register-login">
<p>¿No tienes cuenta? <a href="#" class="beUser">Regístrate</a></p>
</div>
</div>`

export const loginWithMail= ()=>{
    // PARA DETENER LA ACCIÓN DEL FORM///
    let singupForm = document.getElementById('input-section');
    singupForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    //SE ASIGNA EL EVENTO CLICK AL BOTÓN DE LOGIN///
    let submitAccountButton= document.getElementById('login-mail-button');
        submitAccountButton.addEventListener('click', ()=>{
            //SE OBTIENEN LOS VALORES DE LOS INPUTS//
            let loginMail=document.getElementById('login-mail-input').value;
            let loginPassword= document.getElementById('login-password-input').value;
            console.log(loginMail);
            console.log(loginPassword);
            //SE LLAMA A LA VARIABE 'auth' PARA APLICAR LOS MÉTODOS DE FIREBASE
            auth
                .signInWithEmailAndPassword(loginMail, loginPassword)
                .then(userCredential =>{
                    console.log('inicio de sesión')
                    alert('¡Hola de nuevo! BIENVENIDA')
                })
        })
}