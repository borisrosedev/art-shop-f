import BaseContainer from "../models/base-container.models";


class HeaderContainer extends BaseContainer {
    constructor(onNavigate: (h: string) => void) {
        super(onNavigate);
    }

    onLogin() {
        this.onNavigate('#login')
    }

    onCart() {
        this.onNavigate('#cart')
    }

    onRegister(){
        this.onNavigate('#register')
    }
}

export default HeaderContainer;