import { router } from './router.js';
import { state } from './state.js';

// Inicializar la aplicación
function init() {
    // Cargar estado inicial desde localStorage
    state.loadFromStorage();
    
    // Configurar el router
    router.init();
    
    // Escuchar cambios en el estado
    state.subscribe(() => {
        // Guardar estado en localStorage cuando cambie
        state.saveToStorage();
    });
}

// Iniciar la app cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);