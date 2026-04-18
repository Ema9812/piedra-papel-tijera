import { WelcomePage } from './pages/WelcomePage.js';
import { GamePage } from './pages/GamePage.js';
import { ResultPage } from './pages/ResultPage.js';

class Router {
    constructor() {
        this.routes = {
            '/': WelcomePage,
            '/game': GamePage,
            '/result': ResultPage
        };
        this.currentPage = null;
    }

    init() {
        window.addEventListener('popstate', () => this.handleRoute());
        this.handleRoute();
    }

    handleRoute() {
        const path = window.location.pathname;
        const PageComponent = this.routes[path] || this.routes['/'];
        
        if (this.currentPage) {
            if (this.currentPage.destroy) {
                this.currentPage.destroy();
            }
        }
        
        this.currentPage = new PageComponent();
        this.currentPage.render();
    }

    navigate(path) {
        window.history.pushState({}, '', path);
        this.handleRoute();
    }
}

export const router = new Router();