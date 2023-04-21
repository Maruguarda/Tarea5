// Información para llegar a la API
const url =' https://api.datamuse.com/words?sl='

// Selecciona elementos de página
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

const endpoint = url.wordQuery();

// Función asíncrona
const getSuggestions = () => {
    const wordQuery = inputField.value;
    const endpoint = url + WordQuery;
    fetch(endpoint)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('¡Solicitud fallida!');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
      // renderRawResponse(jsonResponse);
      renderResponse(jsonResponse);
    });
        
}

// Borra los resultados anteriores y muestra los resultados en la página web
const displaySuggestions = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
