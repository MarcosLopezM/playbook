# Interpretación del ejemplo 5: Clases y objetos

## Archivo `logger.js`

Este archivo contiene una clase llamada `Logger`, la cual por defecto asignará dos atributos a un objeto instanciado: `count` y `name`. Sin embargo, solo recibe un solo parámetro.

Además, contiene el método `log` el cual se aumenta el contador interno cada vez que se llama este método e imprime en pantalla el parámetro mensaje concatenado con el atributo `name`.

Finalmente, se exporta un objeto instanciado con el parámetro `'DEFAULT'` para que sea utilizada en otros archivos.
___

## Archivo `main.js`

Se importa el módulo `logger` y, puesto que ya ha sido importado como una instancia, se puede usar directamente, _i.e._, 

```javascript
logger.log('This is an informational message.');
```
___