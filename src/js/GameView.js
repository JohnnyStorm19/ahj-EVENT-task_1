import { calcTileType } from "./calcTileType";

export default class GameView {
    constructor(size) {
        this.container = null;
        this.boardContainer = null;
        this.boardEl = null;
        this.size = size;
        this.cells = [];
        this.theme = 'arctic';
        this.addCharacter = this.addCharacter.bind(this);
    }
    bindToDom(element) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
            if (!(element instanceof HTMLElement)) {
                throw new Error("container is not HTMLElement");
            }
        }
        this.container = element;
    }
    checkBinding() {
        if (this.container === null) {
          throw new Error("GamePlay not bind to DOM");
        }
    }
    drawBoard(theme, element, container) {
        this.checkBinding();
        if (typeof element === 'string' && typeof container === 'string') {
            element = document.querySelector(element);
            container = document.querySelector(container);
            if (!(element instanceof HTMLElement) || !(container instanceof HTMLElement)) {
                throw new Error("container or element are not HTMLElement");
            }
        }
        this.boardEl = element;
        this.boardContainer = container;

        this.boardEl.classList.add(theme);
        for (let i = 0; i < Math.pow(this.size, 2); i += 1) {
            const cellEl = document.createElement("div");
            cellEl.classList.add(
            "cell",
            "map-tile",
            `map-tile-${calcTileType(i, this.size)}`
            );
            this.boardEl.append(cellEl);
        }
        this.cells = [...this.boardEl.children];
        this.boardContainer.append(this.boardEl);
        this.container.append(this.boardContainer);
    }
    addCharacter() {
        const oldCharEl = document.querySelector(".character");
    
        if (oldCharEl) {
          oldCharEl.remove();
        }
    
        const randomNumber = Math.floor(Math.random() * this.cells.length);
        const cellEl = this.boardEl.children[randomNumber];
        const charEl = document.createElement("div");
    
        charEl.classList.add("character");
        cellEl.append(charEl);
    }
}