# Table

### Basic table 

<iframe class="code-preview" height="240px"></iframe>
<textarea class="code-editor" name="code">
<table>
  <tbody>
    <tr>
      <th>Table Head 1</th>
      <th>Table Head 2</th>
      <th>Table Head 3</th>
    </tr>
    <tr>
      <td>Division 1</td>
      <td>Division 2</td>
      <td>Division 3</td>
    </tr>
    <tr>
      <td>Division 1</td>
      <td>Division 2</td>
      <td>Division 3</td>
    </tr>
    <tr>
      <td>Division 1</td>
      <td>Division 2</td>
      <td>Division 3</td>
    </tr>
  </tbody>
</table>
</textarea>

### Dark Mode 

Utiliza la clase `theme-dark` para aplicar los colores del modo oscuro en este componente.

<iframe class="code-preview" height="240px"></iframe>
<textarea class="code-editor" name="code">
<table class="theme-dark">
  <tbody>
    <tr>
      <th>Table Head 1</th>
      <th>Table Head 2</th>
      <th>Table Head 3</th>
    </tr>
    <tr>
      <td>Division 1</td>
      <td>Division 2</td>
      <td>Division 3</td>
    </tr>
    <tr>
      <td>Division 1</td>
      <td>Division 2</td>
      <td>Division 3</td>
    </tr>
    <tr>
      <td>Division 1</td>
      <td>Division 2</td>
      <td>Division 3</td>
    </tr>
  </tbody>
</table>
</textarea>

### CSS Variables

Variables disponibles para personalizar el componente de tabla:

|Name|Default value|Description|
|--- |--- |--- |
|--table-text|inherit|Table text color|
|--table-bg|transparent|Table background|
||||
|--table-th-bg|transparent|Table head background|
|--table-th-border|1px solid $gray3|Table head border bottom|
||||
|--table-td-bg|transparent|Table cell background|
|--table-td-border|1px solid $gray3|Table cell border bottom|
||||
|--table-tr-bg-hover|$gray1|Table row background hover|

### Personalizar estilos

Puedes crear nuevos temas o sobreescribir los estilos actuales definiendo el selector `table` con las variables que deseas modificar. A continuación puedes ver las variables sobreescritas con el tema oscuro:

```css
table.theme-dark {
  --table-text: #EDEDED;
  --table-bg: #1A1A1A;
  --table-th-bg: transparent;
  --table-th-border: 1px solid #262626;
  --table-td-bg: transparent;
  --table-td-border: 1px solid #262626;
  --table-tr-bg-hover: #262626;
}
```


