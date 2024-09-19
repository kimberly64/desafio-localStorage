document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos el valor almacenado en localStorage con la clave 'userInput'
    const storedValue = localStorage.getItem('userInput');
    // Obtenemos el elemento <span> donde mostraremos el dato
    const dataElement = document.getElementById('data');

    // Verificamos si el valor está disponible y lo mostramos
    if (storedValue) {
        dataElement.textContent = storedValue;
    } else {
        dataElement.textContent = 'No hay datos guardados.';
    }
});
