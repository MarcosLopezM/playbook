# Interpretación del ejemplo 8: EcmaScript Export Default

## Archivo `logger.js`

En este archivo se encuentra una clase llamada `Logger` la cual se exporta como `default`. Esto permite que pueda ser importada con cualquier nombre.
___

## Archivo `main.js`

En este archivo se exporta la clase `Logger` alojada en el archivo `logger.js`, como `MyLogger` y se crea una instancia de este objeto para poder utilizarlo.
___

## Archivo `main_2.js`

En este archivo se importan todos los elementos del archivo `logger.js`, el cual consiste únicamente de la clase `Logger`, como `loggerModule`. Finalmente, se imprime en pantalla. Puesto que no creamos una instancia de este objeto, se imprime lo siguiente:

```javascript
[Module: null prototype] { default: [class Logger]}
```
___