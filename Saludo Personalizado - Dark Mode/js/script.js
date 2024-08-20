
function modoOscuro(){
    document.body.style.backgroundColor = '#333';
    document.body.style.color = 'white';
    document.getElementById('').style.color = 'black';
}

function modoClaro(){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}


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

