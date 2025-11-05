function navItemComponent({
    context,
    href,
    content,
    isActive,
    ariaCurrent,
}: {
    href?: string;
    content: string;
    context: 'home' | 'login' | 'register' | 'cart' | 'profile' | 'dashboard';
    isActive?: boolean;
    ariaCurrent?: string | 'page';
}) {
    if (context == href.split('#')[1]) throw new Error('Already on the page');

    return `
              <li class="nav-item">
                    <a class="nav-link ${isActive ? 'active' : ''}" aria-current="${ariaCurrent ?? 'page'}" href="${href ?? '#'}">${content}</a>
             </li>
        
        
        `;
}

export default navItemComponent;
