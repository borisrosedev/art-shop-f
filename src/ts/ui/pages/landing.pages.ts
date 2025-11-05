import buttonComponent from '../components/shared/button.components';
import titleComponent from '../components/shared/title.components';

function landingPage() {
    return `
            <main class="app__main landing__main">
                ${titleComponent({ hType: 'h1', content: 'ArtShop' })}
           
                ${buttonComponent({
                    id: 'landing-button',
                    content: 'Enter',
                    classNames: 'btn-warning',
                })}
            </main>
        
        `;
}

export default landingPage;
