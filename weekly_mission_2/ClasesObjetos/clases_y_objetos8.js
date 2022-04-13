/*
    Ejemplo 8: Métodos static

    Estos métodos nos ayudan a escribir métodos en una clase
    que podemos usar sin necesidad de instanciar algún objeto.
*/

console.log("Ejemplo 8: Métodos static");

class toolBox {
    static getMostUsefulTool() {
        return ["Command Line", "git", "Text Editor"];
    }
}

// Podemos llamar el método static sin necesidad de instanciar un objeto
console.log(toolBox.getMostUsefulTool());

/*
    Si intentamos instanciar un objeto, no podremos llamar este
    método static.
    const toolbox = new toolBox();
    console.log(toolbox.getMostUsefulTool());
    ~$ TypeError: toolbox.getMostUsefulTool is not a function
*/ 

const toolbox = new toolBox();
console.log(toolbox.getMostUsefulTool());