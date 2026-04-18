import { router } from '../router.js';
import { state } from '../state.js';

export class ResultPage {
    render() {
        const app = document.getElementById('app');
        const { playerMove, computerMove, result, score } = state.data;
        
        const resultTexts = {
            ganar: '🎉 ¡Ganaste! 🎉',
            perder: '😢 Perdiste 😢',
            empate: '🤝 ¡Empate! 🤝'
        };
        
        const resultMessages = {
            ganar: '¡Excelente jugada!',
            perder: '¡Sigue intentando!',
            empate: '¡Casi lo logras!'
        };
        
        const icons = { piedra: '🪨', papel: '📄', tijera: '✂️' };
        const labels = { piedra: 'Piedra', papel: 'Papel', tijera: 'Tijera' };
        
        const resultClass = {
            ganar: 'win',
            perder: 'lose',
            empate: 'tie'
        };
        
        app.innerHTML = `
            <div class="card">
                <h1 class="main-title">📋 Resultado</h1>
                
                <!-- Componente Ganaste/Perdiste/Empate -->
                <div class="result-badge ${resultClass[result]}">
                    <div class="result-text">${resultTexts[result]}</div>
                    <div class="result-detail">${resultMessages[result]}</div>
                </div>
                
                <!-- Mostrar movimientos -->
                <div class="moves-showcase">
                    <div class="move-display">
                        <div class="move-icon">${icons[playerMove]}</div>
                        <div><strong>Tú</strong></div>
                        <div>${labels[playerMove]}</div>
                    </div>
                    <div class="move-display">
                        <div class="move-icon">${icons[computerMove]}</div>
                        <div><strong>CPU</strong></div>
                        <div>${labels[computerMove]}</div>
                    </div>
                </div>
                
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
                    <button id="play-again-btn" class="btn-start" style="padding: 12px 30px; font-size: 1.1em;">🎮 Jugar de Nuevo</button>
                    <button id="home-btn" class="btn-secondary">🏠 Inicio</button>
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
        
        document.getElementById('play-again-btn').addEventListener('click', () => {
            state.resetGame();
            router.navigate('/game');
        });
        
        document.getElementById('home-btn').addEventListener('click', () => {
            state.resetGame();
            router.navigate('/');
        });
    }
}