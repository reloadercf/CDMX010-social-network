//LINK 'LOGOUT' DEL NAV//
let logoutLink=document.getElementById('logout');

//FUNCIÓN 
export const loginFacebook = () => {
    const btnFacebook = document.getElementById('facebook-login');
    btnFacebook.addEventListener('click', e =>{
        console.log('facebook login');
        const provider = new firebase.auth.FacebookAuthProvider(); 
        auth.signInWithPopup(provider)
            .then(result =>{
            console.log(result);
            alert('¡Hola de nuevo! BIENVENIDA');
            logoutLink.style.display="block";
            onNavigate('/');
            })
            .catch(err =>{
                console.log(err);
            });
    });
};