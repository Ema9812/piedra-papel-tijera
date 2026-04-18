import { router } from '../router.js';
import { state } from '../state.js';

export class GamePage {
    render() {
        const app = document.getElementById('app');
        const score = state.data.score;
        
        app.innerHTML = `
            <div class="card">
                <h1 class="main-title">🎯 Elige tu jugada</h1>
                
                <div id="options-container" class="options-container"></div>
                
                <div class="score-board">
                    <div class="score-item">
                        <div>🏆</div>
                        <div class="score-value">${score.player}</div>
                        <div>Jugador</div>
                    </div>
                    <div class="score-item">
                        <div>🤖</div>
                        <div class="score-value">${score.computer}</div>
                        <div>CPU</div>
                    </div>
                    <div class="score-item">
                        <div>🤝</div>
                        <div class="score-value">${score.ties}</div>
                        <div>Empates</div>
                    </div>
                </div>
                
                <div class="buttons-grid">
                    <button id="reset-score-btn" class="btn-secondary">🔄 Reiniciar Puntaje</button>
                    <button id="back-btn" class="btn-secondary">🔙 Volver</button>
                </div>
                
                <div class="typography">
                    <p>Topografía de Doble línea</p>
                    <p>
                        <a href="https://fotos.ganale.zam/opresion/Dobles-Sana" target="_blank">
                            https://fotos.ganale.zam/opresion/Dobles-Sana
                        </a>
                    </p>
                </div>
            </div>
        `;
        
        // Renderizar opciones
        const optionsContainer = document.getElementById('options-container');
        const options = ['piedra', 'papel', 'tijera'];
        const icons = { piedra: '🪨', papel: '📄', tijera: '✂️' };
        const labels = { piedra: 'Piedra', papel: 'Papel', tijera: 'Tijera' };
        
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-card';
            button.innerHTML = `
                <div>${icons[option]}</div>
                <div class="option-label">${labels[option]}</div>
            `;
            button.addEventListener('click', () => {
                state.setPlayerMove(option);
                router.navigate('/result');
            });
            optionsContainer.appendChild(button);
        });
        
        // Event listeners
        document.getElementById('reset-score-btn').addEventListener('click', () => {
            state.resetScore();
            this.render();
        });
        
        document.getElementById('back-btn').addEventListener('click', () => {
            router.navigate('/');
        });
    }
}