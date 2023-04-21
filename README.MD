![InfotronicLogo](https://i.ibb.co/fN3TZ9y/Logo-Infotronic.png)
# **🧑‍💻 CURSO | TALLER WEB 👩‍💻**

## **✅ EJERCICIO**
Aquí hay una guía paso a paso para resolver este desafío:

1. En la parte superior de main.js, cree una variable const llamada url. Asigne url a la siguiente URL como una cadena:
    ```
    https://api.datamuse.com/words?sl=
    ```
2. La parte `?sl=` de la cadena será el comienzo de su cadena de consulta, que se utilizará para pasar parámetros a la API de Datamuse. El motor utilizará la cadena de consulta para restringir la búsqueda a palabras que suenen como su palabra.
3. Dentro de la función getSuggestions(), cree una variable const llamada wordQuery y asígnele inputField.value
4. Necesitaremos wordQuery para almacenar el valor de lo que se escribe en el campo de entrada.
5. Cree otra variable const llamada endpoint y asígnele el valor de una cadena que es url y wordQuery concatenada en ese orden.
6. Trabajaremos dentro de la función getSuggestions() durante el resto de este ejercicio.
7. Dentro de la función getSuggestions(), llame a la función fetch() y pase la constante endpoint como argumento.
8. Encadene un método .then() a la función fetch(). Pase una función de devolución de llamada de flecha como su argumento. La función de devolución de llamada debe tomar la respuesta como su único parámetro.
9. Dentro de la función de devolución de llamada exitosa, cree una declaración condicional que verifique si la propiedad `ok` del objeto de `response` se evalúa como un valor verdadero.
10. Si es así, devuelve response.json().
11. Al devolver response.json(), el siguiente método .then() encadenado recibirá una Promesa con datos JSON.
12. Debajo del bloque de código de la condición, arroja un error (`throw new Error('mensaje')`) que dice "¡Solicitud fallida!" para generar una excepción si la solicitud falla.
13. A continuación, agregaremos un segundo argumento al método .then() para agregar otra función de devolución de llamada para manejar los errores. Cree una función de flecha que tome un parámetro, networkError.
14. En el bloque de código de la función de flecha, registre networkError.message en la consola.
15. Tenga en cuenta que continuaremos agregando a este código en el próximo ejercicio para manipular la página web para ver las sugerencias de palabras de Datamuse. El botón Enviar no devolverá nada todavía. SIGUIENTE DIAPOSITIVA
16. Al final del método .then(), encadene otro método .then().
17. Como primer argumento de nuestro segundo método .then(), pase una función de devolución de llamada de flecha anónima que toma jsonResponse como su único parámetro.
18. Dentro de la función de devolución de llamada que acabamos de crear, llame a la función renderRawResponse() y pase jsonResponse como su argumento. Ejecute el código.
19. En el campo de entrada, escriba una palabra y haga clic en el botón Enviar.
20. Si todo salió bien, deberíamos ver una serie de palabras con las que respondió la API de Datamuse.
21. Tenga en cuenta que puede encontrar la declaración de la función renderRawResponse() en public/helperFunctions.js.
22. Démosle formato a nuestra respuesta de la API de Datamuse para que se vea presentable en la página web. Para hacer esto, usaremos la función renderResponse() que se definió en public/helperFunctions.js.
23. Comente renderRawResponse (jsonResponse). Luego, a continuación, llame a renderResponse (jsonResponse).