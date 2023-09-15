function buscarPersonajes() {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('results');
    const query = searchInput.value.trim();

    if (query === '') {
      resultsContainer.innerHTML = 'Ingresa un término de búsqueda';
      return;
    }

    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then(response => response.json())
      .then(data => {
        resultsContainer.innerHTML = '';

        if (data.results.length === 0) {
          resultsContainer.innerHTML = 'No se encontraron resultados';
        } else {
          data.results.forEach(personaje => {
            const article = document.createElement('article');
            article.innerHTML = `
              <div class="imagen-contenedor">
                <img src="${personaje.image}" alt="${personaje.name}">
              </div>
              <h2>${personaje.name}</h2>
              <p>Género: ${personaje.gender}</p>
              <p>Especie: ${personaje.species}</p>
              <p>Estado: ${personaje.status}</p>
            `;
            resultsContainer.appendChild(article);
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }