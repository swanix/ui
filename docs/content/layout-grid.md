# Grid System

Swanix utiliza el estándar [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_grid/Basic_Concepts_of_Grid_grid) para definir los layouts de interfaz que pueden estar organizados y estructurados por medio de un contenedor principal y otros secundarios que representan paneles donde se ubican componentes y contenido.

### 1 column / 1 row

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<div class="grid" mode="dev">
  <div>Content</div>
</div>
</textarea>

### 1 column / 2 rows

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<div class="grid two-rows" mode="dev">
  <div>Header</div>
  <div>Content</div>
</div>
</textarea>

### 1 column / 2 rows (Header)

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<div class="grid two-rows header" mode="dev">
  <div>header</div>
  <div>Content</div>
</div>
</textarea>

### 1 column / 2 rows (Footer)

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<div class="grid two-rows footer" mode="dev">
  <div>Content</div>
  <div>Footer</div>
</div>
</textarea>

### 1 column / 3 rows

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<div class="grid three-rows" mode="dev">
  <div>Content</div>
  <div>Content</div>
  <div>Content</div>
</div>
</textarea>

### 1 column / 3 rows (Header)

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<div class="grid three-rows header" mode="dev">
  <div>Header</div>
  <div>Content</div>
  <div>Content</div>
</div>
</textarea>

### 1 column / 3 rows (Footer)

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<div class="grid three-rows footer" mode="dev">
  <div>Content</div>
  <div>Content</div>
  <div>Footer</div>
</div>
</textarea>

### 1 column / 3 rows (Header + Footer)

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<div class="grid three-rows header-footer" mode="dev">
  <div>Header</div>
  <div>Content</div>
  <div>Footer</div>
</div>
</textarea>

### 2 columns

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<div class="grid two-cols" mode="dev">
  <div>Content</div>
  <div>Content</div>
</div>
</textarea>

### 2 columns - Sidebar Left

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<div class="grid two-cols sidebar-left" mode="dev">
  <div>Sidebar</div>
  <div>Content</div>
</div>
</textarea>

### 2 columns - Sidebar Right

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<div class="grid two-cols sidebar-right" mode="dev">
  <div>Content</div>
  <div>Sidebar</div>
</div>
</textarea>

### 3 columns

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<div class="grid three-cols" mode="dev">
  <div>Sidebar Left</div>
  <div>Content</div>
  <div>Sidebar Right</div>
</div>
</textarea>

### 3 columns - Sidebar Left - Right

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<div class="grid three-cols sidebars" mode="dev">
  <div>Sidebar Left</div>
  <div>Content</div>
  <div>Sidebar Right</div>
</div>
</textarea>