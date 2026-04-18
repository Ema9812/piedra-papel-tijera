export class Button {
    constructor(text, onClick, className = 'primary-btn') {
        this.text = text;
        this.onClick = onClick;
        this.className = className;
    }

    render() {
        const button = document.createElement('button');
        button.textContent = this.text;
        button.className = this.className;
        button.addEventListener('click', this.onClick);
        return button;
    }
}