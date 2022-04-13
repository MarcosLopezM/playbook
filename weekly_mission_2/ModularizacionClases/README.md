# Interpretación del Ejemplo 4: Modularización de clases

## Archivo `explorer.js`

Este archivo contiene una clase llamada `Explorer` que contiene un constructor conformado por las propiedades `name`, `username` y `age`. Así mismo, la clase tiene un método llamado `getNameAndUsername` que regresa el nombre y el usuario del _explorer_.

Es necesario mencionar que debido a que estamos usando `export default`, al momento de importar el módulo en otro archivo se puede usar directamente la clase y sus métodos sin necesidad de instanciarla.
___

## Archivo `viajero.js`

En este archivo se importa la clase `Explorer` del módulo `explorer.js`. Además, se define una clase hija llamada `Viajero` que hereda el constructor de la clase `Explorer` y contiene un atributo propio de esta, así como un método que hace uso de los métodos de la clase padre.

Finalmente, notamos que se usa `export default` para exportar la clase `Viajero`, por lo que también se puede usar directamente.
___

## Archivo `main.js`

En este archivo se importa la clase `Viajero` del módulo `viajero.js`. Notemos que no es necesario importar la clase `Explorer`, ya que la clase `Viajero` hereda de esta y, por lo tanto, ya está lista para usarse.

Finalmente, se crea una instancia de la clase `Viajero` y se llaman tanto métodos de la clase padre, como de la clase hija.
___