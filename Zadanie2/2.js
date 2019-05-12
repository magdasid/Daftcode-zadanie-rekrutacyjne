const openModalBtn = document.querySelector("#openModalBtn"); 
const closeModalBtn = document.querySelector("#closeModalBtn"); 
const modal = document.querySelector('.modal');
openModalBtn.addEventListener('click', () => openModal());
closeModalBtn.addEventListener('click', () => closeModal());

const openModal = () => {
    modal.classList.add("modal-opened");
}

const closeModal = () => {
    modal.classList.remove("modal-opened");
}