![alt text](https://github.com/zemiotic/swan/blob/master/images/logo.png "Swan - User Interface")

Experimental UI framework. Work in progress... 


```
STRUCTURE
–––––––––––––––––––––––––––––
core -> modules
–––––––––––––––––––––––––––––

Sass Architecture v0.9 (Alpha)
Core inspired by The 7-1 Pattern

sass/
|
|– core/
|   |– abstract/           # Mixins & Variables
|   |– base/               # Core styles
|   |– controls/           # Interactive controls
|   |– layout/             # Core layout
|   |– patterns/           # Core patterns
|   |– themes/             # Core themes (White / Black)
|   |– vendor/             # Vendor libraries
|   |– _core.scss          # CORE Package
|
|– modules/
|   |– module1/            # Custom module
|   |– module2/            # Custom module
|   |– module3/            # Custom module
|   |– _modules.scss       # MODULES package
|
| -------------------------------------------------
`– styles.scss             # Styles Final Package
  -------------------------------------------------
```


