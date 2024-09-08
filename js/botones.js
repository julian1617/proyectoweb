function showForm(formId) {
    // Oculta todos los formularios dentro de .form-container
    document.querySelectorAll('.form-container form').forEach(form => form.classList.add('form-hidden'));
    // Muestra el formulario correspondiente
    document.getElementById(formId).classList.remove('form-hidden');
}

function hideAllForms() {
    // Oculta todos los formularios dentro de .form-container
    document.querySelectorAll('.form-container form').forEach(form => form.classList.add('form-hidden'));
}

document.getElementById('finishButton').addEventListener('click', function() {
    // Encuentra el formulario visible
    const visibleForm = document.querySelector('.form-container form:not(.form-hidden)');
    if (visibleForm) {
        visibleForm.submit(); // Envía el formulario visible
    } else {
        alert('No hay ningún formulario visible para enviar.');
    }
});

// Asigna la función hideAllForms al botón "INICIO"
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.trim() === 'INICIO') {
        button.addEventListener('click', hideAllForms);
    }
});
