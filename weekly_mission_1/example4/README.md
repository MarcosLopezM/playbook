# Interpretación del ejemplo 4: Clases y objetos

## Archivo `logger.js`

En el archivo `logger.js` se encuentra la clase `Logger` que contiene distintos métodos, entre ellos el método `constructor`. Este método es un método especial de una clase, el cual sirve para crear e inicializar una instancia del objeto de esa clase. Además, nos permite proveer una forma de inicializar personalizada antes de poder llamar a otros métodos. En este caso, el método `constructor` recibe un parámetro llamado `name`, que es el atributo por defecto que la clase asigna a un objeto instanciado.

Por otro lado, tenemos los métodos `info` y `verbose` que reciben un parámetro llamado `message`, el cual se interpola en conjunto con el atributo `name` para formar un mensaje que se imprime en pantalla.

Finalmente, se exporta la clase `Logger` para que sea utilizada en otros archivos.

___

## Archivo `main.js`

En este archivo se importa el módulo `logger.js` con el nombre `Logger`. Y se crean dos instancias de la clase `Logger` llamadas `dbLogger` y `accessLogger`, con atributos _constructores_ *DB* y *ACCESS*, respectivamente.

Después, la instancia `dbLogger` llama al método `info` y la instancia `accessLogger` llama al método `verbose`, ambas recibiendo un mensaje como parámetro. 