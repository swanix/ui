# Button

Un botón es un elemento gráfico rectangular, cuadrado, ovalado o de formas varias que al ser pulsado realiza determinada acción del sistema. Esta representación gráfica obedece a la metáfora de los botones del mundo físico utilizados en todo tipo de equipos electrónicos. 

Los botones son elementos fundamentales para las interacciones con una aplicación. Dada la libertad para personalizar estos elementos se pueden crear diseños propios acordes con la estética de la aplicación. Sea cual sea la naturaleza o apariencia de un botón siempre existirán como constante los estados del mismo para comunicar al usuario su actividad, por lo general son: reposo, presionado, seleccionado e inactivo. Dichos estados también se presentan en la gran mayoría de controles interactivos y su importancia es clave para tener una retroalimentación coherente por parte del sistema.

### Button tag

<iframe class="code-preview" height="100px"></iframe>
<textarea class="code-editor" name="code">
<button class="is-basic">Button</button>
<button class="is-primary">Button</button>
<button class="is-secondary">Button</button>
<button class="is-outline">Button</button>
<button class="is-ghost">Button</button>
</textarea>

### Button input

<iframe class="code-preview" height="100px"></iframe>
<textarea class="code-editor" name="code">
<input type="reset" value="Reset">
<input type="submit" value="Submit">
</textarea>

### Button link

<iframe class="code-preview" height="100px"></iframe>
<textarea class="code-editor" name="code">
<a href="#" class="button">Button</a>
<a href="#" class="button is-primary">Button</a>
<a href="#" class="button is-secondary">Button</a>
<a href="#" class="button is-outline">Button</a>
<a href="#" class="button is-ghost">Button</a>
</textarea>

### Shapes

<iframe class="code-preview" height="100px"></iframe>
<textarea class="code-editor" name="code">
<a href="#" class="button is-square">Button</a>
<a href="#" class="button is-rounded">Button</a>
<a href="#" class="button is-rounded-left">Button</a>
<a href="#" class="button is-rounded-right">Button</a>
<a href="#" class="button is-pill">Button</a>
<a href="#" class="button is-pill-left">Button</a>
<a href="#" class="button is-pill-right">Button</a>
</textarea>

### Button with icons

<iframe class="code-preview" height="130px"></iframe>
<textarea class="code-editor" name="code">
<div>
	<button class="is-pill" data-tooltip="Add" data-tooltip-pos="down">
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#plus"></use></svg>
	</button>
	<button class="is-rounded" data-tooltip="Edit" data-tooltip-pos="down">
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#edit"></use></svg>
		Icon Button Rounded
	</button>
	<button data-tooltip="Home" data-tooltip-pos="down">
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#home"></use></svg>
	</button>
	<button data-tooltip="Delete" data-tooltip-pos="down">
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#delete"></use></svg>
	</button>
	<button data-tooltip="Search" data-tooltip-pos="down">
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#search"></use></svg>
	</button>
	<button data-tooltip="Menu" data-tooltip-pos="down">
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#menu"></use></svg>
	</button>
	<button data-tooltip="Settings" data-tooltip-pos="down">
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#settings"></use></svg>
	</button>
	<button data-tooltip="Contact" data-tooltip-pos="down">
		<svg class="icon"><use xlink:href="dist/swanix-icons.svg#email"></use></svg>
	</button>
</div>
</textarea>
