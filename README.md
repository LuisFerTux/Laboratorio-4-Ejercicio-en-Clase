# Laboratorio-4-Ejercicio-en-Clase

1. Deberás de agregar la funcionalidad de JavaScript necesaria para que cuando el usuario
teclee un nuevo Todo y le dé clic en Post Todo este debe de ser agregado a la lista del lado
derecho.

2. Cada elemento dentro de la lista debe de tener su propio checkbox. El propósito de este input es para marcar cada elemento individualmente como completos.

Tips: 

Para generar un checkbox se utiliza la etiqueta “input” con el atributo type=”checkbox” y el atributo “name” con el valor que desea que aparezca al lado de él.

<input type = "checkbox" name="todo" />


Vas a necesitas utilizar los métodos vistos en clase para manipular el DOM: 

> document.getElementById
> addEventListener
> document.getElementsByName()
> innerHTML
> e.preventDefault();

3. Una vez que termines con la funcionalidad de Post Todo le deberás de agregar
funcionalidad a los tres botones de la lista.

a. Clear all Todo’s deberá de eliminar la selección de todos los checkboxes de la lista.

b. Mark all Todo’s deberá de marcar todos los checkboxes de la lista.

c. Delete all Todo’s deberá de eliminar todos los elementos de la lista y dejarla vacía.

TIP

Para marcar y desmarcar checkboxes existe una propiedad del mismo elemento llamada “checked” que puede ser true o false para indicar el estatus del mismo.


4. Eres libre de agregar clases o id’s a los elementos del html. Si lo necesitas agrega más
elementos.

5. Eres libre de modificar el CSS proporcionado, no obstante, no será evaluado en esta
práctica.
