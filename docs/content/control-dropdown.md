# Dropdown (Select)

Las listas desplegables son elementos que permiten elegir una opción entre varias disponibles. Se diferencian con los botones de radio en la manera como se presentan: como un campo de texto que incluye un icono para indicar la presencia de más opciones. Al ser pulsado se despliega un listado y al elegir la opción deseada, la lista vuelve a su estado de reposo almacenando la información en un formulario o ejecutando alguna acción en pantalla. 

Estas se conocen en inglés como dropdown lists y son muy empleadas para elegir una opción entre gran cantidad de datos como listados de países o idiomas donde utilizar botones de radio es poco recomendado por el espacio que ocuparían en pantalla. Windows Phone se refiere a ellas como combo boxes y Android como spinners. Por su parte, iOS no soporta este control pero tiene un componente nativo llamado picker que permite elegir una única opción en un listado (equivalente a las listas desplegables).

De forma similar, los menús desplegables ofrecen un comportamiento parecido a las listas desplegables pero se enfocan por lo general en la ejecución de acciones del sistema y en ofrecer opciones de navegación.

<iframe class="code-preview" height="240px"></iframe>
<textarea class="code-editor" name="code">
<!-- Small -->
<label for="select">Small:</label>
<select name="select" class="is-small">
	<optgroup label="Option Group 1">
	  <option value="1">Option 1</option>
	  <option value="2">Option 2</option>
	  <option value="3">Option 3</option>
	</optgroup>
	<optgroup label="Option Group 2">
	  <option value="1">Option 1</option>
	  <option value="2">Option 2</option>
	  <option value="3">Option 3</option>
	</optgroup>
</select>
<hr/>
<!-- Medium -->
<label for="select">Medium:</label>
<select name="select">
	<optgroup label="Option Group 1">
	  <option value="1">Option 1</option>
	  <option value="2">Option 2</option>
	  <option value="3">Option 3</option>
	</optgroup>
	<optgroup label="Option Group 2">
	  <option value="1">Option 1</option>
	  <option value="2">Option 2</option>
	  <option value="3">Option 3</option>
	</optgroup>
</select>
<hr/>
<!-- Large -->
<label for="select">Large:</label>
<select name="select" class="is-large">
	<optgroup label="Option Group 1">
	  <option value="1">Option 1</option>
	  <option value="2">Option 2</option>
	  <option value="3">Option 3</option>
	</optgroup>
	<optgroup label="Option Group 2">
	  <option value="1">Option 1</option>
	  <option value="2">Option 2</option>
	  <option value="3">Option 3</option>
	</optgroup>
</select>
</textarea>
