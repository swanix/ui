# Button

Un botón es un elemento gráfico rectangular, cuadrado, ovalado o de formas varias que al ser pulsado realiza determinada acción del sistema. Esta representación gráfica obedece a la metáfora de los botones del mundo físico utilizados en todo tipo de equipos electrónicos. 

Los botones son elementos fundamentales para las interacciones con una aplicación. Dada la libertad para personalizar estos elementos se pueden crear diseños propios acordes con la estética de la aplicación. Sea cual sea la naturaleza o apariencia de un botón siempre existirán como constante los estados del mismo para comunicar al usuario su actividad, por lo general son: reposo, presionado, seleccionado e inactivo. Dichos estados también se presentan en la gran mayoría de controles interactivos y su importancia es clave para tener una retroalimentación coherente por parte del sistema.

<textarea code-editor="mixed" code-result-size="300">
<h5>Native Buttons</h5>
<button class="is-basic">Button</button>
<button class="is-primary">Button</button>
<button class="is-secondary">Button</button>
<button class="is-outline">Button</button>
<button class="is-ghost">Button</button>
<br><br>
<h5>Link Buttons</h5>
<a href="#" class="button">Button</a>
<a href="#" class="button is-primary">Button</a>
<a href="#" class="button is-secondary">Button</a>
<a href="#" class="button is-outline">Button</a>
<a href="#" class="button is-ghost">Button</a>
</textarea>

### Dark Mode

<textarea code-editor="mixed" code-result-size="300">
<body theme="dark">
  <h5>Native Buttons</h5>
  <button class="is-basic">Button</button>
  <button class="is-primary">Button</button>
  <button class="is-secondary">Button</button>
  <button class="is-outline">Button</button>
  <button class="is-ghost">Button</button>
  <br><br>
  <h5>Link Buttons</h5>
  <a href="#" class="button">Button</a>
  <a href="#" class="button is-primary">Button</a>
  <a href="#" class="button is-secondary">Button</a>
  <a href="#" class="button is-outline">Button</a>
  <a href="#" class="button is-ghost">Button</a>
</body>
</textarea>

### Shapes

<textarea code-editor="mixed" code-result-size="100">
<a href="#" class="button is-square">Button</a>
<a href="#" class="button is-rounded">Button</a>
<a href="#" class="button is-rounded-left">Button</a>
<a href="#" class="button is-rounded-right">Button</a>
<a href="#" class="button is-pill">Button</a>
<a href="#" class="button is-pill-left">Button</a>
<a href="#" class="button is-pill-right">Button</a>
</textarea>

### Button with icons

<textarea code-editor="mixed" code-result-size="100">
<button class="is-pill">
  <svg class="icon"><use xlink:href="dist/swanix-icons.svg#plus"></use></svg>
</button>
<button class="is-rounded">
  <svg class="icon"><use xlink:href="dist/swanix-icons.svg#plus"></use></svg>
  Icon Button
</button>
<button>
  <svg class="icon"><use xlink:href="dist/swanix-icons.svg#home"></use></svg>
</button>
<button>
  <svg class="icon"><use xlink:href="dist/swanix-icons.svg#delete"></use></svg>
</button>
<button>
  <svg class="icon"><use xlink:href="dist/swanix-icons.svg#search"></use></svg>
</button>
<button>
  <svg class="icon"><use xlink:href="dist/swanix-icons.svg#menu"></use></svg>
</button>
<button>
  <svg class="icon"><use xlink:href="dist/swanix-icons.svg#settings"></use></svg>
</button>
<button data-tooltip="Contact" data-tooltip-pos="down">
  <svg class="icon"><use xlink:href="dist/swanix-icons.svg#email"></use></svg>
</button>
</textarea>

### Button with icons (Dark Mode)

<textarea code-editor="mixed" code-result-size="100">
<body theme="dark">
	<button class="is-pill">
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#plus"></use></svg>
	</button>
	<button class="is-rounded">
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#plus"></use></svg>
		Icon Button
	</button>
	<button>
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#home"></use></svg>
	</button>
	<button>
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#delete"></use></svg>
	</button>
	<button>
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#search"></use></svg>
	</button>
	<button>
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#menu"></use></svg>
	</button>
	<button>
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#settings"></use></svg>
	</button>
	<button data-tooltip="Contact" data-tooltip-pos="down">
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#email"></use></svg>
	</button>
</body>
</textarea>

### CSS Variables

Variables disponibles en este componente. Si quieres crear temas personalizados visita la sección [Themes](/themes)

#### General

```css
:root,
[theme='light'] {
/* General */
  --btn-font:                   inherit;
  --btn-font-weight:            600;
  --btn-border-radius:          0;
  /* Small */
  --btn-text-small:             12px;
  --btn-height-small:           24px;
  --btn-padding-small:          0 15px;
  /* Medium */
  --btn-text-medium:            14px;
  --btn-height-medium:          38px;
  --btn-padding-medium:         0 15px;
  /* Large */
  --btn-text-large:             16px;
  --btn-height-large:           48px;
  --btn-padding-large:          0 15px;
}
```

#### Button Types

```css
:root,
[theme='light'] {
  /* Btn Default */
  --btn-text:                   #383838;
  --btn-border:                 #CCCCCC solid 1px;
  --btn-bg:                     #FAFAFA;
  --btn-icon:                   inherit;
  --btn-text-hover:             #262626;
  --btn-border-hover:           #808080 solid 1px;
  --btn-bg-hover:               white;
  --btn-icon-hover:             inherit;
  /* Btn Primary */
  --btn-primary-text:           white;
  --btn-primary-border:         var(--brand1, #000000) solid 1px;
  --btn-primary-bg:             var(--brand1, #000000);
  --btn-primary-icon:           inherit;
  --btn-primary-text-hover:     white;
  --btn-primary-border-hover:   var(--brand1, #000000) solid 1px;
  --btn-primary-bg-hover:       var(--brand1, #000000);
  --btn-primary-icon-hover:     inherit;
  /* Btn Secondary */
  --btn-secondary-text:          white;
  --btn-secondary-border:        var(--brand2, #808080) solid 1px;
  --btn-secondary-bg:            var(--brand2, #808080);
  --btn-secondary-icon:          inherit;
  --btn-secondary-text-hover:    white;
  --btn-secondary-border-hover:  var(--brand2, #808080) solid 1px;
  --btn-secondary-bg-hover:      var(--brand2, #808080);
  --btn-secondary-icon-hover:    inherit;
  /* Btn Outline */
  --btn-outline-text:            var(--brand1, #000000);
  --btn-outline-border:          var(--brand1, #000000) solid 1px;
  --btn-outline-bg:              transparent;
  --btn-outline-icon:            inherit;
  --btn-outline-text-hover:      white;
  --btn-outline-border-hover:    var(--brand1, #000000) solid 1px;
  --btn-outline-bg-hover:        var(--brand1, #000000);
  --btn-outline-icon-hover:      inherit;
  /* Btn Ghost */
  --btn-ghost-text:              #383838;
  --btn-ghost-border:            transparent solid 0;
  --btn-ghost-bg:                transparent;
  --btn-ghost-icon:              inherit;
  --btn-ghost-text-hover:        #262626;
  --btn-ghost-border-hover:      transparent solid 0;
  --btn-ghost-bg-hover:          transparent;
  --btn-ghost-icon-hover:        inherit;
}
```
