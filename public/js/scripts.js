function startAdventure() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Antes de Empezar:</h2>
        <p>Añade el bot a tus favoritos en Telegram para un acceso fácil.</p>
        <button onclick="stepTwo()">¡Listo!</button>
    `;
}

function stepTwo() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>¡Nos esperan tres inmersiones profundas!</h2>
        <p>Cada sesión de entrenamiento subsiguiente se desbloqueará 24 horas después de completar la anterior...</p>
        <button onclick="stepThree()">¡Claro!!</button>
    `;
}

function stepThree() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Beneficios del Aprendizaje Práctico:</h2>
        <p>La investigación muestra que el aprendizaje práctico es más del 20% más efectivo...</p>
        <button onclick="stepFour()">Continuar</button>
    `;
}

function stepFour() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>¿Listo para comenzar?</h2>
        <p>¡La primera tarea te está esperando!</p>
        <button onclick="stepFive()">Inicia la aventura: Profundidad de 1 metro</button>
    `;
}

function stepFive() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Instala Phantom Wallet</h2>
        <p>Para moverte libremente bajo el agua, necesitas recibir algunos pases...</p>
        <button onclick="showInstructions()">Ver instrucciones</button>
    `;
}

function showInstructions() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Instrucciones:</h2>
        <p>Instala Phantom Wallet en tu teléfono siguiendo el enlace a continuación...</p>
        <button onclick="nextStep()">Listo!</button>
        <a href="https://trustwallet.com/es" target="_blank">Obtén la app</a>
    `;
}

function nextStep() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Recuerda:</hю
        <p>Utiliza siempre enlaces oficiales...</p>
        <button onclick="showGoldRule()">Claro que si!</button>
    `;
}

function showGoldRule() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>¡Genial, amigo!</hю
        <p>¿Listo для descubrir la regla de oro de las criptomonedas?</p>
        <button onclick="goldRule()">La Regla de Oro</button>
    `;
}

function goldRule() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>La Regla de Oro</h2>
        <p>Cuando creas una nueva cartera, recibes una frase-semilla (SEED)...</p>
        <button onclick="secureSeed()">Seguridad es lo primero! 🗝️</button>
    `;
}

function secureSeed() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Guarda tu frase SEMILLA</h2>
        <p>Guárdala в lugar seguro где nadie más pueda acceder...</p>
        <button onclick="taskComplete()">¡Hecho! ¡Frase segura! 🙌</button>
    `;
}

function taskComplete() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>¡Muy bien, explorador!</h2>
        <p>¡Has recibido tu primer pase и asegurado tu acceso!...</p>
        <button onclick="nextAdventure()">¡Sumérgete más!</button>
    `;
}

function nextAdventure() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Registro в Bitso</h2>
        <p>¡Genial! Ahora necesitamos un pase для comerciar en El Bazar Marítimo...</p>
        <button onclick="registerBitso()">¡Aceptа el reto - Profundidad #3m!</button>
    `;
}

function registerBitso() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Registro в Bitso</h### Подробная инструкция по созданию и хостингу Telegram Mini App на Netlify и Heroku
