import ROUTES from './ts/constants/routes';
import HeaderContainer from './ts/containers/header.containers';
import HomeContainer from './ts/containers/home.containers';
import LandingContainer from './ts/containers/landing.containers';
import LoginAndRegisterContainer from './ts/containers/login-and-register.containers';
import appHeaderLayout from './ts/ui/layout/app-header.layout';

declare global {
    interface Window {
        onNavigate: (h: string) => void;
    }
}

window.onNavigate = onNavigate;

window.onpopstate = () => onNavigate(document.location.hash);

function onNavigate(h: string): void {
    window.history.pushState({}, '', document.location.pathname + h);

    // cleaning up the app-div
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';

    switch (h) {
        case ROUTES.home.path:
            appDiv.insertAdjacentHTML('afterbegin', appHeaderLayout());
            appDiv.insertAdjacentHTML('beforeend', ROUTES.home.component());
            new HeaderContainer(window.onNavigate);
            new HomeContainer(window.onNavigate);
            break;
        case ROUTES.landing.path:
            appDiv.insertAdjacentHTML('beforeend', ROUTES.landing.component());
            new LandingContainer(window.onNavigate);
            break;
        case ROUTES.register.path:
            appDiv.insertAdjacentHTML('afterbegin', appHeaderLayout());
            appDiv.insertAdjacentHTML('beforeend', ROUTES.login.component()); 
            new LoginAndRegisterContainer(window.onNavigate, false);
        case ROUTES.login.path:
            appDiv.insertAdjacentHTML('afterbegin', appHeaderLayout());
            appDiv.insertAdjacentHTML('beforeend', ROUTES.login.component());
            new LoginAndRegisterContainer(window.onNavigate, true);
            break;
        default:
            break;
    }
}

export default function () {
    onNavigate(document.location.hash);
}
