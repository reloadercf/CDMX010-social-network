export const home = `<div class="flex-container">
    <div class="flex-menu">
        <div class="subject">
            <h3 class="title">GirlTechSOS</h3>
            <p class="menu1"><img class="menuIcons" src="./images/profileIcon.png">&nbsp;&nbsp; Perfil</p>
            <p class="menu1"><img class="menuIcons" src="./images/friendsIcon.png">&nbsp;&nbsp; Amigos</p>
            <p class="menu1"><img class="menuIcons" src="./images/favFolderIcon.png">&nbsp;&nbsp; Favoritos</p>
            <p class="menu1"><img class="menuIcons" src="./images/helpIcon.png">&nbsp;&nbsp; Ayuda</p>
            <p class="menu1"><img class="menuIcons" src="./images/configIcon.png">&nbsp;&nbsp; Configuración</p>            
            <p class="menu1"><img class="menuIcons" src="./images/woman.png">&nbsp;&nbsp; Sobre GirlTechSOS</p>
            <p class="menu1"><img class="menuIcons" src="./images/exitIcon.png">&nbsp;&nbsp; Salir</p>
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
                <p>Junto con <strong>Citibanamex</strong> hemos recaudado <strong>$24.6 MDP</strong> para la educación el Laboratoria...</p>
                <img src="./images/Laboratoria1.jpg" class="notice"> 
                <p>¡Bienvenidas a la generación <strong>MX010!</strong></p>
                <img src="./images/Dia1.png" class="notice">                
            </div>
        </div>
    </div>`;
