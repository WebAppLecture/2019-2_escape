import Item from "./Item.js";

export default class ItemFactory {
    constructor(){}


    static createDoorKey(){
        return new Item("doorkey");
    }
    
    static createFromJson(json){
        try{
            return new Item(JSON.parse(json).styleClass);
        }
        catch(e){}
    }


}