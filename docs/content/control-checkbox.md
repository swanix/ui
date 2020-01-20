# Checkbox

Las cajas de chequeo son controles que se utilizan en formularios para seleccionar una o varias opciones en el sistema. Su funcionamiento obedece a dos estados, activo o reposo. La metáfora de base en las cajas de chequeo es la de las listas impresas de cuestionarios donde se pueden seleccionar varias respuestas. A diferencia de los botones de radio, que son excluyentes, las cajas de chequeo permiten la selección de opciones simultáneas o presentes en listados, también permiten la selección de opciones individuales. 

En este último ejemplo tiene el mismo comportamiento de un interruptor, incluyendo una caja de chequeo que activa o desactiva una característica del sistema, muy común en aplicaciones móviles Android que por lo regular utilizan este control en las pantallas de configuración o en formularios específicos.

<iframe class="code-preview" height="145px"></iframe>
<textarea class="code-editor" name="code">
<div>
	<input id="checkbox1" type="checkbox" value="1" name="checkbox" checked="checked">
	<label for="checkbox1"><span></span>Checkbox 1</label>
</div>
<div>
	<input id="checkbox2" type="checkbox" value="2" name="checkbox">
	<label for="checkbox2"><span></span>Checkbox 2</label>
</div>
<div>
	<input id="checkbox3" type="checkbox" value="3" name="checkbox">
	<label for="checkbox3"><span></span>Checkbox 3</label>
</div>
</textarea>

### Dark Mode

<iframe class="code-preview" height="145px"></iframe>
<textarea class="code-editor" name="code">
<body theme="dark">
<div>
	<input id="checkbox1" type="checkbox" value="1" name="checkbox" checked="checked">
	<label for="checkbox1"><span></span>Checkbox 1</label>
</div>
<div>
	<input id="checkbox2" type="checkbox" value="2" name="checkbox">
	<label for="checkbox2"><span></span>Checkbox 2</label>
</div>
<div>
	<input id="checkbox3" type="checkbox" value="3" name="checkbox">
	<label for="checkbox3"><span></span>Checkbox 3</label>
</div>
</body>
</textarea>

### CSS Variables

Variables disponibles en este componente. Si quieres crear temas personalizados visita la sección [Themes](/themes)

```css
:root,
[theme='light'] {
  /* Input Checkbox */
  --input-check:                 #808080;
  --input-check-border:          #CCCCCC solid 2px;
  --input-check-border-radius:   0;
  --input-check-bg:              #F7F7F7;
  /* Input Checkbox active */
  --input-check-active:          var(--brand1, #000000);
  --input-check-active-border:   var(--brand1, #000000) solid 2px;
  --input-check-active-bg:       #FFFFFF;
}
```