
let closeModal = document.getElementById("close");
let openModal = document.getElementById("modal-open");
let modal = document.querySelectorAll(".modal")[0];
let modalContainer = document.getElementById("modal-container");

export const openModal = (e) =>{
    e.preventDefault();
    // visibilidad de la transparencia del modal
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    // toggle, quita o pone la clase "closemodal"
    modal.classList.toggle = ("closeModal");
};

export const closeModal = () =>{
    modal.classList.toggle("closeModal");
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
}