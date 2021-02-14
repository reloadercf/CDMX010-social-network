export const home =
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
        <div class="container-home">
            <div class="imgContainer-home">
                <input type="file" id="my-file" style="display-none"></input>
                <img src="./images/user.png" class="image-home">                
                <div class="info-home">
                    <div class="userName">Nombre de usuario</div>
                    <div class="about">Información sobre el usuario</div>
                </div>
            </div>
            <div class="content">       
                <div class="post">
                    <input type="text" placeholder="Nueva publicación" class="newPost-home"></input>
                    <button class="enter" type"submit">Publicar</button>
                </div>
                <div class="activity">        
                    <img src="./images/points.jpg" class="point">
                    <div class="name">Nombre del usuario</div>
                    <div class="publication">Publicación</div>
                    <div class="interaction">
                    <img src="./images/picture.png" class="picture">            
                    <img src="./images/coment.png" class="coment">
                    <div class="coment-num">Número de comentarios</div>            
                    <img src="./images/like.png" class="like">
                    <div class="like-num">Número de likes</div>  
                </div>
            </div>            
            <div class="next">                   
                    <input type="text" class="nextPost" placeholder="Escribe un comentario..."></input>
                    <button class="enter" type"submit">Comentar</button>                    
            </div>       
        </div>    
    </div>
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

//Función para que el usuario pueda subir una imagén a su perfil

export const uploadImage = function () {

    let file = document.getElementById("my-file")[0].files[0]
    console.log("aqui", file)

    if(!file){

    }else{

        //Referencia donde se va a guardar la información en Firebase
        var storageRef = storage.ref('/userProfileImgs'+file.name);
        //Tarea para subir la referencia, ya que lo menciona la documentación de Firebase. Dice que cuando se referencie el archivo, este se suba.
        var uploadTask = storageRef.put(file);
        //Activamos la referencia "uploadTask"
        //Dice que cuando exista un cambio de estado, ejecutaremos una función donde captutaremos los cambios
        uploadTask.on('state_change', function (snapchot){
            //se ve si existe o no un error
        }, function(error) {
            console.log(error)
            //Función cuando no exista un error y si se ejecute la acción
        }, function() {
            console.log('Archivo subido a Firebase')

        })
        
    }

    
}