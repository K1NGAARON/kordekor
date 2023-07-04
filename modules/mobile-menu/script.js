$(document).ready(function() {
    function openModal(e) {
        modalContainer.classList.add('active');
    }

    function closeModal(e) {
        modalContainer.classList.remove('active');
    }

    const modalContainer = document.querySelector('#modal-container');
    const showIcon = document.querySelector('#showMenu');
    const closeIcon = document.querySelector('#closeMenu');


    showIcon.addEventListener('click', openModal);
    closeIcon.addEventListener('click', closeModal);
});