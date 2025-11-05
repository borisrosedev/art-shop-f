function navItemDropdown({ navItemDropdownName, href, dropdownMenuId }) {
    return `
        
                <li class="nav-item dropdown">
                    <a 
                        class="nav-link dropdown-toggle" 
                        href="${href ?? '#'}" 
                        role="button" data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        ${navItemDropdownName}
                    </a>
                    <ul class="dropdown-menu" id="${dropdownMenuId}"></ul>
                </li>
        
        `;
}

export default navItemDropdown;
