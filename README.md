![Swanix UI](https://swanix.org/assets/images/apple-touch-icon.png "Swanix - User Interface")

Experimental UI framework. Work in progress...

## Requisitos

Antes de iniciar debes tener previamente instalados:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)

## Instalación

En una carpeta vacía de tu equipo escribe el siguiente comando en la terminal:

```
git clone https://github.com/swanix/ui.git
```

Cuando se termine de clonar el proyecto escribe el comando:

```
npm install
```
Este comando instalará las dependencias de Node.js especificadas en el archivo `package.json` (en esencia se trata de [Gulp.js](http://gulpjs.com/) y una serie de plugins necesarios para automatizar algunas tareas de desarrollo).

Las dependencias se instalan en la carpeta `node_modules` (creada automáticamente con el comando `npm install`) y luego de instaladas podemos utilizar Gulp para ver nuestra página de inicio con:

```
npm run serve
```
Este comando ejecuta un servidor estático que apunta a la carpeta `docs` este abrirá el navegador de forma automática mostrando el sitio de prueba con ejemplos del framework y observando si se realizan cambios en los archivos de la carpeta `src` para generar el código de estilos CSS y HTML.

## Estructura de Directorios

```sh
ui/  # Carpeta raíz del repositorio
│
├── dist/               # Código generado para producción         
│   ├── ns/  
│   ├── swanix.min.css    
│   └── swanix.css
│
├── docs/               # Documentación y demos     
│   ├── assets/
│   ├── content/
│   ├── dist/          # Réplica de código para producción
│   └── index.html
│       
├── src/               # Código fuente para desarrollo      
│   ├── _body.scss 
│   ├── _control-button.scss   
│   ├── _control-checkbox.scss  
│   ├── ... 
│   └── swanix.scss
│ 
│       
├── LICENSE         # Licencia
├── README.md       # Archivo LEAME inicial
├── gulpfile.js     # Tareas de Gulp
└── package.json    # Dependencias de Node.js
│
└---------------------------------------------------------
```

Cuando ejecutamos el comando `npm run serve` cualquier cambio realizado en los archivos de la carpeta `src` se compilarán en la carpeta `dist` utilizando el plugin `gulp-sass`.


## Módulos de Node.js

Para el desarrollo se utilizan los siguientes módulos de Node.js (la mayoría son plugins de Gulp).

|Módulo|Versión|Descripción|
|--- |--- |--- |
|autoprefixer|9.7.3|Permite agregar prefijos de compatibilidad entre navegadores.|
|browser-sync|2.26.7|Permite ejecutar un servidor local y visualizar nuestro sitio en múltiples navegadores remotos en tiempo real.|
|gulp|4.0.2|Módulo oficial de Gulp para Node.js|
|gulp-sass|4.0.2|Permite compilar código Sass en CSS sin necesidad de instalar la gema de Sass de Ruby, solo desde Node.js|
|gulp-clean-css|4.2.0|Permite minificar el código CSS eliminando espacios y comentarios. Este tipo de prácticas se utilizan para generar código listo para un ambiente de producción.|
|gulp-rename|2.0.0|Permite renombrar archivos con el nombre que le especifiquemos|
|gulp-plumber|1.2.1|Permite manejar e identificar errores en tiempo de ejecución.|
|gulp-postcss|8.0.0|Permite ejecutar modulos para transformar código CSS.|
|postcss-prefixer|2.1.2| Plugin de PostCSS que permite añadir prefijos a las clases de un archivo CSS.|

## Licencia

The MIT License (MIT)

Copyright (c) 2015-Present (Sebastian Serna)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.