//funcion para sumar dos numeros
function sumar(num1, num2) {
    return num1 + num2;
}

//funcion para restar dos numeros
function restar(num1, num2) {
    return num1 - num2;
}

//funcion para multiplicar dos numeros
function multiplicar(num1, num2) {
    return  num1 * num2;
}

//funcion para exponer dos numeros
function exponer(num1, num2) {
    return num1 ** num2;
}

//funcion para calcular el porcenta del primer numero.
function porcentaje(num1, num2) {
    return num1 * (num2 / 100);
}

//funcion para dividir dos numeros
function division(num1, num2) {
    if (num2 === "0") {
        alert("Error, no se puede dividir por 0")
    }
    return num1 / num2;
}


//funciones principales para la operacion a realizar (suma, resta, multiplicacion, exponencial, division, porcentaje)
function calcular() {
     
    //Variable para la operacion a realizar
    let operacion = prompt("Ingrese la operacion que desee realizar: " + "\n" + "para sumar: + " + "\n" + "para restar: - " +  "\n" + "para multiplicar: * " + "\n" + "para calcular el exponente: ** " + "\n" + "para dividir: / "+ "\n" + "para calcular el porcentaje del primer numero: % "  + "\n" + "Para salir escriba ESC, en todas las secuencias ");
    
    //aplico un bucle con condicionales para la operacion:
    while ((operacion != "+") && (operacion != "-") && (operacion != "*") && (operacion != "**") && (operacion != "/") && (operacion != "%") && (operacion != "ESC")) {
        alert("Caracter no valido, ingrese la operacion a realizar");
        operacion = prompt("Ingrese la operacion que desee realizar: " + "\n" + "para sumar: + " + "\n" + "para restar: - " +  "\n" + "para multiplicar: * " + "\n" + "para calcular el exponente: ** " + "\n" + "para dividir: / "+ "\n" + "para calcular el porcentaje del primer numero: % "  + "\n" + "Para salir escriba ESC, en todas las secuencias ");
    }        
    //variable que le pide un numero al usuario a traves de prompt, luego se usara en el Switch
    let numero1 = parseFloat(prompt("Ingrese el primer numero para la operacion: "));

    //variable que le pide un numero al usuario a traves de prompt, luego se usara en el Switch
    let numero2 = parseFloat(prompt("ingrese el segundo numero para la operacion o el porcentaje a calcular: "));
    let resultado = " ";
    
    
    //creo un ciclo con while
    while (operacion != "ESC") { 

        //creo un switch para las operaciones
        switch (operacion) {
            case "ESC":         // ESCx3 para cerrar el alert
                break;
            case "+":
               resultado = sumar(numero1, numero2);
               break;
            case "-":
                resultado = restar(numero1, numero2);
                break;
            case "*":
                resultado = multiplicar(numero1, numero2);
                break;
            case "**":
                resultado = exponer(numero1, numero2);
                break;
            case "%":
                resultado = porcentaje(numero1, numero2);
                break;
            case "/":
                resultado = division(numero1, numero2);
                break;
            default:
                alert("Error, ingrese los parametros y luego los numeros para la operacion");
                break;
        }   //resultado:
        alert("Su resultado es: " + "\n" + resultado);
        //llamo de nuevo al ciclo:
        operacion = prompt("Ingrese la operacion que desee realizar: +, -, *, **, / o %, si quiere calcular un porcentaje ");
        numero1 = parseFloat(prompt("Ingrese el primer numero para la operacion: "));
        numero2 = parseFloat(prompt("ingrese el segundo numero para la operacion o el porcentaje a calcular: "));
    }
}
calcular();
