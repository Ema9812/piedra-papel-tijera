export class Options {
    constructor(onSelect) {
        this.onSelect = onSelect;
        this.options = [
            { name: 'piedra', icon: '🪨', label: 'Piedra' },
            { name: 'papel', icon: '📄', label: 'Papel' },
            { name: 'tijera', icon: '✂️', label: 'Tijera' }
        ];
    }

    render() {
        const container = document.createElement('div');
        container.className = 'options-container';
        
        this.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.innerHTML = `
                <div>${option.icon}</div>
                <div style="margin-top: 10px; font-size: 0.8em;">${option.label}</div>
            `;
            button.addEventListener('click', () => this.onSelect(option.name));
            container.appendChild(button);
        });
        
        return container;
    }
}