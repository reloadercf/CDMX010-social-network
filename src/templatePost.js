export const templatePost= (postsData) => {
    let postStructur= `<div class="activity">        
    <img src="./images/points.jpg" class="point">
    <div class="name">Nombre del usuario</div>
    <div class="publication">${postsData.post}</div>
        <div class="interaction">
            <div>
            <img src="./images/picture.png"  class="picture">
            </div>                   
            <div class="coment-num">
            <img src="./images/coment.png" class="coment">
            <p>3</p>
            </div>            
            <div class="like-num">
            <img src="./images/like.png" class="like">
            <p>2</p>
            </div>  
        </div>
    </div>               
    <div class="next">                   
    <input type="text" class="nextPost" placeholder="Escribe un comentario..."></input>
    <button class="enter" type"submit">Comentar</button>                    
    </div>`
    return postStructur;
}