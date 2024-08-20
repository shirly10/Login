document.getElementById('greetButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');

    if (name) {
        greetingMessage.textContent = `¡Hola, ${name}!`;

        function mostrarMensaje() {
            alert(`¡Hola, ${name}! Bienvenido a nuestra página.`);
        }
        mostrarMensaje();
   } else {
        greetingMessage.textContent = 'Por favor, ingresa tu nombre.';
    }
});
