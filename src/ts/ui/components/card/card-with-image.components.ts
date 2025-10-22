import { SocialProof } from "../../../interfaces/social-proof.interfaces"
import buttonComponent from "../shared/button.components"
import socialProofComponent from "../shared/social-proof.components"

interface CardWithImageProps {
    src?: string 
    url?: string ,
    asset?: string, 
    alt?: string,
    socialProof?: Array<SocialProof>
    title?: string
    href?: string
    content?: string
    name?: string,
    buttonId?: string
    buttonClassNames?: string
    text?: string
    ariaLabel: string
    classNames?: string
}

function cardWithImageOptionalLinkOrButtonComponent({ socialProof, buttonClassNames, src,buttonId, href, content, url, asset, alt, name, text , ariaLabel, title, classNames }: CardWithImageProps) {
    return (
        `
        <div class="card ${classNames ?? ''}" style="width: 18rem;" aria-label"${ariaLabel}">
            <img src="${src ?? url ?? '/assets/' + asset}" class="card-img-top" alt="Image of ${alt ?? name}">
            <div class="card-body">
               ${title ? `<h5 class="card-title">${title}</h5>` : ''}
                <p class="card-text">${text}</p>
              ${socialProof  ? `<div class="custom-card__social-proof">
                    ${socialProof.map(proof => socialProofComponent(proof)).join("")}
                </div> ` : ''}
               ${href ? `<a href="#" class="btn btn-primary">${content}</a>`: '' }
               ${buttonId ? `${buttonComponent({
                ariaLabel: 'button to ' + content,
                content: content,
                classNames: buttonClassNames,
                id: buttonId,
                bootstrapped: false
               })}`: ''}
            </div>
        </div>
        
        
        `
    )
}

export default cardWithImageOptionalLinkOrButtonComponent;