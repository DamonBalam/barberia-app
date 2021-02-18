document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
});

function iniciarApp() {
    mostrarServicios();
}

async function mostrarServicios() {
    try {
        const resultado = await fetch('./servicios.json');
        const { servicios } = await resultado.json();

        console.log(servicios);

        // ? GENERAR HTML
        servicios.forEach((servicio) => {
            const { id, nombre, precio } = servicio;

            // DOM Scripting
            // ? nombre
            const nombreServicio = document.createElement('p');
            nombreServicio.textContent = nombre;
            nombreServicio.classList.add('nombre-servicio');

            // ? precio
            const precioServicio = document.createElement('p');
            precioServicio.textContent = `$ ${precio}`;
            precioServicio.classList.add('precio-servicio');

            // ? div
            const servicioDiv = document.createElement('div');
            servicioDiv.classList.add('servicio');

            // ? Inyectar

            servicioDiv.appendChild(nombreServicio);
            servicioDiv.appendChild(precioServicio);
        });
    } catch (error) {
        console.log(error);
    }
}
