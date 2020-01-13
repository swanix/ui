# Radio Button

Los botones de radio se utilizan por lo regular en formularios, para seleccionar una opción específica. El uso principal de este control es el de elegir entre varias, una única opción. Su comportamiento es excluyente, por lo que sólo es posible la selección de una opción de las disponibles. En el momento de seleccionar la alternativa deseada la anterior se desactiva para darle paso a la nueva. 

Se conocen en inglés como option buttons o radio buttons y su utilización también se inspiran en una metáfora del mundo real. En los radios de lo autos se usaban grupos de botones para seleccionar estaciones predefinidas. En este esquema solo una de las estaciones podía estar seleccionada a la vez, cuando se elegía otra, se expulsaba el botón actual y se sintonizaba la nueva estación presionada. Esta misma solución se mantiene con los botones de radio en las interfaces gráficas.

<iframe class="code-preview" height="145px"></iframe>
<textarea class="code-editor" name="code">
<div>
	<input id="radio1" type="radio" value="1" name="radio" checked="checked">
	<label for="radio1"><span><span></span></span>Radio 1</label>
</div>
<div>
	<input id="radio2" type="radio" value="2" name="radio">
	<label for="radio2"><span><span></span></span>Radio 2</label>
</div>
<div>
	<input id="radio3" type="radio" value="3" name="radio">
	<label for="radio3"><span><span></span></span>Radio 3</label>
</div>
</textarea>

### Dark Mode

<iframe class="code-preview" height="145px"></iframe>
<textarea class="code-editor" name="code">
<body class="theme-dark">
<div>
	<input id="radio1" type="radio" value="1" name="radio" checked="checked">
	<label for="radio1"><span><span></span></span>Radio 1</label>
</div>
<div>
	<input id="radio2" type="radio" value="2" name="radio">
	<label for="radio2"><span><span></span></span>Radio 2</label>
</div>
<div>
	<input id="radio3" type="radio" value="3" name="radio">
	<label for="radio3"><span><span></span></span>Radio 3</label>
</div>
</body>
</textarea>

