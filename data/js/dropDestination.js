export default class DropDestination{
    constructor(dropHtmlElement, onDropCallback){
        this.dropHtmlElement = dropHtmlElement;
        this.onDropCallback = onDropCallback;
        
        dropHtmlElement.addEventListener("dragover", allowDrop);
        dropHtmlElement.addEventListener("drop", onDropCallback);

        function allowDrop(event) {
            event.preventDefault();
        }
    }
}