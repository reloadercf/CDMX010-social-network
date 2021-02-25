//OBTENER LA INFORMACIÓN DESDE FIREBASE
export const getInfoUser=(usermail)=>{ firestore.collection('procfile').doc(usermail).get();
}
//const querySnapshot =getInfoUser();
//console.log(querySnapshot);

//ENVIAR LA INFORMACIÓN OBTENIDA AL FIREBASE
export const saveInfoUser= (usermail, uid, password, name, aboutUser, imgUser)=>{
    firestore.collection('procfile').doc(usermail).set({
        usermail,
        uid,
        password,
        name,
        aboutUser,
        imgUser
    });
    //let objetoUsuario= getInfoUser(usermail);
    //console.log(objetoUsuario);
}

export const onAuthDataUser= ()=>{
    auth.onAuthStateChanged(async (userAuth) =>{
        if(userAuth){
            let user= auth.currentUser;
            let userEmail= user.email;
            console.log(user,userEmail);
            document.getElementById('p-userName').innerHTML= userEmail;
            //const procfileUser= await getNameUserColecction(userEmail);
                    //console.log(procfileUser.data());
        }else{
            console.log('sesión no iniciada');
        }
    })  
}