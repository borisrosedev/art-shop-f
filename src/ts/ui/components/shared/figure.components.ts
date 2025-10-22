function figureComponent(props: {
    classNames?: string;
    url?: string;
    src?: string;
    assetName: string;
    alt?: string;
    name?: string;
}) {
    return `
            <figure class="${props.classNames ?? ''}">
                <img 
                    src="${props.url ?? props.src ?? `/assets/${props.assetName}`}" 
                    alt="${props.alt ?? props.name}" 
                />
            </figure>
        
        `;
}

export default figureComponent;
