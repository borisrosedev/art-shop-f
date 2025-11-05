import { CarouselItem } from '../../../interfaces/carousel/carousel-item.interfaces';
import carouselSlideLabelComponent from './carousel-slide-lable.components';

function carouselItem({
    caption,
    summary,
    src,
    title,
    url,
    alt,
    asset,
    name,
    isActive,
    classNames,
    itemClassNames,
}:CarouselItem) {
    return `
            <div class="carousel-item ${isActive ? 'active' : ''} ${itemClassNames ?? ''}">
                <img src="${src ?? url ?? '/assets/' + asset}" class="d-block w-100 ${classNames ?? ''}" alt="Image of ${alt ?? name}">
                ${caption ? carouselSlideLabelComponent({ title: title ?? name, summary: summary, classNames: 'text-dark' }) : ''}
            </div>
        
        `;
}

export default carouselItem;
