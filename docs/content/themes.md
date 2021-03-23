<figure class="hero" style="--hero-image:url(https://source.unsplash.com/g-YsyUUwT9M/1800x600);"></figure>

# Temas personalizados

Puedes crear nuevos temas o sobreescribir los estilos actuales definiendo el atributo HTML `theme`. Swanix incluye dos temas oficiales `theme="dark"` y `theme="light"` este último es el tema por defecto, si no se especifica ninguno en el `body` HTML o en un elemento específico se utilizará el tema `light`.

#### Crear un nuevo tema

En un archivo CSS define tu nuevo tema, le asignas un nombre y personalizas las variables que deseas modificar.

```css
[theme="new-theme"] {
  --menu-bg: black;
  --menu-item-text:#B3B3B3;
  --menu-item-bg: transparent;
  --menu-item-text-hover: #FFFFFF;
  --menu-item-bg-hover: #262626;
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

#### Theme template

En este bloque encuentras una plantilla base que puedes utilizar para crear tu propio tema personalizado. Las variables incluidas son las del tema `light`

```css
[theme="new-theme"] {
/* -----------------------------------------------------------------------
   LAYOUT
------------------------------------------------------------------------ */
  --grid-bg-primary: #FFF;
  --grid-bg-secondary: #EDEDED;
/* -----------------------------------------------------------------------
   MEDIA - TEXT
------------------------------------------------------------------------ */
  --text-body-color:            #383838;
  --text-body-font:             Tahoma, Geneva, sans-serif;
  --text-heading-color:         inherit;
  --text-heading-font:          inherit;
  --text-heading-weight:        normal;
  --text-link:                  var(--brand1, #000000);
  --text-link-hover:            var(--brand1, #000000);
  --text-link-visited:          var(--brand1, #000000);
  --text-selection:             #1A1A1A;
  --text-selection-bg:          #EDEDED;
  --hr-color:                   #EDEDED;
/* -----------------------------------------------------------------------
   MEDIA - ICONS
------------------------------------------------------------------------ */
  --icon-fill-color:            #808080;
  --icon-stroke-color:          #808080;
  --icon-stroke-width:          0;
  --icon-fill-color-hover:      #808080;
  --icon-stroke-color-hover:    #808080;
  --icon-stroke-width-hover:    0;
/* -----------------------------------------------------------------------
   CONTROL - BUTTON
------------------------------------------------------------------------ */
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
/* -----------------------------------------------------------------------
   CONTROL - RADIO BUTTON
------------------------------------------------------------------------ */
  --input-radio:                 #808080;
  --input-radio-border:          #CCCCCC solid 2px;
  --input-radio-border-radius:   50%;
  --input-radio-bg:              #F7F7F7;
  --input-radio-active:          var(--brand1, #000000);
  --input-radio-active-border:   var(--brand1, #000000) solid 2px;
  --input-radio-active-bg:       #FFFFFF;
/* -----------------------------------------------------------------------
   CONTROL - CHECKBOX
------------------------------------------------------------------------ */
  --input-check:                 #808080;
  --input-check-border:          #CCCCCC solid 2px;
  --input-check-border-radius:   0;
  --input-check-bg:              #F7F7F7;
  --input-check-active:          var(--brand1, #000000);
  --input-check-active-border:   var(--brand1, #000000) solid 2px;
  --input-check-active-bg:       #FFFFFF;
/* -----------------------------------------------------------------------
   CONTROL - DROPDOWN
------------------------------------------------------------------------ */
  --dropdown-text-color:         inherit;
  --dropdown-bg:                 #FFFFFF;
  --dropdown-arrow:              #B3B3B3;
  --dropdown-border:             #CCCCCC 1px solid;
  --dropdown-border-focus:       var(--brand1, #000000) 1px solid;
  --dropdown-border-error:       red 1px solid;
/* -----------------------------------------------------------------------
   CONTROL - INPUT TEXT
------------------------------------------------------------------------ */
  --input-text-color:            inherit;
  --input-text-bg:               #FFFFFF;
  --input-text-border:           #CCCCCC 1px solid;
  --input-text-bg-focus:         #FFFFFF;
  --input-text-border-focus:     var(--brand1, #000000) 1px solid;
  --input-text-border-error:     red 1px solid;
/* -----------------------------------------------------------------------
   PATTERN - MENU
------------------------------------------------------------------------ */
  --menu-bg:                     transparent;
  --menu-item-text:              inherit;
  --menu-item-bg:                transparent;
  --menu-item-text-hover:        #1A1A1A;
  --menu-item-bg-hover:          #F7F7F7;
  --menu-item-text-active:       inherit;
  --menu-item-bg-active:         #EDEDED;
  --menu-item-border-active:     var(--brand1, #000000) 3px solid;
/* -----------------------------------------------------------------------
   PATTERN - TABLE
------------------------------------------------------------------------ */
  --table-text:                  inherit;
  --table-bg:                    transparent;
  --table-th-bg:                 transparent;
  --table-th-border:             #EDEDED 1px solid;
  --table-td-bg:                 transparent;
  --table-td-border:             #EDEDED 1px solid;
  --table-tr-bg-hover:           #FAFAFA;
}
```