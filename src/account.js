export const account = `<div class="container-login">
    <div id="A-logo-container">
        <img id="A-logo" src="./images/logoGris.png" alt="Logo"> 
    </div>
    <form class="input-section" id="input-section-account">
        <div class="input-login">
            <input id="A-input-nameUser" class="A-input-nameUser" type="text" maxlength=30 placeholder="Nombre de usuario" required></input>
            <br>
        </div>
        <div class="input-login">
            <input id="A-input-mail" class="A-input-mail" type="email" maxlength=50 placeholder="Correo electrónico" required></input>
        </div>
        <div class="input-login">
            <input id="A-input-password" class="A-input-password" type="password" maxlength=16 placeholder="Contraseña" required></input>
            <img src="./images/visibility.png" class="visibility" id="visibility-account-password">          
        </div>
        <div class="error-input-container"><p class="A-error-input" id="A-error-password">La contraseña debe tener al menos 8 caracteres</p></div>
        <div class="input-login">
            <input id="A-input-password-confirm" class="A-input-password-confirm" type="password" maxlength=16 placeholder="Confirmar contraseña" required></input>
            <img src="./images/visibility.png" class="visibility" id="visibility-confirm-password"> 
        </div>
        <div class="error-input-container"><p class="A-error-input" id="A-error-confirmPassworrd">Las contraseñas no coinciden</p></div>
        <div class="singin">
            <a class="aboutUser">La siguiente información aparecerá en tu perfil:</a>
        </div>
        <div class="input-login">
            <input id="A-input-aboutme" class="A-input-aboutme" type="text" maxlength=140 placeholder="Sobre mi"></input>
        </div>
        <div class="button-login">
            <button class="account-button" id="A-createAcount-button" type"submit">Crear cuenta</button>
        </div>
    </form>
</div>`;
