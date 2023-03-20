function yellowBar(e) {
    const header = document.querySelector('.header .header-menu__menu ul');
    const footer = document.querySelector('.footer-menu__menu ul');

    const elementToAdd = `
        <li class="hs-menu-item hs-menu-depth-1" role="none" style="
            content: '';
            width: 40px;
            height: 3px;
            background-color: var(--primary);">
        </li>
        `

    header.insertAdjacentHTML('beforeend', elementToAdd);
    footer.insertAdjacentHTML('beforeend', elementToAdd);
};

document.addEventListener('DOMContentLoaded', yellowBar);