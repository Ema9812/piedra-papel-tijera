import { router } from '../router.js';
import { state } from '../state.js';

export class WelcomePage {
    render() {
        const app = document.getElementById('app');
        const score = state.data.score;
        
        app.innerHTML = `
            <div class="card">
                <h1 class="main-title">🎮 Piedra,<br>Papel o Tijera</h1>
                
                <button id="start-btn" class="btn-start">🎯 Empezar</button>
                
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
        
        const startBtn = document.getElementById('start-btn');
        startBtn.addEventListener('click', () => {
            state.resetGame();
            router.navigate('/game');
        });
    }
}