import Inventory from "./Inventory.js";

export default class ClickableItem {
    constructor(item, parent, inventory) {
        this.item = item;
        this.parent = parent;
        this.inventory = inventory;
        this.createClickableItem();
    }

    createClickableItem(){
        let clickableItem = document.createElement("div");
        clickableItem.classList.add(this.item.styleClass);
        clickableItem.addEventListener("click", this.onItemClicked.bind(this));
        this.parent.appendChild(clickableItem);
        this.clickableItemElement = clickableItem;
    }

    onItemClicked(){
        let addedItemSuccessfully = this.inventory.addItem(this.item);
        if(addedItemSuccessfully === true){
            this.parent.removeChild(this.clickableItemElement);
        }

    }


}
