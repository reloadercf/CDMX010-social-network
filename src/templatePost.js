export const templatePost = (postsData, idPost, likesCounter, srcLike) => {
  const postStructur = `<div class="activity">
    <div class="edit-post">           
    <img src="./images/delete.png" class="btn-delete" id="btn-delete-${idPost}" data-id="${idPost}">
    <img src="./images/edit.png" class="btn-edit" id="btn-edit-${idPost}" data-id="${idPost}" >
    </div> 
    <div class="namePostOwner" id="namePostOwner-container-${idPost}">${postsData.usermail}</div>
    <div class="publication">
    <textarea id="text-post-${idPost}" readonly > ${postsData.post}</textarea>
    </div>
    <div class="cancelEdit-container" id="cancelEdit-container-${idPost}"><button class="cancelEdit-button" id="cancelEdit-button-${idPost}">Cancelar</button></div>
        <div class="interaction" id="interaction-container-${idPost}">
                <label><img class="postIcon" src="./images/picture.png" class="picture"></label>           
                <label>3 <img class="postIcon" src="./images/coment.png" class="coment"></label>            
                <label><label id="countLikes-${idPost}">${likesCounter}</label> <img class="postIcon like" src=${srcLike} id="btn-like-${idPost}" data-id="${idPost}"></label>
        </div>
    </div>               
    <div class="next">                   
    <input type="text" class="nextPost" placeholder="Escribe un comentario..."></input>
    <button class="enter" type"submit">Comentar</button>                    
    </div>`;
  return postStructur;
};
