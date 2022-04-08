# Interpretación del ejemplo 1: Objetos de JS

1. Creación de un objeto con propiedades

    Se crea una nueva variable mutable llamada `myCar` a la que se le asigna un nuevo objeto. Para después crear las entradas _make_, _model_ y _year_, a las que se les asignan los valores de _'Ford'_, _'Mustang'_ y _1969_, respectivamente. 

    ```javascript
    let myCar = {
        make: 'Ford',
        model: 'Mustang',
        year: 1969
    };
    ```
    El código anterior es otra forma de escribir el código que se encuentra en el archivo `main.js` para esta parte.

2. Declaración de un objeto con variables locales y públicas
    
    Para esta parte se define una función llamada `myModule` la cual contiene distintas variables locales y debido a esto solo actúan dentro de la función. Entonces, para _exponer_ las variables locales se crea una una nueva variable llamada `exported` que nos permite exportarlas usando `return` cuando se llama a la función.