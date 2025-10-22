function titleComponent({
    hType,
    id,
    classNames,
    content,
}: {
    hType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;
    content: string | HTMLElement;
    classNames?: string
    id?: string
}) {
    return `
            <${hType ?? 'h1'} id="${id ?? ''}" class="${classNames ?? ''}">${content}</${hType ?? 'h1'}>
        
        `;
}

export default titleComponent;
