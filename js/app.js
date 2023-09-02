function addModalContainer() {
    const placement = document;
  }
  
  function addHamburgerMenu() {
    const header = document.querySelector('.header .header-menu__menu ul');
    const hamburgerMenu = `
      <img id="showMenu" src="https://26913733.fs1.hubspotusercontent-eu1.net/hubfs/26913733/menu-icon.png" alt="hamburger">
    `;
  
    header.insertAdjacentHTML('beforeend', hamburgerMenu);
  }
  
  let headerHolder = document.querySelector('#header');

  function openModal(e) {
    e.preventDefault();
    $(headerHolder).hide();
    modalContainer.classList.add('active');
  }
  
  function closeModal() {
    $(headerHolder).show();
    modalContainer.classList.remove('active');
  }
  
  function addClassOnEscape(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
  
  let modalContainer;
  
  document.addEventListener('DOMContentLoaded', function () {
    addHamburgerMenu();
  
    modalContainer = document.querySelector('#modal-container');
  
    const showIcon = document.querySelector('#showMenu');
    const showIconSM = document.querySelector('.header-menu__toggle-icon');
    const closeIcon = document.querySelector('#closeMenu');
  
    showIcon.addEventListener('click', openModal);
    showIconSM.addEventListener('click', openModal);
    closeIcon.addEventListener('click', closeModal);
  
    document.addEventListener('keydown', addClassOnEscape);
});