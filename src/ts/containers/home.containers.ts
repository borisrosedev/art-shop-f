import BaseContainer from "../models/base-container.models";

class HomeContainer extends BaseContainer {
    constructor(onNavigate: (h:string) => void) {
        super(onNavigate);
    }
}

export default HomeContainer;