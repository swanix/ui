# Icons

Aunque en esencia también se trata de imágenes, los iconos tienen unas características propias como elementos de comunicación. Son gráficos útiles para utilizar en pestañas, menús de navegación y botones. Cada sistema operativo posee sus tamaños oficiales para representar iconos en pantalla, lo que permite definirlos de forma coherente en proporción a otros iconos de aplicaciones. 

<textarea code-editor="mixed" code-result-size="460">
<h5>Small</h5>
<svg class="icon is-small"><use xlink:href="dist/swanix-icons.svg#home"></use></svg>
<svg class="icon is-small"><use xlink:href="dist/swanix-icons.svg#search"></use></svg>
<svg class="icon is-small"><use xlink:href="dist/swanix-icons.svg#menu"></use></svg>
<svg class="icon is-small"><use xlink:href="dist/swanix-icons.svg#settings"></use></svg>
<svg class="icon is-small"><use xlink:href="dist/swanix-icons.svg#email"></use></svg>
<hr />
<h5>Medium</h5>
<svg class="icon is-medium"><use xlink:href="dist/swanix-icons.svg#home"></use></svg>
<svg class="icon is-medium"><use xlink:href="dist/swanix-icons.svg#search"></use></svg>
<svg class="icon is-medium"><use xlink:href="dist/swanix-icons.svg#menu"></use></svg>
<svg class="icon is-medium"><use xlink:href="dist/swanix-icons.svg#settings"></use></svg>
<svg class="icon is-medium"><use xlink:href="dist/swanix-icons.svg#email"></use></svg>
<hr />
<h5>Large</h5>
<svg class="icon is-large"><use xlink:href="dist/swanix-icons.svg#home"></use></svg>
<svg class="icon is-large"><use xlink:href="dist/swanix-icons.svg#search"></use></svg>
<svg class="icon is-large"><use xlink:href="dist/swanix-icons.svg#menu"></use></svg>
<svg class="icon is-large"><use xlink:href="dist/swanix-icons.svg#settings"></use></svg>
<svg class="icon is-large"><use xlink:href="dist/swanix-icons.svg#email"></use></svg>
<hr />
<h5>Huge</h5>
<svg class="icon is-huge"><use xlink:href="dist/swanix-icons.svg#home"></use></svg>
<svg class="icon is-huge"><use xlink:href="dist/swanix-icons.svg#search"></use></svg>
<svg class="icon is-huge"><use xlink:href="dist/swanix-icons.svg#menu"></use></svg>
<svg class="icon is-huge"><use xlink:href="dist/swanix-icons.svg#settings"></use></svg>
<svg class="icon is-huge"><use xlink:href="dist/swanix-icons.svg#email"></use></svg>
</textarea>

### Dark Mode

<textarea code-editor="mixed" code-result-size="460">
<body theme="dark">
  <h5>Small</h5>
  <svg class="icon is-small"><use xlink:href="dist/swanix-icons.svg#home"></use></svg>
  <svg class="icon is-small"><use xlink:href="dist/swanix-icons.svg#search"></use></svg>
  <svg class="icon is-small"><use xlink:href="dist/swanix-icons.svg#menu"></use></svg>
  <svg class="icon is-small"><use xlink:href="dist/swanix-icons.svg#settings"></use></svg>
  <svg class="icon is-small"><use xlink:href="dist/swanix-icons.svg#email"></use></svg>
  <hr />
  <h5>Medium</h5>
  <svg class="icon is-medium"><use xlink:href="dist/swanix-icons.svg#home"></use></svg>
  <svg class="icon is-medium"><use xlink:href="dist/swanix-icons.svg#search"></use></svg>
  <svg class="icon is-medium"><use xlink:href="dist/swanix-icons.svg#menu"></use></svg>
  <svg class="icon is-medium"><use xlink:href="dist/swanix-icons.svg#settings"></use></svg>
  <svg class="icon is-medium"><use xlink:href="dist/swanix-icons.svg#email"></use></svg>
  <hr />
  <h5>Large</h5>
  <svg class="icon is-large"><use xlink:href="dist/swanix-icons.svg#home"></use></svg>
  <svg class="icon is-large"><use xlink:href="dist/swanix-icons.svg#search"></use></svg>
  <svg class="icon is-large"><use xlink:href="dist/swanix-icons.svg#menu"></use></svg>
  <svg class="icon is-large"><use xlink:href="dist/swanix-icons.svg#settings"></use></svg>
  <svg class="icon is-large"><use xlink:href="dist/swanix-icons.svg#email"></use></svg>
  <hr />
  <h5>Huge</h5>
  <svg class="icon is-huge"><use xlink:href="dist/swanix-icons.svg#home"></use></svg>
  <svg class="icon is-huge"><use xlink:href="dist/swanix-icons.svg#search"></use></svg>
  <svg class="icon is-huge"><use xlink:href="dist/swanix-icons.svg#menu"></use></svg>
  <svg class="icon is-huge"><use xlink:href="dist/swanix-icons.svg#settings"></use></svg>
  <svg class="icon is-huge"><use xlink:href="dist/swanix-icons.svg#email"></use></svg>
</body>
</textarea>

### CSS Variables

Variables disponibles en este componente. Si quieres crear temas personalizados visita la sección [Themes](/themes)

```css
:root,
[theme='light'] {
  --icon-fill-color:            #808080;
  --icon-stroke-color:          #808080;
  --icon-stroke-width:          0;
  --icon-fill-color-hover:      #808080;
  --icon-stroke-color-hover:    #808080;
  --icon-stroke-width-hover:    0;
  --icon-size-small:            1.6rem;
  --icon-size-medium:           2.4rem;
  --icon-size-large:            3.2rem;
  --icon-size-huge:             6.4rem;
}
```