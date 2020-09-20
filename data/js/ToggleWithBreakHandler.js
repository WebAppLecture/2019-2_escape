import ClickHandler from "./ClickHandler.js";

export default class ToggleWithBreakHandler extends ClickHandler{

    constructor(parent, styleClass, setToClass, toggleMax, target){
        super(parent, styleClass, setToClass, target, toggleSwitch);
        
        this.toggleMax = toggleMax || false;
        this.toggleSwitchCounter = 0;

        function toggleSwitch() {
            console.log("switch");
            this.target.classList.toggle(this.setToClass);
            this.toggleSwitchCounter += 1;
            this.checkForMaxToggle();
        }
    }

    checkForMaxToggle() {
        console.log(this.toggleSwitchCounter, this.toggleMax, !!this.toggleMax)
        if(!!this.toggleMax && (this.toggleSwitchCounter >= this.toggleMax)){
            console.log("reachedMax")
            this.removeEventListener();
        }
    }
}
