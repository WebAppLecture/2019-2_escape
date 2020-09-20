import ClickHandler from "./ClickHandler.js";

export default class OpenInterfaceHandler extends ClickHandler{
    constructor(parent, styleClass){
        super(parent, styleClass, undefined, undefined, openInterface);

        function openInterface(){
            console.log("interface");
        }
    }
}