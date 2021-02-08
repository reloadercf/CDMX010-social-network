export const account = `<div class="container-login">
<div class="logo-login">
<img id="A-logo" src="./images/logoGris.png" alt="Logo"> 
</div>
<div class="input-section">
<div class="input-login">
    <input id="A-input-nameUser" class="A-input-nameUser" type="text" maxlength=30 placeholder="Nombre de usuario" required></input><br>
</div>
<div class="input-login">
    <input id="A-input-mail" class="A-input-mail" type="email" maxlength=50 placeholder="Correo electrónico" required></input>
</div>
<div class="input-login">
    <input id="A-input-password" class="A-input-password" type="password" maxlength=16 placeholder="Contraseña" required></input>
</div>
<div class="input-login">
    <input id="A-input-password-confirm" class="A-input-password-confirm" type="password" maxlength=16 placeholder="Confirmar contraseña" required></input>
</div>
<div class="singin">
<a class="aboutUser">La siguiente información aparecerá en tu perfil:</a>
</div>
<div class="input-login">
    <input id="A-input-aboutme" class="A-input-aboutme" type="text" maxlength=140 placeholder="Sobre mi"></input>
</div>
<div class="button-login">
<button class="account-button" id="A-createAcount-button" type"submit">Crear cuenta</button>
</div>
</div>
</div>`

export const createAccount= ()=>{
    //SE ASIGNA EL EVENTO CLICK AL BOTÓN DE REGISTRO///
    let submitAccountButton= document.getElementById('A-createAcount-button');
        submitAccountButton.addEventListener('click', ()=>{
            //SE OBTIENEN LOS VALORES DE LOS INPUTS//
            let newMail=document.getElementById('A-input-mail').value;
            let createPassword= document.getElementById('A-input-password').value;
            console.log(newMail);
            console.log(createPassword);
            //SE LLAMA A LA VARIABE 'auth' PARA APLICAR LOS MÉTODOS DE FIREBASE
            auth
                .createUserWithEmailAndPassword(newMail, createPassword)
                .then(userCredential =>{
                    console.log('¡Registro exitoso!')
                    alert('¡Registro exitoso!')
                })
        })
}