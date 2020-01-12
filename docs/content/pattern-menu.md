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

Puedes utilizar la clase `theme-dark` para aplicar los colores del modo oscuro en este componente.

<iframe class="code-preview" height="520px"></iframe>
<textarea class="code-editor" name="code">
<ul class="menu theme-dark">
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

Variables disponibles para personalizar el componente menú:

|Name|Default value|Description|
|--- |--- |--- |
|--menu-bg|transparent|Menu background|
||||
|--menu-item-text|$gray7|Menu item text color|
|--menu-item-bg|transparent|Menu item background|
||||
|--menu-item-text-hover|$gray9|Menu item hover text color|
|--menu-item-bg-hover|$gray2|Menu item background hover|
||||
|--menu-item-text-active|$gray9|Menu item text active color|
|--menu-item-bg-active|$gray3|Menu item background active|
|--menu-item-border-active|3px solid $black|Menu item border active|

### Temas personalizados

Puedes crear nuevos temas o sobreescribir los estilos actuales definiendo la clase `menu` con las variables que deseas modificar. A continuación puedes ver las variables sobreescritas con el tema oscuro:

```css
.menu.theme-dark {
  --menu-bg: black;
  /* Default */
  --menu-item-text:#B3B3B3;
  --menu-item-bg: transparent;
  /* Hover */
  --menu-item-text-hover: #FFFFFF;
  --menu-item-bg-hover: #262626;
  /* Active */
  --menu-item-text-active: #FFFFFF;
  --menu-item-bg-active: #383838;
  --menu-item-border-active: 3px solid #FFFFFF;
}
```