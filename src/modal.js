// Tache para cerrar el modal
let close = document.getElementById("close");
// let open = document.getElementById("modal-open");
let modal = document.querySelectorAll(".modal")[0];
let modalContainer = document.getElementById("modal-container");

export const openModal = (e) =>{
    // e.preventDefault();
    // visibilidad de la transparencia del modal
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    // toggle, quita o pone la clase "closemodal"
    modal.classList.toggle = (close);
};

export const closeModal = () =>{
    modal.classList.toggle(close);
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
};