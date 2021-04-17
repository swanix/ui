# Table

### Basic table 

<textarea code-editor="mixed" code-result-size="240">
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

<textarea code-editor="mixed" code-result-size="240">
<table theme="dark">
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

Variables disponibles en este componente. Si quieres crear temas personalizados visita la sección [Themes](/themes)

```css
:root,
[theme='light'] {
  --table-text:         inherit;
  --table-bg:           transparent;
  --table-th-bg:        transparent;
  --table-th-border:    #EDEDED 1px solid;
  --table-td-bg:        transparent;
  --table-td-border:    #EDEDED 1px solid;
  --table-tr-bg-hover:  #FAFAFA;
}
```


