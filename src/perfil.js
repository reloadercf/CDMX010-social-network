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

//Cuando de crea un nuevo post. --> onSnapshot se refiere a que cada vez que algun post se agregue, elimine o cambie se ejecutará la fucnión de "callback"
const onGetPost = (callback) => firestore.collection('posts').onSnapshot(callback)

//PINTAR LA INFORMACIÓN OBTENIDA, EN LA PANT
export const reloadPost=()=>{
    const postContainer= document.getElementById('postsContainer');
    postContainer.innerHTML='';    

        //Cada vez que se ejecute algun cambio en los posts, se va a ejecutar en onGetPost que es el "callback" que definimos anteriormente (para obtener los datos a como lucen actualmente)
        onGetPost((querySnapshot) => {
            //Para que no se repitan las publicaciones a la hora de visualizarlas, indicamos que el postContainer debe estar vacio
            postContainer.innerHTML = '';
            //Los cambios se guardaran en un objeto llamadao "querySnapchot" y vamos a recorrer elemento por elemento
            querySnapshot.forEach(doc => {
               
                let postsData=doc.data();                
                console.log("ADIOSSS", postsData);

                let postText=postsData.post
                console.log(" HOLAAAAAA", postText)
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

        getPost();

        document.getElementById('newPostPerfil').value='';
        //newPostInput.reset();
    })    
}