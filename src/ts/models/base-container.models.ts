class BaseContainer {
    onNavigate: (h: string) => void;
    constructor(onNavigate: (h: string) => void) {
        this.onNavigate = onNavigate;
    }
}

export default BaseContainer;
