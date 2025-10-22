


function navBarList({ id }: { id: string }): string {
    return `
            <ul id="${id}" class="navbar-nav justify-content-end flex-grow-1 pe-3"></ul>    
        `;
}

export default navBarList;