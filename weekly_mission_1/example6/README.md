# Interpretación del ejemplo 6: Modificación de clases

## Archivo `logger.js`

En este archivo ocurre lo mismo que en el ejemplo anterior, pero en este caso además del objeto instanciado, también se exporta la clase.

___

## Archivo `patcher.js`

En este archivo estamos agregando una nueva función al objeto instanciado llamada `customMessage`, la cual es una función que no recibe argumentos y regresa un mensaje.
___

## Archivo `main.js`

Para modificar el objeto instanciado, se importa el archivo `patcher.js`. De esta manera, cuando importemos el archivo `logger.js`, el objeto instanciado tendrá tanto el método `log` como la función `customMessage`.
___