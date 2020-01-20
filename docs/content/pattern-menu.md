# Menu

Los menús son patrones utilizados en todo tipo de interfaces para navegar entre secciones de una aplicación o sitio web. Adicionalmente se pueden utilizar para ejecutar acciones del sistema. Posee dos direciones comunes: vertical y horizontal.

### Vertical

<iframe class="code-preview" height="250px"></iframe>
<textarea class="code-editor" name="code">
<ul class="menu">
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li class="active"><a href="#">Item 3</a></li>
  <li><a href="#">Item 4</a></li>
  <li><a href="#">Item 5</a></li>
</ul>
</textarea>

### Horizontal

<iframe class="code-preview" height="100px"></iframe>
<textarea class="code-editor" name="code">
<ul class="menu is-horizontal">
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li class="active"><a href="#">Item 3</a></li>
  <li><a href="#">Item 4</a></li>
  <li><a href="#">Item 5</a></li>
</ul>
</textarea>

### Dark Mode

Puedes utilizar el atributo `theme="dark"` para aplicar los colores del modo oscuro en este componente.

<iframe class="code-preview" height="520px"></iframe>
<textarea class="code-editor" name="code">
<ul class="menu" theme="dark">
  <li class="menu-section">SECTION 1</li>
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li class="active"><a href="#">Item 3</a></li>
  <li><a href="#">Item 4</a></li>
  <li><a href="#">Item 5</a></li>
  <li class="menu-section">SECTION 2</li>
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
  <li><a href="#">Item 4</a></li>
</ul>
</textarea>

### CSS Variables

Variables disponibles en este componente. Si quieres crear temas personalizados visita la sección [Themes](/themes)

```css
:root,
[theme='light'] {
  --menu-bg:                  transparent;
  --menu-item-text:           inherit;
  --menu-item-bg:             transparent;
  --menu-item-text-hover:     #1A1A1A;
  --menu-item-bg-hover:       #F7F7F7;
  --menu-item-text-active:    inherit;
  --menu-item-bg-active:      #EDEDED;
  --menu-item-border-active:  var(--brand1, #000000) 3px solid;
}
```