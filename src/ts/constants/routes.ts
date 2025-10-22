import homePage from "../ui/pages/home.pages";
import landingPage from "../ui/pages/landing.pages";
import loginPage from "../ui/pages/login.pages";

const ROUTES = {
    home: {
        path: '#home',
        component: homePage
    },
    landing: {
        path: '',
        component: landingPage
    },
    login: {
        path: '#login',
        component: loginPage
    },
    error: {
        path: '#error',
    },
};

export default ROUTES;
