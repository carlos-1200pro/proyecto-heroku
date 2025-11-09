// Función 1: Mostrar la hora actual
function mostrarHora() {
    const ahora = new Date();
    document.getElementById("hora").innerText = "Hora actual: " + ahora.toLocaleString();
}

// Función 2: Cambiar color de fondo
function cambiarColor() {
    const colores = ["#FFCCCC", "#CCFFCC", "#CCCCFF", "#FFFFCC", "#CCFFFF", "#FFD700", "#FFA07A"];
    const color = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = color;
}
