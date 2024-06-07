fetch('datos.json')
  .then(response => response.json())
  .then(data => {
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));
