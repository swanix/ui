# Grid System

Swanix utiliza el estándar [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout) para definir los layouts de interfaz que pueden estar organizados y estructurados por medio de un contenedor principal y otros secundarios que representan paneles donde se ubican componentes y contenido.

### 1 column / 1 row

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<section class="app layout" mode="dev">
  <main>Content Area</main>
</section>
</textarea>

### 1 column / 2 rows

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<section class="app layout two-rows" mode="dev">
  <header>Header</header>
  <main>Content Area</main>
</section>
</textarea>

### 1 column / 2 rows (Header)

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<section class="app layout two-rows header" mode="dev">
  <header>Header</header>
  <main>Content Area</main>
</section>
</textarea>

### 1 column / 2 rows (Footer)

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<section class="app layout two-rows footer" mode="dev">
  <main>Content Area</main>
  <footer>Footer</footer>
</section>
</textarea>

### 1 column / 3 rows (Header, Content, Footer)

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<section class="app layout three-rows" mode="dev">
  <header>Header</header>
  <main>Content Area</main>
  <footer>Footer</footer>
</section>
</textarea>

### 2 columns

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<section class="app layout two-cols" mode="dev">
  <aside>Sidebar</aside>
  <main>Content Area</main>
</section>
</textarea>

### 2 columns - Sidebar Left

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<section class="app layout two-cols sidebar-left" mode="dev">
  <aside>Sidebar</aside>
  <main>Content Area</main>
</section>
</textarea>

### 2 columns - Sidebar Right

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<section class="app layout two-cols sidebar-right" mode="dev">
  <main>Content Area</main>
  <aside>Sidebar</aside>
</section>
</textarea>

### 3 columns

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<section class="app layout three-cols" mode="dev">
  <aside>Sidebar Left</aside>
  <main>Content Area</main>
  <aside>Sidebar Right</aside>
</section>
</textarea>

### 3 columns - Sidebar Left - Right

<iframe class="code-preview" height="400px"></iframe>
<textarea class="code-editor" name="code">
<section class="app layout three-cols sidebars" mode="dev">
  <aside>Sidebar Left</aside>
  <main>Content Area</main>
  <aside>Sidebar Right</aside>
</section>
</textarea>