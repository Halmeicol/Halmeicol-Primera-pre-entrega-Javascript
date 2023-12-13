alert ("Bienvenid@ a esta primer pre-entrega del curso de Javascript");
// alert ("Te realizaremos consultas y te pedimos respondas en castellano o ingles para no incurrir en un error, gracias.");
let nombre = prompt ("Como te llamas ?");

if (nombre != null) {
    let consulta = parseInt(prompt(nombre + " si quieres practicar las tablas matematicas responde 1, si quieres realizar operaciones matematicas, responde 2."));
    if (consulta  === 1) {
        let numero = parseInt(prompt ("Ingrese el numero para la tabla de multiplicar"));
            let mpx = parseInt(prompt ("Ingrese el numero maximo hasta el que se deberia de multiplicar"))
            let brk = parseInt (prompt ("Ingrese el valor maximo como resultado"))
            for (let i = 1; i <= mpx; i++) {
            let resultado = numero * i;
            alert (`${numero} X ${i} = ${resultado}`);
                if (resultado > brk ) {
                alert ("Valor maximo sobrepasado")
                break;
                }
            }
            alert ("Fin de la secuencia, recarga la pagina con F5 para volver a empezar, o cierra para terminar")
        }
        else if ( consulta === 2) {
            function calculadora(num1, num2, operacion) {
                switch (operacion) {
                    case "+":
                        return num1 + num2;
                        break;
                    case "-":
                        return num1 - num2;
                        break;
                    case "*":
                        return num1 * num2;
                        break;
                    case "/":
                        return num1 / num2;
                        break;
                    default:
                        return "error, no se selecciono una operacion valida"
                }
            }
            let uno = parseInt (prompt ("Ingrese el primer numero"));
            let dos = parseInt (prompt ("Ingrese el segundo numero"));
            let operacion = prompt ("Ingrese el simbolo de la operacion a realizar  + sumar, - restar, * multiplicar, o / para dividir.");
            let resultado = calculadora(uno, dos, operacion);
            alert(`El resultado es ${resultado}`);
            alert ("Fin de la secuencia, recarga la pagina con F5 para volver a empezar, o cierra para terminar")
        }
    else {
        alert ("Pusistes otra cosa, fin del ejercicio, recarga la pagina con F5 para volver a empezar, o cierra para terminar")
    }
    }
    else {
        alert ("No ingreso un nombre, fin del ejercicio, recarga la pagina con F5 para volver a empezar, o cierra para terminar")
}
