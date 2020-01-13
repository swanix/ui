# Text Input

Los campos de texto sirven para insertar información necesaria en un formulario, por lo general se utilizan dos tipos de campos de texto. Campo de texto de una línea y campo de texto a múltiples líneas. La diferencia entre los dos solo radica en la cantidad de texto que puede incluirse en determinadas circunstancias. Sea cual sea el objetivo, este tipo de elemento es útil para introducir texto o información que sólo el usuario sabe, datos desconocidos para el sistema y que se necesitan como parámetro para arrojar un resultado específico. 

Los campos de inserción de texto se utilizan muy a menudo como cajones de búsqueda generales, para ingresar la URL de un sitio web en un navegador sea móvil o de escritorio o para registrarse en algún servicio. Como se describió, su uso mayoritario se da en los formularios (en específico de registro y de contacto). 

Este control es el elemento de interacción principal en aplicaciones de chat como WhatsApp y Line donde el usuario envía mensajes a través de campos de inserción de texto, en estos mensajes también se pueden incluir otros gráficos acompañando al texto como emoticonos y símbolos específicos de uso común en las aplicaciones mencionadas.

<iframe class="code-preview" height="340px"></iframe>
<textarea class="code-editor" name="code">
<!-- Basic Text -->
<label for="text-input">Basic Text:</label>
<input type="text" id="text-input" placeholder="Text field">
<!-- Password Text -->
<label for="pass">Password:</label>
<input type="password" id="pass" name="password" placeholder="••••••••••••">
<!-- Textarea -->
<label for="text_area">Textarea:</label>
<textarea id="text_area"></textarea>
</textarea>


### Dark Mode

<iframe class="code-preview" height="340px"></iframe>
<textarea class="code-editor" name="code">
<body class="theme-dark">
<!-- Basic Text -->
<label for="text-input">Basic Text:</label>
<input type="text" id="text-input" placeholder="Text field">
<!-- Password Text -->
<label for="pass">Password:</label>
<input type="password" id="pass" name="password" placeholder="••••••••••••">
<!-- Textarea -->
<label for="text_area">Textarea:</label>
<textarea id="text_area"></textarea>
</body>
</textarea>