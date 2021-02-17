export const templatePost= (postsData) => {
    let postStructur= `<div class="activity">        
    <img src="./images/points.jpg" class="point">
    <div class="name">${postsData.usermail}</div>
    <div class="publication">${postsData.post}</div>
        <div class="interaction">
                <label><img class="postIcon" src="./images/picture.png" class="picture"></label>           
                <label>3 <img class="postIcon" src="./images/coment.png" class="coment"></label>            
                <label>27 <img class="postIcon" src="./images/like.png" class="like"></label>
        </div>
    </div>               
    <div class="next">                   
    <input type="text" class="nextPost" placeholder="Escribe un comentario..."></input>
    <button class="enter" type"submit">Comentar</button>                    
    </div>`
    return postStructur;
}