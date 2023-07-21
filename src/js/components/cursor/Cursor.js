import './cursor.css';

export default class Cursor {
    constructor(element){
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        this.element = element;
        this.moveCursor = this.moveCursor.bind(this);
    }
    moveCursor(e) {
        const mouseY = e.clientY;
        const mouseX = e.clientX;
        this.element.style.left = `${mouseX}px`;
        this.element.style.top = `${mouseY}px`;
    }
}