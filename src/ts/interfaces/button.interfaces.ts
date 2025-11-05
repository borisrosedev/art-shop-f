export interface Button {
    content?: string;
    id?: string;
    bootstrapped?: boolean;
    dismissElementId?: string;
    toggleElementId?: string;
    targetElementId?: string;
    slideElement?: 'prev' | 'next';
    ariaControlsElementId?: string;
    type?: 'submit' | 'reset';
    ariaLabel?: string;
    classNames?:
        | 'btn-primary'
        | 'btn-secondary'
        | 'btn-success'
        | 'btn-danger'
        | 'btn-warning'
        | 'btn-info'
        | 'btn-light'
        | 'btn-dark'
        | 'btn-link'
        | string;
}