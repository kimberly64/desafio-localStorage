document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('buttonText');
    const input = document.getElementById('inputText');

    button.addEventListener('click', () => {
        const inputValue = input.value;
        // Guardamos el valor en localStorage con la clave 'userInput'
        localStorage.setItem('userInput', inputValue);
        // Limpiamos el input después de guardar el dato
        input.value = '';
    });
});