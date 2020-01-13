# Button

Un botón es un elemento gráfico rectangular, cuadrado, ovalado o de formas varias que al ser pulsado realiza determinada acción del sistema. Esta representación gráfica obedece a la metáfora de los botones del mundo físico utilizados en todo tipo de equipos electrónicos. 

Los botones son elementos fundamentales para las interacciones con una aplicación. Dada la libertad para personalizar estos elementos se pueden crear diseños propios acordes con la estética de la aplicación. Sea cual sea la naturaleza o apariencia de un botón siempre existirán como constante los estados del mismo para comunicar al usuario su actividad, por lo general son: reposo, presionado, seleccionado e inactivo. Dichos estados también se presentan en la gran mayoría de controles interactivos y su importancia es clave para tener una retroalimentación coherente por parte del sistema.

<iframe class="code-preview" height="280px"></iframe>
<textarea class="code-editor" name="code">
<h3>Native Buttons</h3>
<button class="is-basic">Button</button>
<button class="is-primary">Button</button>
<button class="is-secondary">Button</button>
<button class="is-outline">Button</button>
<button class="is-ghost">Button</button>
<br><br>
<h3>Link Buttons</h3>
<a href="#" class="button">Button</a>
<a href="#" class="button is-primary">Button</a>
<a href="#" class="button is-secondary">Button</a>
<a href="#" class="button is-outline">Button</a>
<a href="#" class="button is-ghost">Button</a>
</textarea>

### Dark Mode

<iframe class="code-preview" height="280px"></iframe>
<textarea class="code-editor" name="code">
<body class="theme-dark">
<h3>Native Buttons</h3>
<button class="is-basic">Button</button>
<button class="is-primary">Button</button>
<button class="is-secondary">Button</button>
<button class="is-outline">Button</button>
<button class="is-ghost">Button</button>
<br><br>
<h3>Link Buttons</h3>
<a href="#" class="button">Button</a>
<a href="#" class="button is-primary">Button</a>
<a href="#" class="button is-secondary">Button</a>
<a href="#" class="button is-outline">Button</a>
<a href="#" class="button is-ghost">Button</a>
</body>
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

<iframe class="code-preview" height="90px"></iframe>
<textarea class="code-editor" name="code">
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

<iframe class="code-preview" height="90px"></iframe>
<textarea class="code-editor" name="code">
<body class="theme-dark">
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
