import BaseContainer from '../models/base-container.models';
import navItemComponent from '../ui/components/navbar/nav-item.components';
import navLinkComponent from '../ui/components/navbar/nav-link.components';
class HeaderContainer extends BaseContainer {
    constructor(onNavigate: (h: string) => void) {
        super(onNavigate);
    }

    onLogin() {
        this.onNavigate('#login');
    }

    onCart() {
        this.onNavigate('#cart');
    }

    onRegister() {
        this.onNavigate('#register');
    }
}

export default HeaderContainer;
