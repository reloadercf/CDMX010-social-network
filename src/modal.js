import { onNavigate } from "./routing.js";
import { ErrorAccount, ErrorLoginMail } from "./modalError.js"
// Tache para cerrar el modal

let modal = document.querySelectorAll(".modal")[0];
let modalContainer = document.getElementById("modal-container");
let modalAlert= document.getElementById('modal-alert');


export const openModal = (mensajeError) => {   
    // visibilidad de la transparencia del modal
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    // toggle, quita o pone la clase "modal-close"
    modal.classList.toggle ("modal-close");
    modalAlert.innerHTML= mensajeError;
    closeModal();
    if(mensajeError == ErrorLoginMail){
        let otherUserLogin = document.getElementById('otherUser');
        otherUserLogin.addEventListener('click', () => {
            onNavigate('/account'); 
            closeModalLink();
        }); 
    }else if(mensajeError == ErrorAccount){
        document.getElementById('modalErrorLogin-link').addEventListener('click', ()=>{
            onNavigate('/');
            closeModalLink();
        });
        document.getElementById('modalErrorAccount-link').addEventListener('click', ()=>{
            onNavigate('/account');
            closeModalLink();
        });  
    }
    
}

export function closeModal (){
    let close = document.getElementById("close");
    close.addEventListener("click", closeModalLink);
};


function closeModalLink () {
    modal.classList.toggle ("modal-close");
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
}
