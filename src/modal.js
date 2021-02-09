// import { onNavigate } from './routing.js'

// Tache para cerrar el modal
let close = document.getElementById("close");
let modal = document.querySelectorAll(".modal")[0];
let modalContainer = document.getElementById("modal-container");

export const openModal = () =>{
   
    // visibilidad de la transparencia del modal
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    // toggle, quita o pone la clase "modal-close"
    modal.classList.toggle ("modal-close");   
    
};

export const closeModal = () =>{
    close.addEventListener("click", function (){
        modal.classList.toggle ("modal-close");
        modalContainer.style.opacity = "0";
        modalContainer.style.visibility = "hidden";
    })
};

// let otherUserLogin= document.getElemenById('otherUser');

// otherUserLogin.addEventListener('click', () => {
//     onNavigate('/account')
// })