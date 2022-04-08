# Interpretación del ejemplo 2: Exportando funciones entre scripts con CommonJS

Notemos que hay una nueva función con el nombre `require` que nos permite importar un módulo. Esto nos permite importar el módulo `logger.js` y utilizarlo en el archivo `main.js`.

Es decir, con la función `require` se lee el archivo de _Javascript_ y se ejecuta, regresando el objeto `exports`.

De esta manera, la información se guarda en la variable `logger`, _i.e._, las funciones `exports.info` y `exports.verbose`. A las cuales se les pasa un mensaje como parámetro una vez que se llaman en el archivo `main.js`.