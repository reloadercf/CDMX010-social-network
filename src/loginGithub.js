import { navLinkVisibilityLogin } from "./NavdisplayVisibilityFunctions.js";

export const loginGithub = ()=>{
    const btnGithub = document.getElementById('github-login');
    btnGithub.addEventListener('click', e =>{
        console.log('Github login');
        var provider = new firebase.auth.GithubAuthProvider();
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log('inicio de sesión con Github');
                alert('¡Hola de nuevo! BIENVENIDA');
                navLinkVisibilityLogin();
                onNavigate('/home');
                // ...
            }).catch((error) => {
                alert('inténtalo de nuevo');
            });
    })
}

/*export const loginGithub = ()=>{
    const btnGithub = document.getElementById('github-login');
    btnGithub.addEventListener('click', e =>{
        console.log('Github login');
        var provider = new firebase.auth.GithubAuthProvider();
        auth.signInWithRedirect(provider);
        auth
            .getRedirectResult()
            .then((result) => {
                if (result.credential) {
                    /** @type {firebase.auth.OAuthCredential} */  /*
                    var credential = result.credential;

                    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                    var token = credential.accessToken;
                    // ...
                }
                // The signed-in user info.
                var user = result.user;
            }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            });

        /*.signInWithPopup(provider)
        .then((result) => {
        //@type {firebase.auth.OAuthCredential} 
        var credential = result.credential;

        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = credential.accessToken;

        // The signed-in user info.
        var user = result.user;
        // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
})
}*/
