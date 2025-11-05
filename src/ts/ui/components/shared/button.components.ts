import { Button } from "../../../interfaces/button.interfaces";


function buttonComponent(props: Button) {
    console.log('[button-component]', props);

    if (!props.bootstrapped) {
        return `<button 
        id="${props.id ?? ''}"
        type="${props.type ? props.type : 'button'}" 
        aria-label="${props.ariaLabel ?? 'button for ' + props.content}"
        aria-controls="${props.ariaControlsElementId ?? ''}"
        class="btn ${props.classNames ?? ''}">${props.content}</button>`;
    }

    return `
        <button 
            id="${props.id ?? ''}"
            type="${props.type ? props.type : 'button'}"
            data-bs-slide="${props.slideElement ?? ''}" 
            data-bs-dismiss="${props.dismissElementId ?? ''}" 
            data-bs-toggle="${props.toggleElementId ?? ''}"
            data-bs-target="${props.targetElementId ?? ''}"
            aria-controls="${props.ariaControlsElementId ?? ''}"
            aria-label="${props.ariaLabel ?? ''}"
            class="btn ${props.classNames ?? ''}"
        >${props.content ?? ''}</button>`;
}

export default buttonComponent;
