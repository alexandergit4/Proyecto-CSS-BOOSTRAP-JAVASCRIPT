const listaCanciones = document.getElementById('lista-canciones');
data.canciones.forEach(cancion => {
  const li = document.createElement('li');
  li.textContent = `${cancion.nombre} - Reproducciones: ${cancion.reproducciones}`;
  listaCanciones.appendChild(li);
});