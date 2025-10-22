import buttonComponent from "../shared/button.components";
import carouselItem from "./carousel-item.components";


function carouselArrow({direction }:{ direction: 'next' | 'prev'}) {
    return (
        `
            <span class=carousel-control-${direction}-icon aria-hidden="true"></span>
            <span class="visually-hidden">${direction == 'next' ? 'Next' : 'Previous' }</span>
        
        `
    )
}

function carouselComponent({ id, data, classNames }: { id: string, data: Array<any> , classNames?: string}) {

    return (
        `
        <div id="${id}" class="carousel slide ${classNames ?? ''}" data-bs-ride="true">
            <div class="carousel-inner">
                ${data.map(el => carouselItem(el)).join("")}
            </div>
            ${buttonComponent({
                bootstrapped: true,
                targetElementId: "#" + id,
                classNames: 'carousel-control-prev',
                slideElement: 'prev',
                content : carouselArrow({ direction: 'prev'})
            })}
             ${buttonComponent({
                bootstrapped: true,
                targetElementId: "#" + id,
                classNames: 'carousel-control-next',
                slideElement: 'next',
                content : carouselArrow({ direction: 'next'})
            })}
        </div>
                    
        
        
        `
    )
}

export default carouselComponent;