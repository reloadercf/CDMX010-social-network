import { onNavigate } from "./routing.js";
import { ErrorLoginMail } from "./modalError.js"
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

    if(mensajeError == ErrorLoginMail){
        let otherUserLogin = document.getElementById('otherUser');
        otherUserLogin.addEventListener('click', () => {
        onNavigate('/account'); 
        modalContainer.style.display="none";               
        });  
        closeModal();
    }    
}

export const closeModal = () => {
    let close = document.getElementById("close");

    close.addEventListener("click", function () {
        modal.classList.toggle ("modal-close");
        modalContainer.style.opacity = "0";
        modalContainer.style.visibility = "hidden";
    })
};