// Function to add hamburger menu
function addHamburgerMenu() {
    const header = document.querySelector('.header .header-menu__menu ul');
    const hamburgerMenu = `
      <img id="showMenu" src="https://26913733.fs1.hubspotusercontent-eu1.net/hubfs/26913733/menu-icon.png" alt="hamburger">
    `;

    header.insertAdjacentHTML('beforeend', hamburgerMenu);
}

// Select the header holder
let headerHolder = document.querySelector('#header');


// Function to Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This provides smooth scrolling
    });
}

function removeOpenClass() {
    const oldHeaderMenu = document.querySelector('.header-menu');

    $(oldHeaderMenu).removeClass('open');
}

// Function to open the modal
function openModal(e) {
    // e.preventDefault();
    scrollToTop();

    $(headerHolder).hide(); // Hide header holder
    modalContainer.classList.add('active');

    removeOpenClass();
}

// Function to close the modal
function closeModal() {
    $(headerHolder).show(); // Show header holder
    modalContainer.classList.remove('active');

    removeOpenClass();
}

// Function to add class on Escape key press
function addClassOnEscape(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

// Initialize modalContainer variable
let modalContainer;

// Run code when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add hamburger menu
    addHamburgerMenu();

    // Get modal container
    modalContainer = document.querySelector('#modal-container');

    // Get elements for event listeners
    const showIcon = document.querySelector('#showMenu');
    const showIconSM = document.querySelector('.header-menu__toggle-icon');
    const closeIcon = document.querySelector('#closeMenu');

    // Add event listeners
    showIcon.addEventListener('click', function() {
        openModal();
    });
    
    showIconSM.addEventListener('click', openModal);
    closeIcon.addEventListener('click', closeModal);
    
    // Listen for Escape key press
    document.addEventListener('keydown', addClassOnEscape);
});
