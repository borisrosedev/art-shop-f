function navBarForm({
    id,
    placeholder,
    classNames,
    content,
}: {
    id: string;
    placeholder: string;
    classNames: string;
    content: string;
}) {
    return `
        <form id="${id}" class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="${placeholder ?? 'Search'}" aria-label="Search"/>
          <button class="btn ${classNames ?? 'btn-outline-success'}" type="submit">${content ?? 'Search'}</button>
        </form>
        
        `;
}

export default navBarForm;
