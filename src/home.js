export const home = `<div class="flex-container">
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
        <div class="container-home">
            <div class="head-home">
                <div class="imgContainer-home">
                    <input type="file" id="my-file" style="display-none"></input>
                    <img src="./images/avatarProfile.png" class="image-home">                
                </div>
                <div class="info-home">
                    <div class="userName-home"><p class="pNameUser-home" id="p-userName">Nombre de usuario</p></div>
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
