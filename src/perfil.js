import { templatePost } from "./templatePost.js";

export const perfil =
`<div class="flex-container">
    <div class="flex-menu">
        <div class="subject">
        <p class="menu1">Perfil</p>
        <p class="menu1">Amigos</p>
        <p class="menu1">Favoritos</p>
        <p class="menu1">Ayuda</p>
        <p class="menu1">Configuración</p>            
        <p class="menu1">Sobre GirlTechSOS</p>
        <p class="menu1">Salir</p>
        </div>
    </div>
    <div class="flex-perfil">
        <div class="container">
            <div class="imgContainer">
                <img src="./images/user.png" class="image">
                <div class="info">
                    <div class="userName">Nombre de usuario</div>
                    <div class="about">Información sobre el usuario</div>
                </div>
            </div>
        </div>
        <div class="content">       
        <div class="post">
            <input type="text" placeholder="Nueva publicación" class="newPost" id="newPostPerfil"></input>
            <button class="enter" type"submit" id="publicar">Publicar</button>
        </div>
        <div id="postsContainer">
        </div>
        <div class="flex-noticias">
             <p class="title">Noticias</p>
             <p>Noticia 1</p>
             <img src="./images/picture.png" class="notice"> 
             <p>Noticia 2</p>
             <img src="./images/picture.png" class="notice"> 
             <p>Noticia 3</p>
             <img src="./images/picture.png" class="notice"> 
        </div>
</div>`

//ENVIAR LA INFORMACIÓN OBTENIDA AL FIREBASE
const savePost= (post)=>{
    firestore.collection('posts').doc().set({
        post
    });
    
}

//OBTENER LA INFORMACIÓN DESDE FIREBASE
const getPost=()=> firestore.collection('posts').get();
//PINTAR LA INFORMACIÓN OBTENIDA, EN LA PANT
export const reloadPost=()=>{
    const postContainer= document.getElementById('postsContainer');
    window.addEventListener('DOMContentLoaded', async(e) =>{
        const querySnapshot = await getPost();
        querySnapshot.forEach(doc => {
            let postsData=doc.data();
            console.log(doc.data());
            let postText=postsData.post
            console.log(postText)
            postContainer.innerHTML += templatePost(postsData);
            
        });
    })
}

//OBTENER EL VALOR DE LA PUBLICACIÓN
export const createPost = ()=>{
    let btnPublicar = document.getElementById('publicar');
    let newPostInput= document.getElementById('newPostPerfil');
    btnPublicar.addEventListener('click', async ()=>{
        console.log('Publicar');
        let newPostText=newPostInput.value;
        console.log(newPostText);

        await savePost(newPostText);

        document.getElementById('newPostPerfil').value='';
        //newPostInput.reset();
    })    
}