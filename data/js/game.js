import ToggleWithBreakHandler from "./ToggleWithBreakHandler.js";
import OpenInterfaceHandler from "./OpenInterfaceHandler.js";
import Inventory from "./Inventory.js";
import InventoryView from "./InventoryView.js";
import ClickableItem from "./ClickableItem.js";
import ItemFactory from "./ItemFactory.js";
import DropDestinationFactory from "./DropDestinationFactory.js";

export default class Game {
    
    
    constructor(){
        this.createBeakingHandler();
        this.createStaticElements();
        this.createInterfaceHandler();
        this.createDropTargets();
        
    }

    createInterfaceHandler(){
        let pictureSafe = document.querySelector(".picturesafe");
        let room2 = document.querySelector(".r2");
        this.safe = new OpenInterfaceHandler(pictureSafe, "safe");
        this.inventory = new Inventory();
        this.inventoryView = new InventoryView(this.inventory);
        this.doorKey = new ClickableItem(ItemFactory.createDoorKey(), room2, this.inventory);
    }

    createBeakingHandler(){
        let room = document.querySelector(".room");
        let pictureSafe = document.querySelector(".picturesafe");
        let r2 = document.querySelector(".r2");
        this.lightSwitch = new ToggleWithBreakHandler(room, "switch", "dark", 17);
        this.jacket = new ToggleWithBreakHandler(room, "jacket", "toLeft");
        this.picture = new ToggleWithBreakHandler(pictureSafe, "picture", "pDown", 1);
        this.curtainl= new ToggleWithBreakHandler(r2, "curtainleft", "auf");
        this.curtainr= new ToggleWithBreakHandler(r2, "curtainright", "aufr");
        this.lightSwitch2 = new ToggleWithBreakHandler(r2, "switch", "dark2", 17);
    }

    createStaticElements(){
        let room = document.querySelector(".room");
        let image = document.createElement("img");
        image.src="./data/img/blume.jpg"; image.draggable= "false"; image.alt="Eine Blume.";
        document.querySelector(".picture").appendChild(image);
        image.setAttribute("draggable", "false");
        let archway = document.createElement("div");
        archway.classList.add("archway");
        room.appendChild(archway);
        let archwayfloor = document.createElement("div");
        archwayfloor.classList.add("archwayfloor");
        archway.appendChild(archwayfloor);
        let carpet = document.createElement("div");
        carpet.classList.add("carpet");
        room.appendChild(carpet);
        let lamp = document.createElement("div");
        lamp.classList.add("lamp");
        room.appendChild(lamp);
    }

    createDropTargets(){
        DropDestinationFactory.createDoorKeyHole();
    }

}