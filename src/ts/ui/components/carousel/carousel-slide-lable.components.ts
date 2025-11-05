function carouselSlideLabelComponent({
    summary,
    title,
    classNames,
}: {
    summary: string;
    title: string;
    classNames?: string;
}) {
    return `
        <div class="carousel-caption d-none d-md-block ${classNames ?? ''}">
            <h5>${title}</h5>
            <p>${summary}</p>
        </div>
        
        
        `;
}

export default carouselSlideLabelComponent;
