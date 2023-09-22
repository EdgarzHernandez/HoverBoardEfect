// Obtiene el elemento con el ID 'contenedor' del documento HTML
const container = document.getElementById('contenedor');

// Array de colores disponibles para los cuadros
const colores = ['#E0286B', '#13A8CD', '#62CD13', '#CDAE13', '#B43BE8', '#FF02DC', '#33974D', '#909733', '#DF5F28'];

// Número de cuadros a generar
const cuadros = 500;

// Bucle para crear los cuadros
for (let i = 0; i < cuadros; i++) 
{
    // Crea un nuevo elemento div para representar un cuadro
    const square = document.createElement('div');

    // Agrega la clase 'cuadro' al cuadro para aplicar estilos de CSS
    square.classList.add('cuadro');

    // Agrega un evento para cambiar el color al pasar el mouse sobre el cuadro
    square.addEventListener('mouseover', () => establecercolor(square));

    // Agrega un evento para restablecer el color cuando el mouse sale del cuadro
    square.addEventListener('mouseout', () => eliminarcolor(square));

    // Agrega el cuadro al contenedor
    container.appendChild(square);
}

// Función para establecer un color aleatorio al cuadro
function establecercolor(element) 
{
    const color = coloraleatorio();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// Función para eliminar el color y la sombra del cuadro
function eliminarcolor(element) 
{
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

// Función para obtener un color aleatorio del array de colores
function coloraleatorio() {
    return colores[Math.floor(Math.random() * colores.length)];
}
