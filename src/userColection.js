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

/*export const renderInfoUser=(user)=>{
    const nameContainer= document.getElementById('infoContainer');
    window.addEventListener('DOMContentLoaded', async(e) =>{
        const doc = await getInfoUser(user.email);
            let postsData=doc.data();
            console.log(doc.data());
            
        });
    }*/