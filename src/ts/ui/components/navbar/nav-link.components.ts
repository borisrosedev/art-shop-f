function navLinkComponent({
    isDropdown,
    navLinkName,
    href,
    bootstrapped,
    toggleElementId,
    ariaExpended,
}: {
    href: string;
    isDropdown: boolean;
    navLinkName: string;
    bootstrapped: boolean;
    toggleElementId?: string;
    ariaExpended?: boolean;
}) {
    if (isDropdown && bootstrapped) {
        return `
            <a class="nav-link dropdown-toggle" 
                href="${href}" 
                role="button" data-bs-toggle="${toggleElementId ?? 'dropdown'}" 
                aria-expanded="${ariaExpended ?? false}">
                ${navLinkName}
            </a>
        
        `;
    }
}
