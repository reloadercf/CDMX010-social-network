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




