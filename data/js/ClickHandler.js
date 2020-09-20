export default class ClickHandler {

    constructor(parent, styleClass, setToClass, target, clickFunction){
        this.styleClass = styleClass;
        this.setToClass = setToClass;
        this.target = target || parent;
        this.clickFunction = clickFunction.bind(this);

        this.createClickElement();
        parent.appendChild(this.clickElement);    
    }

    createClickElement() {
        this.clickElement = document.createElement("div");
        this.clickElement.classList.add(this.styleClass);
        this.clickElement.addEventListener("click", this.clickFunction);
    }

    removeEventListener() {
        this.clickElement.removeEventListener("click", this.clickFunction);
    }

}