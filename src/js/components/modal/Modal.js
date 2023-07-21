import './modal.css'
export default class Modal {
    constructor(element) {
        if(typeof element === 'string') {
            element = document.querySelector(element);
        }
        this.modalContainer = element;
        this.modalContent = this.modalContainer.querySelector('.modal');
        this.closer = this.modalContainer.querySelector('.modal__close');

        this.onClose = this.onClose.bind(this);

        this.closer.addEventListener('click', this.onClose);
    }
    reveal() {
        this.modalContainer.classList.add('modal_active');
    }
    onClose() {
        this.modalContainer.classList.remove('modal_active');
        window.location.reload();
    }
}