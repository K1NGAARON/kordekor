function yellowBar(e) {
    const header = document.querySelector('.header .header-menu__menu ul');
    const footer = document.querySelector('.footer-menu__menu ul');

    const headerBar = `
        <li class="hs-menu-item hs-menu-depth-1" role="none" style="
            content: '';
            width: 40px;
            height: 3px;
            background-color: var(--primary);
            margin-left: 30px;
            ">
        </li>
        `

    const footerBar = `
        <li class="hs-menu-item hs-menu-depth-1" role="none" style="
            content: '';
            width: 40px;
            height: 3px;
            background-color: var(--primary);
            ">
        </li>
        `

    header.insertAdjacentHTML('beforeend', headerBar);
    footer.insertAdjacentHTML('beforeend', footerBar);
};

document.addEventListener('DOMContentLoaded', yellowBar);