interface TextFieldProps {
    id: string;
    placeholder: string;
    type?: 'email' | 'text' | 'password';
    label?: string;
    iconName?: string;
    arialLabel?: string;
    classNames?: string;
}

function textFieldComponent(props: TextFieldProps) {
    return `
            <article aria-label="${props.arialLabel ?? ''}">

                ${
                    props.iconName
                        ? `<figure>
                    <img src="/assets/icons/${props.iconName}"
                </figure>`
                        : ''
                }
                <section>
                ${props.label ? `<label>${props.label}</label>` : `<label for="${props.id}"></label>`}
                
                <input 
                    class="${props.classNames ?? ''}"
                    id="${props.id}"
                    name="${props.id}"
                    type="${props.type ?? 'text'}" 
                    placeholder="${props.placeholder}"
                />
                </section>
           
            </article>
        `;
}
