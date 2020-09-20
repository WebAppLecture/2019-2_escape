import ItemFactory from "./ItemFactory.js";
import DropDestination from "./dropDestination.js";

export default class DropDestinationFactory {
    constructor(){}


    static createDoorKeyHole(){
        let htmlElement = document.querySelector(".keyhole");
        return new DropDestination(htmlElement, onKeyHoleDrop);

        function onKeyHoleDrop(event) {
            try{
                let item = ItemFactory.createFromJson(event.dataTransfer.getData("text"));
                if(item.equals(ItemFactory.createDoorKey())){
                    game.inventory.removeItem(item); 
                    console.log("tatsächlich der schlüssel");
                } else {
                    console.log("falsches item");
                }
            } catch(e){
            }
        }
    }


}