function simpleCardComponent({
    ariaLabel,
    text,
    classNames,
}: {
    ariaLabel: string;
    text: string;
    classNames?: string;
}) {
    return `
        <div class="card ${classNames ?? ''}" aria-label="${ariaLabel}">
            <div class="card-body">
                ${text}
            </div>
        </div>
        
        
        `;
}

export default simpleCardComponent;
