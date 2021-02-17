import { templatePost } from "./templatePost.js";

export const perfil =
`<div class="flex-container">
    <div class="flex-menu">
        <div class="subject">
        <h3>GirlTechSOS</h3>
        <p class="menu1"><img class="menuIcons" src="./images/profileIcon.png"> Perfil</p>
        <p class="menu1"><img class="menuIcons" src="./images/friendsIcon.png"> Amigos</p>
        <p class="menu1"><img class="menuIcons" src="./images/favFolderIcon.png"> Favoritos</p>
        <p class="menu1"><img class="menuIcons" src="./images/helpIcon.png"> Ayuda</p>
        <p class="menu1"><img class="menuIcons" src="./images/configIcon.png"> Configuración</p>            
        <p class="menu1"><img class="menuIcons" src="./images/avatarProfile.png">Sobre GirlTechSOS</p>
        <p class="menu1"><img class="menuIcons" src="./images/exitIcon.png"> Salir</p>
        </div>
    </div>
    <div class="flex-perfil">
        <div class="container">
            <div class="imgContainer">
                <img src="./images/avatarProfile.png" class="image-perfil">
            </div>
            <div class="info-perfil">
                    <div class="userName-perfil">Nombre de usuario</div>
                    <div class="about">Información sobre el usuario</div>
            </div>
        </div>
        <div class="content">       
        <div class="post">
            <input type="text" placeholder="Nueva publicación" class="newPost" id="newPostPerfil"></input>
            <button class="enter" type"submit" id="publicar">Publicar</button>
        </div>
        <div id="postsContainer"></div>
        </div>
    </div>
    <div class="flex-noticias">
        <div class="noticias-section">
            <p class="title">Noticias</p>
            <p>Noticia 1</p>
            <img src="./images/picture.png" class="notice"> 
            <p>Noticia 2</p>
            <img src="./images/picture.png" class="notice"> 
            <p>Noticia 3</p>
            <img src="./images/picture.png" class="notice"> 
        </div> 
    </div>
</div>`

//ENVIAR LA INFORMACIÓN OBTENIDA AL FIREBASE
const savePost= (post, usermail, uid)=>{
    firestore.collection('posts').doc().set({
        post,
        usermail,
        uid
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
        let user= auth.currentUser;
        await savePost(newPostText, user.email, user.uid);

        document.getElementById('newPostPerfil').value='';
        //newPostInput.reset();
    })    
}