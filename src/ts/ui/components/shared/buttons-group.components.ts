import { Button } from "../../../interfaces/button.interfaces";
import buttonComponent from "./button.components";


function buttonsGroup(btns: Array<Button>, { ariaLabel }) {
    return (
        `
            <div class="btn-group" role="group" aria-label="${ariaLabel}">
                ${btns.map((btn:Button) => buttonComponent(btn)).join(" ")}
            </div>
        
        `
    )
}

export default buttonsGroup;