# Text

Los textos informan y le otorgan sentido a la interfaz. La arquitectura de información se hace visible a través del texto y su contenido particular, por ejemplo si hacemos el ejercicio de remover el contenido de texto presente en una interfaz quedaría ininteligible, por esto su importancia en el diseño de aplicaciones y cualquier producto digital es fundamental. 

Es común utilizar bloques de texto escrito en encabezados de contenido específicos o títulos de pantallas. Este uso destacado es útil para definir una jerarquía del contenido general con respecto a bloques de párrafos que representan mensajes extensos como artículos de noticias, pero también descripciones cortas como las que se emplean en las notificaciones del sistema y en los tooltips emergentes.

### Headings

<textarea code-editor="mixed" code-result-size="420">
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<hr/>
</textarea>

### Paragraphs

<textarea code-editor="mixed" code-result-size="380">
<p>
	Lorem ipsum dolor sit amet, <a title="test link" href="#">test link</a>
	adipiscing elit. Nullam dignissim convallis est. Quisque aliquam donec.
	Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
	imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis,
	massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim
	diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien
	fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at,
	commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.
</p>
<p>
	Consectetuer adipiscing elit dolor sit amet, <em>emphasis</em> quis luctus.
	Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis
	suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec,
	gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi
	volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec
	sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem,
	consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.
</p>
</textarea>

### Ordered List

<textarea code-editor="mixed" code-result-size="130">
<ol>
  <li>List Item</li>
  <li>List Item</li>
  <li>List Item</li>
</ol>
</textarea>

### Unordered List

<textarea code-editor="mixed" code-result-size="130">
<ul>
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ul>
</textarea>

### Definition List 

<textarea code-editor="mixed" code-result-size="120">
<dl>
  <dt>Definition List Title</dt>
  <dd>This is a definition list division.</dd>
</dl>
</textarea>

### Text Quote 

<textarea code-editor="mixed" code-result-size="70">
<q>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. - Quote</q>
</textarea>

### Text Blockquote 

<textarea code-editor="mixed" code-result-size="370">
<blockquote>
  <q>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Nullam dignissim convallis est. Quisque aliquam. Donec faucibus.
    Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
    imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis,
    massa quis luctus fermentum, turpis mi volutpat justo,
    eu volutpat enim diam eget metus.
  </q>
  <footer> Author's Name </footer>
</blockquote>
</textarea>

### Text Pre - Code

<textarea code-editor="mixed" code-result-size="280">
<pre>
Lorem ipsum dolor sit amet, consectetuer adipiscing
elit. Nullam dignissim convallis est. Quisque aliquam.
Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet
sem. Aliquam libero nisi, imperdiet at, tincidunt nec,
gravida vehicula, nisl.
Praesent mattis, massa quis luctus fermentum, turpis mi
volutpat justo, eu volutpat enim diam eget metus.
Maecenas ornare tortor.
</pre>
</textarea>

### Misc (abbr, sub, sup, etc)

<textarea code-editor="mixed" code-result-size="220">
<p>
	Lorem <sup>superscript</sup> dolor <sub>subscript</sub> amet, consectetuer
	adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Nunc iaculis
	suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec,
	gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi
	volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec
	tellus eget sapien fringilla nonummy. <abbr title="Content Management System">CMS</abbr>
	Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc.
	Morbi imperdiet augue quis tellus.
</p>
</textarea>


### CSS Variables

Variables disponibles en este componente. Si quieres crear temas personalizados visita la sección [Themes](/themes)

```css
:root,
[theme='light'] {
  --text-body-color:       #383838;
  --text-body-font:        Tahoma, Geneva, sans-serif;
  --text-heading-color:    inherit;
  --text-heading-font:     inherit;
  --text-heading-weight:   normal;
  --text-link:             var(--brand1, #000000);
  --text-link-hover:       var(--brand1, #000000);
  --text-link-visited:     var(--brand1, #000000);
  --text-selection:        #1A1A1A;
  --text-selection-bg:     #EDEDED;
  --hr-color:              #EDEDED;
}
```