import figureComponent from './figure.components';

function socialProofComponent({
    iconName,
    extension,
    count,
    text,
    ariaLabel,
}: {
    ariaLabel: string;
    count?: number | string;
    text?: string;
    extension?: 'jpeg' | 'jpg' | 'png';
    iconName: 'eye-open' | 'eye-close' | 'filled-heart' | 'empty-heart';
}) {
    return `
       
                <article class="social-proof">
                    ${figureComponent({
                        assetName:
                            'icons/' + iconName + '.' + (extension ?? 'svg'),
                    })}
                    <span aria-label="${ariaLabel}">${count ?? text}</span>
                </article>
        
        `;
}

export default socialProofComponent;
