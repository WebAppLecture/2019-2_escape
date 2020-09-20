export default class Item{
    constructor(styleClass){
        this.styleClass = styleClass;
    }


    equals(other){
        if(!other){
            return false;
        }
        return (this.styleClass === other.styleClass);
    }

}

