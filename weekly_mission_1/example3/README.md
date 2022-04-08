# Interpretación del ejemplo 3

En el archivo `logger_1.js` se define un módulo que exporta un solo objeto, es por eso que se usa `module.exports`, ya que no se requiere de un objeto lleno de funciones.

Por otro lado, en el archivo `logger_2.js` es una combinación de lo que sucede en el archivo `logger_1.js`, con la única diferencia que se le asigna a una propiedad de este objeto.

Así, una vez que se han importado los archivos `logger_1.js` y `logger_2.js` al archivo `main.js`, tenemos dos formas de acceder a los métodos de los objetos que se han exportado.

1. `Logger1`

    Puesto que el archivo `logger_1.js` consiste únicamente de una función, se puede usar directamente el nombre de la variable al que se le asignó este módulo.

2. `Logger2`

    En este caso, ya que el archivo `logger_2.js` contiene una función que se asigna a una propiedad de este objeto, se debe especificar el nombre de la propiedad cuando se llama a la objeto.