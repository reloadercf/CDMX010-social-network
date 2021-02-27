import { cancelEditPost, validEditedPost } from './postValidation.js';
import { templatePost } from './templatePost.js';

export const perfil = `<div class="flex-container">
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
                    <div class="userName-perfil" id="p-userName">Nombre de usuario</div>
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
</div>`;

// ENVIAR LA INFORMACIÓN OBTENIDA AL FIREBASE
const savePost = (post, usermail, uid, likes) => {
  firestore.collection('posts').doc().set({
    post,
    usermail,
    uid,
    likes,
  });
};

// DA EL ID A FIREBASE PARA ELIMINAR POSTS
const deletePosts = (id) => firestore.collection('posts').doc(id).delete();
// OBTIENE EL DATO DEL POST DEPENDIENDO DEL ID QUE SE LE ESTE PASANDO
const getpost = (id) => firestore.collection('posts').doc(id).get();
// ACTUALIZA EL POST
const updatePosts = (id, updatedPost) => firestore.collection('posts').doc(id).update(updatedPost);
// Cuando de crea un nuevo post. --> onSnapshot se refiere a que cada vez que algun post se agregue,
// elimine o cambie se ejecutará la fucnión de "callback"
const onGetPost = (callback) => firestore.collection('posts').onSnapshot(callback);

// ELIMINAR POSTS
const EliminarPost = () => {
  const btnsDelete = document.querySelectorAll('.btn-delete');
  // console.log(btnsDelete);
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      // console.log(e.target.dataset.id);			 
      await deletePosts(e.target.dataset.id);			
    });
  });
};

let editStatus = true;
const EditPosts = () => {
  const btnEdit = document.querySelectorAll('.btn-edit');
  btnEdit.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      // define los ids indivisuales
      const postEdit = await getpost(e.target.dataset.id);
      const id = postEdit.id;
      const enableWrite = document.getElementById(`text-post-${id}`);
      const changeIcon = document.getElementById(`btn-edit-${id}`);
      const interactionContainer = document.getElementById(`interaction-container-${id}`);
      const cancelEditContainer = document.getElementById(`cancelEdit-container-${id}`);
      if (editStatus === true) {
        changeIcon.src = './images/save.png';
        enableWrite.removeAttribute('readonly');
        enableWrite.focus();
        validEditedPost(changeIcon, enableWrite);
        interactionContainer.style.display = 'none';
        cancelEditContainer.style.display = 'flex';
        // console.log("dentro de if");
        editStatus = false;
      } else if (!editStatus) {
        await updatePosts(id, {
          post: enableWrite.value,
        });
        changeIcon.src = './images/edit.png';
        // enableWrite.setAttribute('readonly',true);
        enableWrite.readOnly = true;
        // console.log("dentro de else");
        editStatus = true;
        interactionContainer.style.display = 'flex';
        cancelEditContainer.style.display = 'none';
      }
      const dataPost = postEdit.data();
      const textPost = dataPost.post;
      
			cancelEditPost(id, textPost);
    });
  });
};

const likesInteraction = () => {
  const imgLike = document.querySelectorAll('.like');
  imgLike.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      // define los ids indivisuales
      const postData = await getpost(e.target.dataset.id);
      // console.log(postData.data());
      const id = postData.id;
      // console.log('Le di like', id );
      const user = auth.currentUser;
      const mailUser = user.email;
      const dataPost = postData.data();
      const likesArray = dataPost.likes;
      // console.log(likesArray);
      let likeUser = '';
      likesArray.forEach((mailU) => {
        if (mailU === mailUser) {
          likeUser = mailU;
          // console.log(likeUser, 'estoy funcionando');
        }
      });
      if (likeUser === '') {
        likesArray.push(mailUser);
        // console.log('no estoy')
      } else {
        const positionMail = likesArray.indexOf(likeUser);
        likesArray.splice(positionMail, 1);
      }
      await updatePosts(id, {
        likes: likesArray,
      });
    });
  });
};

// PINTAR LA INFORMACIÓN OBTENIDA, EN LA PANT
export const reloadPost = () => {
  const postContainer = document.getElementById('postsContainer');
  postContainer.innerHTML = '';
  // Cada vez que se ejecute algun cambio en los posts, se va a ejecutar en onGetPost
  // que es el "callback" que definimos anteriormente (para obtener los datos a como
  // lucen actualmente)
  onGetPost((querySnapshot) => {
    // Para que no se repitan las publicaciones a la hora de visualizarlas, indicamos que
    // el postContainer debe estar vacio
    postContainer.innerHTML = '';
    // Los cambios se guardaran en un objeto llamadao "querySnapchot" y vamos a recorrer
    // elemento por elemento
    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
      const idPost = doc.id;
      const postsData = doc.data();
      const likesArray = postsData.likes;
      const likesCounter = likesArray.length;
      const user = auth.currentUser;
      const mailUser = user.email;
      const likeUser = likesArray.indexOf(mailUser);
      let srcLike = './images/like.png';
      if (likeUser === -1) {
        srcLike = './images/like.png';
      } else {
        srcLike = './images/likeAzul.png';
      }
      postContainer.innerHTML += templatePost(postsData, idPost, likesCounter, srcLike);
      const postOwner = postsData.usermail;
      // console.log(postOwner);
      if (postOwner !== mailUser) {
        document.getElementById(`btn-delete-${idPost}`).style.display = 'none';
        document.getElementById(`btn-edit-${idPost}`).style.display = 'none';
        document.getElementById(`namePostOwner-container-${idPost}`).style.paddingTop = '5%';
      }
    });
    EliminarPost();
    EditPosts();
    likesInteraction();
  });
};

// Crear un post en la colección 'posts' en Friebase //
export const createPost = () => {
  const btnPublicar = document.getElementById('publicar');
  const newPostInput = document.getElementById('newPostPerfil');
  btnPublicar.addEventListener('click', async () => {
    // console.log('Publicar');
    const newPostText = newPostInput.value;
    // console.log(newPostText);
    const user = auth.currentUser;
    const likes = [];
    await savePost(newPostText, user.email, user.uid, likes);
    document.getElementById('newPostPerfil').value = '';
    btnPublicar.style.display = 'none';
    document.querySelectorAll('.post')[0].style.marginBottom = '10%';
    // newPostInput.reset();
  });
};
