import Item from "./Item.js";

const MAX_SLOTS = 6;

export default class Inventory {
    
    constructor() {
        this.slotList = [];
        for (let i = 0; i < MAX_SLOTS; i++) {
            this.slotList.push(null);
        }
        this.view = null;
    }

    setView(view){
        this.view = view;
    }

    removeView(){
        this.view = null;
    }

    notifyViewOfUpdate(){
        if(this.view){
            this.view.update();
        }
    }

    getMaxSlots(){
        return MAX_SLOTS;
    }

    addItem(item) {
        for (let i = 0; i < MAX_SLOTS; i++) {
            if (this.slotList[i] === null) {
                this.slotList[i] = item;
                this.notifyViewOfUpdate();                
                return true;
            }
        }
        return false;

    }

    removeItem(item) {
        for (let i=0; i < MAX_SLOTS; i++) {
            if (this.slotList[i].equals(item)) {
                this.slotList[i] = null;
                this.notifyViewOfUpdate();
                return true;;
            } else {
                return false;
            }
        }
    }
}
