# Interpretación del ejemplo 7: EcmaScript Modules ESM

## Archivo `logger.js`

El archivo `logger.js` se comporta como un objeto que contiene una función `log`, una constante `DEFAULT_LEVEL`, otra constante `LEVELS` y una clase `Logger`, que a su vez contiene un método `log`. Todo esto es exportado; es decir, al importar el módulo, podemos usar todos los elementos del módulo definidos.
___

## Archivo `main.js`

En este archivo se importan todos los elementos del módulo `logger.js` como `loggerModule` y se imprime en pantalla este objeto.

```javascript
[Module: null prototype] {
  DEFAULT_LEVEL: 'info',
  LEVELS: { error: 0, debug: 1, warn: 2, data: 3, info: 4, verbose: 5 },
  Logger: [class Logger],
  log: [Function: log]
}
```
___

## Archivo `main_2.js`

En este archivo únicamente se importa la función `log` del módulo `logger.js`. Y como esta función se ha exportado, la podemos usar directamente.

```javascript
log('Hello world!');
```
___