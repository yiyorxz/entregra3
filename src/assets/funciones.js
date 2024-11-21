// Función 1: Validar el formulario con varios parámetros y el objeto this
function validarFormulario(event, nombre, correo, mensaje) {
    event.preventDefault();
    
    console.log("Validando formulario...");

    // Validar campos vacíos
    if (nombre.value.trim() === "" || correo.value.trim() === "" || mensaje.value.trim() === "") {
        console.log("Error: Campos vacíos");
        alert("Todos los campos son obligatorios.");
        return false;
    }

    // Si pasa la validación
    console.log("Formulario validado correctamente.");
    alert(`Formulario enviado:\nNombre: ${nombre.value}\nCorreo Electrónico: ${correo.value}\nMensaje: ${mensaje.value}`);
    console.log("Formulario enviado por: ", this);
    return true;
}

// Función 2: Cambiar color de fondo y texto del botón usando el objeto `this` y más parámetros
function cambiarColorMouseOver(elemento, colorFondo, colorTexto) {
    console.log("Mouse sobre el botón:", this);
    console.log(`Cambiando color de fondo a ${colorFondo} y color de texto a ${colorTexto}`);
    this.style.backgroundColor = colorFondo; 
    this.style.color = colorTexto;
}

// Función 3: Restaurar color original del botón usando el objeto `this` y parámetros adicionales
function restaurarColorMouseOut(elemento, colorFondoOriginal, colorTextoOriginal) {
    console.log("Mouse fuera del botón:", this);
    console.log(`Restaurando color de fondo a ${colorFondoOriginal} y color de texto a ${colorTextoOriginal}`);
    this.style.backgroundColor = colorFondoOriginal; 
    this.style.color = colorTextoOriginal;
}

// Función 4: Mostrar alerta cuando el formulario pierde el foco y usar `this`
function alertaPerdidaFoco(elemento) {
    console.log(`${this.id} perdió el foco.`);
    alert(`Has perdido el foco en ${this.id}.`);
}

// Función 5: Contar caracteres del mensaje utilizando varios parámetros y `this`
function contarCaracteres(maxCaracteres) {
    let mensaje = document.getElementById('message');
    let contador = document.getElementById('contador');
    
    mensaje.addEventListener('input', function() {
        let caracteresRestantes = maxCaracteres - this.value.length;
        console.log(`Caracteres restantes: ${caracteresRestantes}`);
        contador.textContent = `Caracteres restantes: ${caracteresRestantes}`;
        contador.style.color = caracteresRestantes < 0 ? 'red' : 'black';
    });
}

// Función para mostrar alerta de bienvenida (sin cambios mayores)
function alertaBienvenida() {
    if (!localStorage.getItem('bienvenidaMostrada')) {
        console.log("Mostrando alerta de bienvenida.");
        alert("¡Bienvenido a nuestra tienda online!");
        localStorage.setItem('bienvenidaMostrada', 'true');
    } else {
        console.log("Alerta de bienvenida ya mostrada anteriormente.");
    }
}

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log("Documento cargado.");

    // Mostrar alerta de bienvenida
    alertaBienvenida();

    // Referencias a los elementos del DOM
    let form = document.getElementById('contact-form');
    let nombre = document.getElementById('name');
    let correo = document.getElementById('email');
    let mensaje = document.getElementById('message');
    let submitBtn = document.getElementById('submit-btn');

    // Asociar eventos a funciones
    form.addEventListener('submit', function(event) {
        validarFormulario.call(this, event, nombre, correo, mensaje);
    });

    submitBtn.addEventListener('mouseover', function() {
        console.log("Evento mouseover en el botón de submit.");
        cambiarColorMouseOver.call(this, submitBtn, '#4CAF50', 'white');
    });

    submitBtn.addEventListener('mouseout', function() {
        console.log("Evento mouseout en el botón de submit.");
        restaurarColorMouseOut.call(this, submitBtn, '', '');
    });

    // Evento adicional: cuando el formulario pierde el foco
    form.addEventListener('blur', function() {
        console.log("Formulario perdió el foco.");
        alertaPerdidaFoco.call(this, form);
    }, true);

    // Iniciar contador de caracteres
    contarCaracteres(250);
});
//gracias chat gpt (no tengo mas creatividad para las funciones)