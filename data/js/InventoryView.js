import Inventory from "./inventory.js"

export default class InventoryView {
    
    constructor(inventory){
        this.itemSlots = [];
        this.inventory = inventory;
        inventory.setView(this);
        this.createInventory();
    }

    update(){
        for (let i = 0; i < this.inventory.getMaxSlots(); i++) {
            let item = this.inventory.slotList[i];
            let slot = this.itemSlots[i];
            if(item){
                slot.children[0].classList = item.styleClass;
            } else{
                slot.children[0].classList = "";
            }
        }
    }




    createInventory(){
        let inv = document.createElement("div");
        inv.classList.add("inventory");
        for (let i = 0; i < this.inventory.getMaxSlots() ; i++){
            let li = document.createElement("li");
            let styleDiv = document.createElement("div");
            styleDiv.setAttribute("draggable", true);
            li.appendChild(styleDiv);
            inv.appendChild(li);
            this.itemSlots.push(li);
            styleDiv.addEventListener("dragstart", onDrag.bind(this, i));
        }
        document.querySelector("body").appendChild(inv);


        function onDrag(itemIndex, ev) {
            let itemAsString = JSON.stringify(this.inventory.slotList[itemIndex]);
            ev.dataTransfer.setData("text", itemAsString);
          }
    }
}