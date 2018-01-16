![Swan UI](https://github.com/acuariux/swan/blob/master/dist/images/logo.png "Swan - User Interface")

Experimental UI framework. Work in progress...

==========

## Requisitos

Antes de iniciar debes tener previamente instalados:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versión 4 o superior)

## Instalación

En una carpeta vacía de tu equipo escribe el siguiente comando en la terminal:

```
$ git clone https://github.com/acuariux/swan.git
```

Cuando se termine de clonar el proyecto escribe el comando:

```
$ npm install
```
Este comando instalará las dependencias de Node.js especificadas en el archivo `package.json` (en esencia se trata de [Gulp.js](http://gulpjs.com/) y una serie de plugins necesarios para automatizar algunas tareas de desarrollo).

Las dependencias se instalan en la carpeta `node_modules` (creada automáticamente con el comando `npm install`) y luego de instaladas podemos utilizar Gulp para ver nuestra página de inicio con:

```
$ gulp watch
```
Este comando ejecuta un servidor estático que apunta a la carpeta `dist` pasados unos instantes se abrirá el navegador de forma automática mostrando el sitio de prueba con ejemplos del framework y observando si se realizan cambios en los archivos de la carpeta `src` para generar el código de estilos CSS, HTML y JavaScript.

## Estructura de Directorios

```sh
swan/  # Carpeta raíz del repositorio
│
├── dist/           # Código generado para producción         
│   ├── images/
│   ├── Pages/        
│   ├── scripts/   
│   ├── styles/    
│   └── index.html
│       
├── src/           # Código fuente para desarrollo      
│   ├── images/
│   ├── Pages/        
│   ├── scripts/   
│   ├── styles/    
│   └── index.htm
│       
├── LICENSE         # Licencia MIT
├── README.md       # Archivo LEAME inicial
├── gulpfile.js     # Tareas de Gulp
└── package.json    # Dependencias de Node.js
│
└---------------------------------------------------------
```


### Arquitectura Sass (Alpha)

Los archivos de estilo del framework siguen el [ Patrón 7-1](https://sass-guidelin.es/#the-7-1-pattern). Estos archivos Sass se encuentran en el directorio `src/styles`

```sh
styles/
│
├── core/              
│   ├── abstract/      # Mixins & Variables     
│   ├── base/          # Base Elements
│   ├── pages/         # Individual Page Styles
│   ├── layout/        # Layout & Structure   
│   ├── components/    # Components & Patterns
│   ├── themes/        # Themes (White / Black)
│   ├── vendors/       # Vendor Libraries
│   └── _core.scss     # Swan Core Package
│  
├── styles.scss        # Styles Final Package
│
└---------------------------------------------------------

```

Cuando ejecutamos el comando `gulp watch` cualquier cambio realizado en los archivos de la carpeta `src/styles` se compilarán en la carpeta `dist/styles` utilizando el plugin `gulp-sass`.

## Librerías CSS

Swan utiliza las siguientes librerías de código CSS creadas por terceros:

|Librería|Versión|Descripción|
|--- |--- |--- |
|Normalize|3.0.2|Permite normalizar estilos CSS por defecto entre navegadores|
|Bourbon|4.2.7|Librería de Mixins para Sass|
|Neat|1.8.0|Grid semántico basado en Bourbon|

## Módulos de Node.js

Para el desarrollo se utilizan los siguientes módulos de Node.js (la mayoría son plugins de Gulp).

|Módulo|Versión|Descripción|
|--- |--- |--- |
|browser-sync|2.18.12|Permite ejecutar un servidor local y visualizar nuestro sitio en múltiples navegadores remotos en tiempo real.|
|gulp|3.9.1|Módulo oficial de Gulp para Node.js|
|gulp-install|1.1.0|Instala de forma automática paquetes y dependencias de npm, bower, tsd, y pip si la configuración asociada se encuentra en el gulpfile.|
|gulp-autoprefixer|4.0.0|Permite automatizar la escritura de prefijos CSS para cada navegador web (moz, webkit, etc).|
|gulp-sass|3.1.0|Permite compilar código Sass en CSS sin necesidad de instalar la gema de Sass de Ruby, solo desde Node.js|
|gulp-clean-css|3.4.1|Permite minificar el código CSS eliminando espacios y comentarios. Este tipo de prácticas se utilizan para generar código listo para un ambiente de producción.|
|gulp-rename|1.2.2|Permite renombrar archivos con el nombre que le especifiquemos|
|gulp-concat|2.6.1|Permite fusionar archivos en uno solo para optimizar el tiempo de carga de dependencias en un sitio web (muy utilizado para combinar archivos CSS o archivos JavaScript).|
|gulp-twig|0.7.0|Motor de plantillas basado en Twig.js. Se utiliza en Swan para crear layouts HTML con partials reutilizables. |
|gulp-plumber|1.1.0|Permite manejar e identificar errores en tiempo de ejecución.|
|gulp-sourcemaps|1.9.1|Permite generar sourcemaps para el código Sass y otros.|
|gulp-uglify|3.0.0|Permite minificar el código JavaScript con UglifyJS.|
|gulp-imagemin|3.3.0|Permite optimizar el peso y la calidad de imágenes.|


## Licencia

The MIT License (MIT)

Copyright (c) 2015-2018 Sebastian Serna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
