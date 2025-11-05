import BaseContainer from '../models/base-container.models';
import gsap from 'gsap';
import navItemComponent from '../ui/components/navbar/nav-item.components';

class LandingContainer extends BaseContainer {
    constructor(onNavigate: (h: string) => void) {
        super(onNavigate);
        const landingButton = document.getElementById('landing-button');
        landingButton.addEventListener('click', this.onClick.bind(this));
        gsap.from('.btn-warning', { y: 300, duration: 1 });
    }

    onClick() {
        this.onNavigate('#home');
    }
}

export default LandingContainer;
