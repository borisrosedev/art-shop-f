
function bootstrapTextFieldComponent({ id, labelContent, type, helperId, helperContent }: { id: string , labelContent: string, type?: 'email' | 'password', helperId?: string, helperContent?: string }) {
    return(
        `
           <div class="mb-3">
                <label for="${id}" class="form-label">${labelContent}</label>
                <input type="${type ?? 'text'}" class="form-control" id="${type}" aria-describedby="${helperId ?? ''}">
               ${helperId ? `<div id="${helperId}" class="form-text">${helperContent}</div>`: ''}
            </div>

        `
    )
}

export default bootstrapTextFieldComponent;