# Temas personalizados

Puedes crear nuevos temas o sobreescribir los estilos actuales definiendo el atributo HTML `theme`. Swanix incluye dos temas oficiales `theme="dark"` y `theme="light"` este último es el tema por defecto, si no se especifica ninguno en el `body` HTML o en un elemento específico se utilizará el tema `light`.

#### Crear un nuevo tema

En un archivo CSS define tu nuevo tema, le asignas un nombre y personalizas las variables que deseas modificar.

```css
[theme="new-theme"] {
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

Aplicas el nuevo tema con el atributo HTML `theme` este puede incluirse de dos maneras:

1. En el body de tu HTML. De esta forma se aplicará globalmente a toda la interfaz y componentes.

```html
<body theme="new-theme">
<!-- Page content here -->
</body>
```

2. En un elemento HTML. De esta forma se aplicará localmente a dicho elemento y sus hijos.

```html
<ul class="menu" theme="new-theme">
  <li class="menu-section">SECTION 1</li>
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li class="active"><a href="#">Item 3</a></li>
  <li><a href="#">Item 4</a></li>
  <li><a href="#">Item 5</a></li>
</ul>
```