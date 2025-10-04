// JavaScript para interacción básica
document.addEventListener('DOMContentLoaded', () => {
    const btnBuscar = document.getElementById('btnBuscar');
    const destinoInput = document.getElementById('destino');
    const tipoSelect = document.getElementById('tipo-viaje');


    btnBuscar.addEventListener('click', () => {
        const destino = destinoInput.value.trim();
        const tipo = tipoSelect.value;


        if(destino === '') {
            alert('Por favor, ingresa un destino');
        } else {
            alert(`Buscando ${tipo} para: ${destino}`);
        }
    });
});