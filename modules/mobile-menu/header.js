function addModalContainer() {
    const placement = document
}

function addHamburgerMenu() {
    const header = document.querySelector('.header .header-menu__menu ul');
    const hamburgerMenu = `
        <i id="showMenu" class="hamburger-icon fa-regular fa-bars"></i>
    `;

    header.insertAdjacentHTML('beforeend', hamburgerMenu);
}

function openModal(e) {
    e.preventDefault();
    modalContainer.classList.add('active');
}

function closeModal() {
    modalContainer.classList.remove('active');
}

let modalContainer; //

document.addEventListener('DOMContentLoaded', function() {
    addHamburgerMenu();

    modalContainer = document.querySelector('#modal-container');

    const showIcon = document.querySelector('#showMenu');
    const showIconSM = document.querySelector('.header-menu__toggle-icon');
    const closeIcon = document.querySelector('#closeMenu');

    showIcon.addEventListener('click', openModal);
    showIconSM.addEventListener('click', openModal);
    closeIcon.addEventListener('click', closeModal);
});
