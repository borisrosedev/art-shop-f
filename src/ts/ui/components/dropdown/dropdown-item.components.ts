


function dropdownItemComponent({ content, href }: { content: string, href: '#home' | '#login' | '#cart' | '#register' }) {
    return (
        `
            <li><a class="dropdown-item" href="${href ?? '#'}">${content}</a></li>
        
        `
    )
}