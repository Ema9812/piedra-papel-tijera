class State {
    constructor() {
        this.data = {
            playerMove: null,
            computerMove: null,
            result: null,
            score: {
                player: 0,
                computer: 0,
                ties: 0
            }
        };
        this.listeners = [];
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    notify() {
        this.listeners.forEach(listener => listener(this.data));
    }

    setPlayerMove(move) {
        this.data.playerMove = move;
        this.data.computerMove = this.getRandomMove();
        this.data.result = this.determineWinner(move, this.data.computerMove);
        this.updateScore();
        this.notify();
    }

    getRandomMove() {
        const moves = ['piedra', 'papel', 'tijera'];
        const randomIndex = Math.floor(Math.random() * 3);
        return moves[randomIndex];
    }

    determineWinner(player, computer) {
        if (player === computer) return 'empate';
        
        const wins = {
            piedra: 'tijera',
            papel: 'piedra',
            tijera: 'papel'
        };
        
        return wins[player] === computer ? 'ganar' : 'perder';
    }

    updateScore() {
        if (this.data.result === 'ganar') {
            this.data.score.player++;
        } else if (this.data.result === 'perder') {
            this.data.score.computer++;
        } else if (this.data.result === 'empate') {
            this.data.score.ties++;
        }
    }

    resetGame() {
        this.data.playerMove = null;
        this.data.computerMove = null;
        this.data.result = null;
        this.notify();
    }

    resetScore() {
        this.data.score = {
            player: 0,
            computer: 0,
            ties: 0
        };
        this.data.playerMove = null;
        this.data.computerMove = null;
        this.data.result = null;
        this.notify();
    }

    saveToStorage() {
        localStorage.setItem('gameState', JSON.stringify(this.data));
    }

    loadFromStorage() {
        const saved = localStorage.getItem('gameState');
        if (saved) {
            const parsed = JSON.parse(saved);
            this.data.score = parsed.score;
            this.notify();
        }
    }
}

export const state = new State();