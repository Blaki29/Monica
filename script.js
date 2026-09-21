// Añadimos el evento de clic al botón
boton.addEventListener('click', () => {
  // Alterna la clase "show". Si existe la quita, si no existe la pone.
  contenido.classList.toggle('show');
});
function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.target.classList.add('active');
  }
function toggleCheck(el) {
    el.classList.toggle('checked');
    el.querySelector('.check-box').textContent = el.classList.contains('checked') ? '✓' : '';
    updateProgress();
  }
function updateProgress() {
    const total = document.querySelectorAll('.check-item').length;
    const done = document.querySelectorAll('.check-item.checked').length;
    const pct = Math.round((done / total) * 100);
    document.getElementById('progress').style.width = pct + '%';
    document.getElementById('progress-label').textContent = `${done} de ${total} criterios completados`;
  }
const boton = document.getElementById('boton-menu');
const menu = document.getElementById('contenido-menu');

boton.addEventListener('click', function() {
  menu.classList.toggle('mostrar');
});

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const barra = document.getElementById('miBarra');
    const texto = document.getElementById('puntosActuales');
    const boton = document.getElementById('btnSumar');
    
});
