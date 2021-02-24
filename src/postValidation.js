export const validPost= ()=>{
    let btnPublicar = document.getElementById('publicar');
    let newPostInput= document.getElementById('newPostPerfil');
    //const btnsDelete= document.querySelectorAll('.btn-delete');
    const marginBottomInput= document.querySelectorAll('.post')[0];
    marginBottomInput.style.marginBottom= '10%';
    btnPublicar.style.display= 'none';
    newPostInput.addEventListener("keyup", e => {
        let inputString = document.getElementById('newPostPerfil').value;
        //let asciiValidation = (/[u033-u255]/); /// También esta opción funciona(NO BORRAR :3)
        let asciiValidation = new RegExp(/[!-□]/g);
        let stringValidation= asciiValidation.test(inputString);
        console.log(stringValidation);
        if(stringValidation==true){
            btnPublicar.style.display= 'block';
            marginBottomInput.style.marginBottom= '0%';
        }else{
            btnPublicar.style.display= 'none';
            marginBottomInput.style.marginBottom= '10%';
        }
    });
}

export const validEditedPost= (changeIcon, enableWrite) =>{
    changeIcon.style.display='block';
    enableWrite.addEventListener('keyup', e =>{
        let textEdit= enableWrite.value;
        let asciiValidation = new RegExp(/[!-□]/g);
        let stringValidation= asciiValidation.test(textEdit);
        console.log(stringValidation);
        if(stringValidation==true){
            changeIcon.style.display= 'block';
        }else{
            changeIcon.style.display= 'none';
        }
    })
}

export const cancelEditPost = (id, textPost)=>{
    let enableWrite = document.getElementById('text-post-' + id);
    let changeIcon = document.getElementById('btn-edit-' + id);
    let interactionContainer= document.getElementById('interaction-container-' + id);
    let cancelEditContainer=document.getElementById("cancelEdit-container-" + id);
    let cancelEditbutton =document.getElementById("cancelEdit-button-" + id);
    cancelEditbutton.addEventListener('click', ()=>{
        enableWrite.value= textPost;
        changeIcon.src = "./images/edit.png";
        //enableWrite.setAttribute('readonly',true); // también sirve
        enableWrite.readOnly = true;
        interactionContainer.style.display='flex';
        cancelEditContainer.style.display='none';
        changeIcon.style.display= 'block'
    })
    
}

