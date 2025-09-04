// Funciones
function ejemploFunciones(){
    let salida = ""; //acumula el texto

    // Definir una funcion tradicional

    function saludar(nombre){
        salida += "Hola, "+ nombre + "!"
    }

    // Funcion de Flecha anonima automatica

    const sumar = (a,b)=>a+b; //Retorna la suma

    // Llamar a la funcion
    saludar("Gonzalo");
    salida += "Suma de 5+3" + sumar(5,3);

    // Resultado
    document.getElementById("resultado").textContent=salida;

}
    // Ciclo For
    function ejemploFor(){
        let salida = "Numeros de el 1-5\n"; //Encabezado
        /*

        */
        for(let i =1; i<=5; i++){
            salida+= "Numero: "+i+ "\n";
            
        }
        document.getElementById("resultado").textContent=salida;
    }
    // While
    function ejemploWhile(){
        let salida = "";
        let contador = 1;
        while(contador<=3){
            salida+="Contador vale:"+contador+"\n";
            contador++
        }
        document.getElementById("resultado").textContent = salida
    }
    // For Each
    function ejemploForEach(){
        let salida = "";
        let frutas = ["Manzana", "Melon", "Frutillas", "Duraznos", "Naranjas"];

        frutas.forEach((frutas, indice) =>{
            salida += "Fruta "+ (indice+1)+ ":" + frutas + "\n";
        });
        document.getElementById("resultado").textContent = salida
    }

    // Metodos
    function ejemploMetodos(){
        let salida = "";
        let texto = "Hola Mundo";

        salida += "Texto original: "+ texto + "\n";
        salida += "Mayusculas: "+ texto.toUpperCase() + "\n";

        salida += "Texto original: "+ texto + "\n";
        salida += "Minusculas : "+ texto.toLocaleLowerCase() + "\n";

        salida += "Contar: "+ texto.length + "\n";

        let numeros = [1,2,3];
        salida+= "Arreglo original: "+ numeros + "\n";

        numeros.push(4);
        salida += "Despues del push: " + numeros + "\n";
        
        numeros.pop();
        salida+= "Despues de el pop: "+numeros+ "\n";

        document.getElementById("resultado").textContent = salida;
    }