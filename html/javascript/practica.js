var adicionales = [
    {
        enunciado: 'Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.',
        ej_1: () => {
            alert('Hello World')
            },
        btn_ejercicio: 'adicionales[0].ej_1()'
    },
    {
        enunciado: 'Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).',
        ej_2: () => {
            document.write("Hello World");
            },
        btn_ejercicio: 'adicionales[1].ej_2()'    
    },
    {
        enunciado: 'Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.',
        ej_3: () => {
            document.write(`${3+5}`);
            },
        btn_ejercicio: 'adicionales[2].ej_3()'    
    },
    {
        enunciado: 'Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”',
        ej_4: () => {
            let nombre_usuario = prompt("Ingrese su nombre");
            document.write(`Hola ${nombre_usuario}`);
            },
        btn_ejercicio: 'adicionales[3].ej_4()'    
    },
    {
        enunciado: 'Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.',
        ej_5: () => {
            let num1 = parseInt(prompt("Ingrese un número"));
            let num2 = parseInt(prompt("Ingrese otro número"));
            document.write(`El resultado de sumar ambos números es ${num1 + num2}`);
            },
        btn_ejercicio: 'adicionales[4].ej_5()'    
    },
    {
        enunciado: 'Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.',
        ej_6: () => {
            let num1 = parseInt(prompt("Ingrese un número"));
            let num2 = parseInt(prompt("Ingrese otro número"));
                while (num2 == num1) {
                    num2 = parseInt(prompt("Ingrese un segundo valor distinto al primero"))
                }
            document.write(`El mayor de los números es ${num1>num2 ? num1 : num2}`);
            },
        btn_ejercicio: 'adicionales[5].ej_6()'    
    },
    {
        enunciado: 'Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.',
        ej_7: () => {
            let nros = [];
            let num1 = parseInt(prompt("Ingrese un número"));
            nros.push(num1);
            let num2 = parseInt(prompt("Ingrese otro número"));
            nros.push(num2);
            let num3 = parseInt(prompt("Ingrese otro número"));
                while (num3 == num2 == num1) {
                    num3 = parseInt(prompt("Ingrese un tercer valor distinto a los dos anteriores"))
                }
            nros.push(num3);
            let max = 0;
            nros.forEach(
                (item) => {
                    if (item > max) {
                        max = item;
                    }
                }
            )
            document.write(`El mayor de los tres números es ${max}`);
            },
        btn_ejercicio: 'adicionales[6].ej_7()'    
    },
    {
        enunciado: 'Escribe un programa que pida un número y diga si es divisible por 2.',
        ej_8: () => {
            let num1 = parseInt(prompt("Ingrese un número"));
            document.write(`El número ${num1} ${num1 % 2 == 0 ? 'si' : 'no'} es divisible por 2.`);
            },
        btn_ejercicio: 'adicionales[7].ej_8()'    
    },
    {
        enunciado: 'Escribe un programa que pida una frase y escriba cuantas veces aparece la letra "a".',
        ej_9: () => {
            let texto = prompt("Ingrese una frase");
            var cantidad = 0;
            for (let i = 0; i < texto.length; i++) {
                if (texto.toLowerCase()[i] == 'a')
                {
                    cantidad++;
                }
            }
            document.write(`La letra a aparece ${cantidad} veces en la frase ingresada.`);
            },
        btn_ejercicio: 'adicionales[8].ej_9()'    
    },
    {
        enunciado: 'Escribe un programa que pida una frase y escriba las vocales que aparecen.',
        ej_10: () => {
            let texto = prompt("Ingrese una frase");
            var vocales = ['a', 'e', 'i','o','u'];
            var vocales_encontradas = [];
            for (let i = 0; i < texto.length; i++) {
                var letra = texto.toLowerCase()[i];
                if (vocales.includes(letra))
                {
                    vocales_encontradas.push(letra);
                }
            }
            document.write(`En la palabra ingresada aparecen las siguientes vocales ${vocales_encontradas}.`);
            },
        btn_ejercicio: 'adicionales[9].ej_10()'    
    },
    {
        enunciado: 'Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales.',
        ej_11: () => {
            let texto = prompt("Ingrese una frase");
            var vocales = ['a', 'e', 'i','o','u'];
            var cantidad = 0;
            for (let i = 0; i < texto.length; i++) {
                var letra = texto.toLowerCase()[i];
                if (vocales.includes(letra))
                {
                    cantidad++;
                }
            }
            document.write(`En la palabra ingresada hay ${cantidad} vocales.`);
            },
        btn_ejercicio: 'adicionales[10].ej_11()'    
    },
    {
        enunciado: 'Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.',
        ej_12: () => {
            let texto = prompt("Ingrese una frase");
            var vocales = ['a', 'e', 'i','o','u'];
            var cantidad = [0,0,0,0,0];
            for (let i = 0; i < texto.length; i++) {
                var letra = texto.toLowerCase()[i];
                if (vocales.includes(letra))
                {
                    if (letra == 'a') {
                        cantidad[0]++;
                    } else if (letra == 'e') {
                        cantidad[1]++;
                    } else if (letra == 'i') {
                        cantidad[2]++;
                    } else if (letra == 'o') {
                        cantidad[3]++;
                    } else if (letra == 'u') {
                        cantidad[4]++;
                    }
                }
            }
            document.write(`En la palabra ingresada hay:
             ${cantidad[0]} vocales 'a'
             ${cantidad[1]} vocales 'e'
             ${cantidad[2]} vocales 'i'
             ${cantidad[3]} vocales 'o'
             ${cantidad[4]} vocales 'u'
            .`);
            },
        btn_ejercicio: 'adicionales[11].ej_12()'    
    },
    {
        enunciado: 'Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro).',
        ej_13: () => {
            let num1 = parseInt(prompt("Ingrese un número para ver si es múltiplo de 5."));
            document.write(`El número ${num1} ingresado ${num1 % 5 == 0 ? 'si' : 'no'} es múltiplo de 5.`);
            },
        btn_ejercicio: 'adicionales[12].ej_13()'    
    },
    {
        enunciado: 'Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible).',
        ej_14: () => {
            let num1 = parseInt(prompt("Ingrese un número para ver si es múltiplo de 2, 3, 5 o 7."));
            var div2 = false; 
            var div3 = false; 
            var div5 = false;
            var div7 = false;
            if (num1 % 2 == 0){
                div2 = true;
            }
            if (num1 % 3 == 0) {
                div3 = true;
            }
            if (num1 % 5 == 0) {
                div5 = true;
            }
            if (num1 % 7 == 0) {
                div7 = true;
            }
            if (div2 == false && div3 == false && div5 == false && div7 == false) 
                {
                    document.write(`El número ${num1} ingresado no es divisible por 2, ni por 3, ni por 5 ni por 7.`);
                } else {
                    document.write(`El número ${num1} ingresado es divisible por `);
                    div2 == true ? document.write(`2 `) : '';
                    div3 == true ? document.write(`3 `) : '';
                    div5 == true ? document.write(`5 `) : '';
                    div7 == true ? document.write(`7 `) : '';
                }
            },
        btn_ejercicio: 'adicionales[13].ej_14()'    
    },
    {
        enunciado: 'Escribir un programa que escriba en pantalla los divisores de un número dado.',
        ej_15: () => {
            let num1 = parseInt(prompt("Ingrese un número para obtener sus divisores."));
            var divisores = [];
            for (i = 1; i < num1 / 2; i++) {
                if (num1 % i == 0) {
                    divisores.push(i);
                }
            }
            if (num1 % 2 == 0) {
                divisores.push(num1 / 2);
            }
            divisores.push(num1);
            document.write(`Los divisores del número ${num1} son ${divisores}.`);
            },
        btn_ejercicio: 'adicionales[14].ej_15()'    
    },
    {
        enunciado: 'Escribir un programa que escriba en pantalla los divisores comunes de dos números dados.',
        ej_16: () => {
            let num1 = parseInt(prompt("Ingrese un número"));
            let num2 = parseInt(prompt("Ingrese otro número"));
            var divisores_comunes = [];
            var divisores_num1 = [];
            for (i = 1; i < num1 / 2; i++) {
                if (num1 % i == 0) {
                    divisores_num1.push(i);
                }
            }
            if (num1 % 2 == 0) {
                divisores_num1.push(num1 / 2);
            }
            divisores_num1.push(num1);
            for (i = 1; i < num2 / 2; i++) {
                if (num2 % i == 0) {
                    if (divisores_num1.includes(i))
                    {
                        divisores_comunes.push(i);
                    };
                }
            }
            if (num2 % 2 == 0 && divisores_num1.includes(num2 / 2)) {
                divisores_comunes.push(num2 / 2);
            }
            if (divisores_num1.includes(num2)){
                divisores_comunes.push(num2);
            };
            
            document.write(`Los divisores comunes del número ${num1} y el número ${num2} son ${divisores_comunes}.`);
            },
        btn_ejercicio: 'adicionales[15].ej_16()'    
    },
    {
        enunciado: 'Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad).',
        ej_17: () => {
            let num1 = parseInt(prompt("Ingrese un número para saber si es un número primo."));
            var divisores = [];
            var ctrl = true;
            for (i = 2; i < num1; i++) {
                if (num1 % i == 0) {
                    ctrl = false;
                }
            }
            if (ctrl == true) {
                document.write(`El número ${num1} ingresado SI es un número primo.`);
            } else {
                document.write(`El número ${num1} ingresado NO es un número primo.`);
            }
            },
        btn_ejercicio: 'adicionales[16].ej_17()'    
    },
    {
        enunciado: 'Pide la edad y si es mayor de 18 años indica que ya puede conducir.',
        ej_18: () => {
            let num1 = parseInt(prompt("Ingrese el número correspondiente a su edad."));
            if (num1 >= 18) {
                document.write(`Ya tienes 18 años o más, puedes conducir.`);
            } else {
                document.write(`Debes tener al menos 18 años para conducir.`);
            }
            },
        btn_ejercicio: 'adicionales[17].ej_18()'    
    },
    {
        enunciado: 'Pide una nota (número). Muestra la calificación según la nota: ● 0-3: Muy deficiente ● 3-5: Insuficiente ● 5-6: Suficiente ● 6-7: Bien ● 7-9: Notable ● 9-10: Sobresaliente.',
        ej_19: () => {
            let num1 = parseFloat(prompt("Ingrese el número correspondiente a su nota."));
            if (num1 <= 3) {
                document.write(`Muy deficiente.`);
            } else if (num1 <= 5) {
                document.write(`Insuficiente.`);
            } else if (num1 <= 6) {
                document.write(`Suficiente.`);
            } else if (num1 <= 7) {
                document.write(`Bien.`);
            } else if (num1 <= 9) {
                document.write(`Notable.`);
            } else if (num1 <= 10) {
                document.write(`Sobresaliente.`);
            }
        },
        btn_ejercicio: 'adicionales[18].ej_19()'    
    },
    {
        enunciado: 'Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión.',
        ej_20: () => {
            let ctrl = true;
            let concat_str = "";
            while (ctrl == true) {
                let str = prompt("Ingrese la cadena de texto a concatenar:");
                if (str == null || str == "") {
                    ctrl = false;
                } else {
                    if (concat_str == "") {
                        concat_str = concat_str + str;
                    } else {
                        concat_str = concat_str + "-" + str;
                    }
                    
                };
            };
            document.write(`${concat_str}`);
        },
        btn_ejercicio: 'adicionales[19].ej_20()'    
    },
    {
        enunciado: 'Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.',
        ej_21: () => {
            let ctrl = true;
            let suma = 0;
            let num = 0;
            while (ctrl == true) {                
                num = prompt("Ingrese un número:");
                if (num == null || num == "") {
                    ctrl = false;
                    break;
                } else {
                    while (isNaN(num) == true || isFinite(num) == false) {
                        alert("La información ingresada no es un número, por favor reintente.")
                        num = prompt("Ingrese un número:");
                        if (num == null || num == "") {
                            ctrl = false;
                            num = 0;
                            break;
                        };
                    }
                    suma = suma + parseFloat(num);
                }
            };
            document.write(`La suma total de los números ingresados es de ${suma}`);
        },
        btn_ejercicio: 'adicionales[20].ej_21()'    
    },
    {
        enunciado: 'Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad). El algoritmo para calcular la letra del dni es el siguiente : ● El número debe ser entre 0 y 99999999 ● Debemos calcular el resto de la división entera entre el número y el número 23. ● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) ● Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar. ● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».',
        ej_22: () => {
            let ctrl = true;
            let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
            let nro = 0;
            while (ctrl == true) {
                let dni = prompt("Ingrese su numero de DNI sin puntos ni guiones, solamente números entre 0 y 9999999.");
                if (dni == null || dni == "") {
                    ctrl = false;
                    break;
                }
                while (isNaN(dni) == true || isFinite(dni) == false || dni < 0 || dni > 99999999) {
                    alert("La información ingresada no es un número o está fuera de los límites, por favor reintente.")
                    dni = prompt("Ingrese su numero de DNI sin puntos ni guiones, solamente números entre 0 y 9999999.");
                    if (num == null || num == "") {
                        ctrl = false;
                        num = 0;
                        break;
                    };
                }
            let resto = dni % 23;
            alert(`La letra correspondiente al DNI ingresado es ${letras[resto]}`)
            };
        },
        btn_ejercicio: 'adicionales[21].ej_22()'    
    },
    {
        enunciado: 'Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 1 22 333 4444 55555 666666 …….',
        ej_23: () => {
            for (let i = 1; i < 31; i++) {
                var text = i.toString().repeat(i)
                if (i == 1) {
                    var resultado = `${text} \n`
                } else {
                    resultado = `${resultado} ${text} \n`
                }    
            }
            document.body.innerText = resultado;
        },
        btn_ejercicio: 'adicionales[22].ej_23()'    
    },
    {
        enunciado: 'Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 6). 666666 55555 4444 333 22 1',
        ej_24: () => {
            num = prompt("Ingrese un número para la cantidad de pisos de una pirámide inversa:");
            if (num == null || num == "") {
                return false;
            };
            while (isNaN(num) == true || isFinite(num) == false) {
                alert("La información ingresada no es un número, por favor reintente.")
                num = prompt("Ingrese un número:");
                if (num == null || num == "") {
                return false;
                };
            };
            var pisos = parseInt(num);            
            for (let i = pisos; i > 0; i--) {
                var text = i.toString().repeat(i)
                if (i == pisos) {
                    var resultado = `${text} \n`
                } else {
                    resultado = `${resultado} ${text} \n`
                }    
            }
            document.body.innerText = resultado;
        },
        btn_ejercicio: 'adicionales[23].ej_24()'    
    },
    {
        enunciado: 'Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50).',
        ej_25: () => {
            var largo = prompt("Ingrese la cantidad de pisos (máx. 50)");
            if (largo == null || largo == "") {
                return false;
            }
            largo = parseInt(largo);
            while (isNaN(largo) == true || isFinite(largo) == false || largo > 50 || largo < 0) {
                alert("Lo ingresado no es un número o está fuera de los límites. Reintente por favor.")
                largo = prompt("Ingrese la cantidad de pisos (máx. 50)");
                if (largo == null || largo == "") {
                    return false;
                }
            }
            largo = parseInt(largo);
            for (let i = 1; i < largo + 1; i++) {
                var text = i.toString().repeat(i)
                if (i == 1) {
                    var resultado = `${text} \n`;
                } else {
                    resultado = `${resultado} ${text} \n`;
                }    
            }
            document.body.innerText = resultado;
        },
        btn_ejercicio: 'adicionales[24].ej_25()'    
    },
    {
        enunciado: 'Un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo : 1 2 3 4 (Múltiplo de 4) 5- ————————————————————- 6 7 8 (Múltiplo de 4) 9 (Múltiplo de 9) 10.',
        ej_26: () => {
            for (let i = 1; i < 501; i++) {
                document.write(`${i} ${i % 4 == 0 ? '(Múltiplo de 4)':''} ${i % 9 == 0 ? '(Múltiplo de 9)' : ''}`)
                document.write(`${i % 5 == 0 ? '<hr>':'<br>'}`)
            }                
        },
        btn_ejercicio: 'adicionales[25].ej_26()'    
    },
];

var practica1 = [
    {
    enunciado: 'Realizar una función, a la que se le pase como parámetro un número N, y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al curso Full Stack”.',
    ej_1: () => {
        let veces = prompt("Ingrese el parámetro para la función (nro de veces que se escribira el msj en Consola)");
        if (veces == null || veces == "") {
            return false;
        }
        while (isNaN(veces) == true || isFinite(veces) == false || veces < 0) {
            alert("Lo ingresado no es un número o está fuera de los límites. Reintente por favor.")
            veces = prompt("Ingrese el parámetro para la función (nro de veces que se escribira el msj en Consola)");
            if (veces == null || veces == "") {
                return false;
            }
        }
        veces = parseInt(veces);
        let arrow = (veces) => {
                for (let i = 0; i < veces; i++)
                {
                    console.log('Bienvenidos al curso Full Stack');
                }
            }
        arrow(veces);    
        },
    btn_ejercicio: 'practica1[0].ej_1()'
    },
    {
        enunciado: 'Diseñar una función que tenga como parámetros dos números, y que calcule el máximo.',
        ej_2: () => {
            var numeros = [0,0];
            for (let i = 0; i < 2; i++){
                numeros[i] = prompt("Ingrese uno de los parámetros para la función (nro 1 de 2 para evaluar máximo)");
                if (numeros[i] == null || numeros[i] == "") {
                    return false;
                }
                while (isNaN(numeros[i]) == true || isFinite(numeros[i]) == false || numeros[i] < 0 || numeros[i] == numeros [i - 1]) {
                    alert("Lo ingresado no es un número, está fuera de los límites o es igual al anterior. Reintente por favor.")
                    numeros[i] = prompt("Ingrese uno de los parámetros para la función (nro para evaluar máximo)");
                    if (numeros[i] == null || numeros[i] == "") {
                        return false;
                    }
                }
                numeros[i] = parseInt(numeros[i]);
            }
            let arrow = (a, b) => {
                    let maximo = a > b ? a : b;
                    alert(`El máximo es ${maximo}`);
                    return maximo;
                }
            arrow(numeros[0], numeros[1]);    
            },
        btn_ejercicio: 'practica1[1].ej_2()'
    },
    {
        enunciado: 'Crear una función que se llame promedio3, que reciba como parámetro tres valores y devuelva el promedio de los mismos.',
        ej_3: () => {
            var numeros = [0,0,0];
            for (let i = 0; i < 3; i++){
                numeros[i] = prompt("Ingrese uno de los parámetros para la función (1 nro de 3 para evaluar promedio)");
                if (numeros[i] == null || numeros[i] == "") {
                    return false;
                }
                while (isNaN(numeros[i]) == true || isFinite(numeros[i]) == false || numeros[i] < 0) {
                    alert("Lo ingresado no es un número, está fuera de los límites o es igual al anterior. Reintente por favor.")
                    numeros[i] = prompt("Ingrese uno de los parámetros para la función (nro para evaluar máximo)");
                    if (numeros[i] == null || numeros[i] == "") {
                        return false;
                    }
                }
                numeros[i] = parseFloat(numeros[i]);
            }
            let arrow = (a, b, c) => {
                    let promedio = parseFloat((a + b + c) / 3).toFixed(2);
                    alert(`El promedio es ${promedio}`);
                    return promedio;
                }
            arrow(numeros[0], numeros[1], numeros[2]);    
            },
        btn_ejercicio: 'practica1[2].ej_3()'
    },
    {
        enunciado: 'Crear una función que lea notas hasta que ingrese -1 y devuelve el promedio de las notas leídas. ( aunque no se suele leer valores en una función).',
        ej_4: () => {
            var numeros = [];
            var ctrl = true;
            while (ctrl == true){
                let input = prompt("Ingrese uno de los parámetros para la función (1 nro de 3 para evaluar promedio)");
                if (input == null || input == "") {
                    return false;
                }
                while (isNaN(input) == true || isFinite(input) == false || (input < 0 && input != -1)) {
                    alert("Lo ingresado no es un número, está fuera de los límites o es igual al anterior. Reintente por favor.")
                    input = prompt("Ingrese uno de los parámetros para la función (nro para evaluar máximo)");
                    if (input == null || input == "") {
                        return false;
                    }
                }
                if (input == -1) {
                    ctrl = false;
                } else {
                numeros.push(parseFloat(input));
                }
            }
            if (numeros.length > 0) {
            var suma = 0;
            numeros.forEach(element => {
                suma = suma + element;
                console.log(suma)
            })
            var promedio = parseFloat(suma / numeros.length).toFixed(2);
            alert(`El promedio de las notas ingresadas es ${promedio}.`)
            return promedio;
            } else {
                alert(`No se ingresaron notas para obtener el promedio, este programa se cerrará.`)
                console.warn("No se ingresaron datos, la ejecución se canceló.")
            }
        },
        btn_ejercicio: 'practica1[3].ej_4()'
    },
    {
        enunciado: 'Una función que se llame siguiente, que reciba como parámetro un valor entero, y devuelva el siguiente del número ingresado como parámetro.',
        ej_5: (input) => {
            if (input === undefined) 
            {
                var input = parseFloat(prompt("Ingrese un número entero."));
                while ((Number(input) === input && input % 1 !== 0) || isNaN(input) === true) {
                    input = prompt("Ingrese un número entero, en lugar de uno decimal u otra cosa.");
                }
                input = parseFloat(input);
            }
            var sig;
            function siguiente(input) {
                sig = input + 1;
                // alert(`El número siguiente al ingresado es ${sig}.`)
                return sig;
            }
            siguiente(input);
            return sig;
        },
        btn_ejercicio: 'practica1[4].ej_5()'
    },
    {
        enunciado: 'Una función que se llame doble, que reciba como parámetro un valor, y devuelva el doble del número ingresado como parámetro.',
        ej_6: (input) => {
            if (input === undefined) 
            {
                var input = parseFloat(prompt("Ingrese un número para obtener el doble."));
                while (isFinite(input) === false || isNaN(input) === true) {
                    input = prompt("Ingrese un número, reintente.");
                }
                input = parseFloat(input);
            }
            var dob;    
            function doble(input) {
                dob = input * 2;
                // alert(`El doble del número ingresado es ${dob}.`)
                return dob;
            }
            doble(input);
            return dob;
        },
        btn_ejercicio: 'practica1[5].ej_6()'
    },
    {
        enunciado: 'Una función que se llame cuadrado, que reciba como parámetro un valor, y devuelva el valor del numero ingresado como parámetro elevado al cuadrado.',
        ej_7: (input) => {
            if (input === undefined) 
            {
                var input = parseFloat(prompt("Ingrese un número para elevar al cuadrado."));
                while (isFinite(input) === false || isNaN(input) === true) {
                    input = prompt("Ingrese un número, reintente.");
                }
                input = parseFloat(input);
            }
            var cuad;    
            function cuadrado(input) {
                cuad = input * input;
                // alert(`El cuadrado del número ingresado es ${cuad}.`)
                return cuad;
            }
            cuadrado(input);
            return cuad;

        },
        btn_ejercicio: 'practica1[6].ej_7()'
    },
    {
        enunciado: 'Una función que se denomine imprimirValores que dado un número por parámetro, imprima cual es el valor siguiente, el doble y el cuadrado. Usando las funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado.',
        ej_8: (input) => {
            if (input === undefined) 
            {
                var input = parseFloat(prompt("Ingrese un número para obtener el siguiente, el doble y para elevar al cuadrado."));
                while (isFinite(input) === false || isNaN(input) === true) {
                    input = prompt("Ingrese un número, reintente.");
                }
                input = parseFloat(input);
            }
            var resultados;
            function imprimir_val(input) {
                var sig = practica1[4].ej_5(input);
                var dob = practica1[5].ej_6(input);
                var cuad = practica1[6].ej_7(input);
                alert(`Resumen, del número ingresado su siguiente es ${sig}, su doble es ${dob} y su cuadrado es ${cuad}.`);
                resultados = [sig, dob, cuad];
                return resultados;
            }
            imprimir_val(input);
            return resultados;
        },
        btn_ejercicio: 'practica1[7].ej_8()'
    },
    {
        enunciado: 'Una función que se denomine imprimirElDobleDelSiguiente que dado un número por parámetro, imprima cual es el valor siguiente al el doble. Usando las funciones definidas en los puntos 5) , 6) : siguiente, el doble.',
        ej_9: (input) => {
            if (input === undefined) 
            {
                var input = parseFloat(prompt("Ingrese un número para obtener el doble de su siguiente."));
                while (isFinite(input) === false || isNaN(input) === true) {
                    input = prompt("Ingrese un número, reintente.");
                }
                input = parseFloat(input);
            }
            var resultados;
            function imprimir_el_doble_del_siguiente(input) {
                var sig = practica1[4].ej_5(input);
                var dob = practica1[5].ej_6(sig);
                alert(`Resumen, del número ingresado su siguiente es ${sig}, el doble de su siguiente es ${dob}.`);
                resultados = [sig, dob];
                return resultados;
            }
            imprimir_el_doble_del_siguiente(input);
            return resultados;
        },
        btn_ejercicio: 'practica1[8].ej_9()'
    },
    {
        enunciado: 'Una función que se denomine imprimirElDobleDelSiguienteAlCuadrado que dado un número por parámetro, imprima cual es el valor siguiente al el doble. Usando las funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado.',
        ej_10: (input) => {
            if (input === undefined) 
            {
                var input = parseFloat(prompt("Ingrese un número para obtener el doble de su siguiente."));
                while (isFinite(input) === false || isNaN(input) === true) {
                    input = prompt("Ingrese un número, reintente.");
                }
                input = parseFloat(input);
            }
            var resultados;
            function imprimir_el_cuadrado_del_doble_del_siguiente(input) {
                var sig = practica1[4].ej_5(input);
                var dob = practica1[5].ej_6(sig);
                var cuad = practica1[6].ej_7(dob);
                alert(`Resumen, del número ingresado su siguiente es ${sig}, el doble de su siguiente es ${dob} y el cuadrado del doble de su siguiente es ${cuad}.`);
                resultados = [sig, dob, cuad];
                return resultados;
            }
            imprimir_el_cuadrado_del_doble_del_siguiente(input);
            return resultados;
        },
        btn_ejercicio: 'practica1[9].ej_10()'
    },
    {
        enunciado: 'una función que dado la longitud de un lado de un cuadrado devuelva el perímetro.',
        ej_11: (input) => {
            if (input === undefined) 
            {
                var input = parseFloat(prompt("Ingrese la longitud de un lado del cuadrado para obtener el perímetro."));
                while (isFinite(input) === false || isNaN(input) === true) {
                    input = prompt("Ingrese un número, reintente.");
                }
                input = parseFloat(input);
            }
            var resultados;
            function perimetro_cuadrado(input) {
                var perimetro = input * 4;
                alert(`Resumen, el perímetro del cuadrado es ${perimetro}.`);
                resultados = perimetro;
                return resultados;
            }
            perimetro_cuadrado(input);
            return resultados;
        },
        btn_ejercicio: 'practica1[10].ej_11()'
    },
    {
        enunciado: 'una función que dado la longitud de un lado de un cuadrado devuelva la superficie.',
        ej_12: (input) => {
            if (input === undefined) 
            {
                var input = parseFloat(prompt("Ingrese la longitud de un lado del cuadrado para obtener su superficie."));
                while (isFinite(input) === false || isNaN(input) === true) {
                    input = prompt("Ingrese un número, reintente.");
                }
                input = parseFloat(input);
            }
            var resultados;
            function superficie_cuadrado(input) {
                var superficie = input * input;
                alert(`Resumen, la superficie del cuadrado es ${superficie}.`);
                resultados = superficie;
                return resultados;
            }
            superficie_cuadrado(input);
            return resultados;
        },
        btn_ejercicio: 'practica1[11].ej_12()'
    },
    {
        enunciado: 'una función que dado el radio de una círculo devuelva la circunferencia ( perimetro del circulo).',
        ej_13: (input) => {
            if (input === undefined) 
            {
                var input = parseFloat(prompt("Ingrese el radio del circulo para obtener la longitud de su circunferencia."));
                while (isFinite(input) === false || isNaN(input) === true) {
                    input = prompt("Ingrese un número, reintente.");
                }
                input = parseFloat(input);
            }
            var resultados;
            function long_circunf_circulo(input) {
                var long_circunf = parseFloat(2 * Math.PI * input).toFixed(2);
                alert(`Resumen, la longitud de la circunferencia de este círculo es ${long_circunf}.`);
                resultados = long_circunf;
                return resultados;
            }
            long_circunf_circulo(input);
            return resultados;
        },
        btn_ejercicio: 'practica1[12].ej_13()'
    },
    {
        enunciado: 'una función que dado el radio de una círculo devuelva el area del circulo.',
        ej_14: (input) => {
            if (input === undefined) 
            {
                var input = parseFloat(prompt("Ingrese el radio del circulo para obtener su superficie."));
                while (isFinite(input) === false || isNaN(input) === true) {
                    input = prompt("Ingrese un número, reintente.");
                }
                input = parseFloat(input);
            }
            var resultados;
            function superficie_circulo(input) {
                var superficie = parseFloat(Math.PI * input * input).toFixed(2);
                alert(`Resumen, la superficie de este círculo es ${superficie}.`);
                resultados = superficie;
                return resultados;
            }
            superficie_circulo(input);
            return resultados;
        },
        btn_ejercicio: 'practica1[13].ej_14()'
    },
    {
        enunciado: 'una función que dado un número de mes y me devuelva la cantidad de días de ese mes(suponiendo que no es un año bisiesto).',
        ej_15: (input) => {
            if (input === undefined) 
            {
                var input = parseInt(prompt("Ingrese el número de mes para obtener su cantidad de días."));
                while (isFinite(input) === false || isNaN(input) === true) {
                    input = prompt("Ingrese un número, reintente.");
                }
                input = parseInt(input);
            }
            var resultados;
            function cant_dias(input) {
                var diasmes = (new Date(2020, input, 0)).getDate();
                alert(`El mes ingresado tiene ${diasmes} días.`);
                resultados = diasmes;
                return resultados;
            }
            cant_dias(input);
            return resultados;
        },
        btn_ejercicio: 'practica1[14].ej_15()'
    },
    {
        enunciado: 'Una función que reciba como parámetro un año y diga si ese año es bisiesto (googlear cuando un año es bisiesto).',
        ej_16: (input) => {
            if (input === undefined) 
            {
                var input = parseInt(prompt("Ingrese el número de año para saber si es bisiesto."));
                while (isFinite(input) === false || isNaN(input) === true) {
                    input = prompt("Ingrese un número, reintente.");
                }
                input = parseInt(input);
            }
            var resultados;
            function es_bisiesto(input) {
                var bisiesto = ((input % 4 === 0) && (input % 100 !== 0) || (input % 400 === 0));
                alert(`El año ingresado ${bisiesto ? 'es' : 'no es'} bisiesto.`);
                resultados = bisiesto;
                return resultados;
            }
            es_bisiesto(input);
            return resultados;
        },
        btn_ejercicio: 'practica1[15].ej_16()'
    },
    {
        enunciado: 'una función que reciba el dia, mes y año y me devuelva la cantidad de días de ese mes.',
        ej_17: () => {
            var input = [];
            var prompt_req = ['dia', 'mes', 'año'];
            for (let i = 0; i < 3; i++) {            
                input[i] = parseInt(prompt(`Ingrese el ${prompt_req[i]}`));
                while (isFinite(input[i]) === false || isNaN(input[i]) === true) {
                    input[i] = prompt(`Ingrese el ${prompt_req[i]}, en formato número, reintente.`);
                }
                input[i] = parseInt(input[i]);
            }
            var resultados;
            function cant_dias_mes(input) {
                var diasmes = (new Date(input[2], input[1], 0)).getDate();
                alert(`El mes de la fecha ingresada tiene ${diasmes} días.`);
                resultados = diasmes;
                return resultados;
            }
            cant_dias_mes(input);
            return resultados;
        },
        btn_ejercicio: 'practica1[16].ej_17()'
    },
    {
        enunciado: 'una función que reciba dia, mes y año y devuelva el dia siguiente.',
        ej_18: () => {
            var input = [];
            var prompt_req = ['dia', 'mes', 'año'];
            for (let i = 0; i < 3; i++) {            
                input[i] = parseInt(prompt(`Ingrese el ${prompt_req[i]}`));
                while (isFinite(input[i]) === false || isNaN(input[i]) === true) {
                    input[i] = prompt(`Ingrese el ${prompt_req[i]}, en formato número, reintente.`);
                }
                input[i] = parseInt(input[i]);
            }
            
            function dia_sig(input) {
                var diasig = new Date(input[2], input[1] - 1, input[0]);
                diasig.setDate(diasig.getDate() + 1);
                alert(`El día siguiente a la fecha ingresada es ${diasig.getDate() + "/" + (diasig.getMonth() + 1) + "/" + diasig.getFullYear()}`);
            }
            dia_sig(input);
        },
        btn_ejercicio: 'practica1[17].ej_18()'
    },
    {
        enunciado: 'una función que reciba dia, mes y año y devuelva el dia anterior.',
        ej_19: () => {
            var input = [];
            var prompt_req = ['dia', 'mes', 'año'];
            for (let i = 0; i < 3; i++) {            
                input[i] = parseInt(prompt(`Ingrese el ${prompt_req[i]}`));
                while (isFinite(input[i]) === false || isNaN(input[i]) === true) {
                    input[i] = prompt(`Ingrese el ${prompt_req[i]}, en formato número, reintente.`);
                }
                input[i] = parseInt(input[i]);
            }
            
            function dia_ant(input) {
                var dia_ant = new Date(input[2], input[1] - 1, input[0]);
                dia_ant.setDate(dia_ant.getDate() - 1);
                alert(`El día anterior a la fecha ingresada es ${dia_ant.getDate() + "/" + (dia_ant.getMonth() + 1) + "/" + dia_ant.getFullYear()}`);
            }
            dia_ant(input);
        },
        btn_ejercicio: 'practica1[18].ej_19()'
    },
    {
        enunciado: 'una función que se llame ultimoDiaDelMes que reciba díia,mes y año y devuelva el último día del mes.',
        ej_20: () => {
            var input = [];
            var prompt_req = ['dia', 'mes', 'año'];
            for (let i = 0; i < 3; i++) {            
                input[i] = parseInt(prompt(`Ingrese el ${prompt_req[i]}`));
                while (isFinite(input[i]) === false || isNaN(input[i]) === true) {
                    input[i] = prompt(`Ingrese el ${prompt_req[i]}, en formato número, reintente.`);
                }
                input[i] = parseInt(input[i]);
            }
            var resultados;
            function ultimo_dia_del_mes(input) {
                var diasmes = (new Date(input[2], input[1], 0)).getDate();
                var dianombre = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
                var dianumero = (new Date(input[2], input[1], 0)).getDay();
                alert(`El último día del mes de la fecha ingresada es el día ${diasmes} y será un ${dianombre[dianumero]}.`);
                resultados = [diasmes, dianombre[dianumero]];
                return resultados;
            }
            ultimo_dia_del_mes(input);
            return console.log(resultados);
        },
        btn_ejercicio: 'practica1[19].ej_20()'
    },                                                                             
];
var practica2 = [
    {
        enunciado: 'cree un array con todas las edades de los estudiantes de su clase. Itere el array utilizando un bucle while y luego imprima todas las edades en la consola.',
        ej_1: () => {
            var edades = [25,22,35,40,55,19,26,32];
            var i = 0;
                while (i < edades.length) {
                    console.log(edades[i]);
                    i++;
                }
            },
        btn_ejercicio: 'practica2[0].ej_1()'
    },
    {
        enunciado: 'Al ejercicio 1 agregue un condicional dentro del ciclo while para imprimir solo números pares. Cambie el ciclo para usar un ciclo "for" en lugar de un ciclo "while".',
        ej_2: () => {
            var edades = [25,22,35,40,55,19,26,32];
                for (let i = 0; i < edades.length; i++) 
                {
                    if (edades[i] % 2 === 0) 
                    {
                        console.log(edades[i]);
                    }
                }
            },
        btn_ejercicio: 'practica2[1].ej_2()'
    },
    {
        enunciado: 'escriba una función que reciba un array como parámetro e imprima el número más bajo de la array en la consola.',
        ej_3: (input) => {
            if (input === undefined | Array.isArray(input) === false) 
            {
                var prompt_req = ['primer', 'segundo', 'tercer', 'cuarto', 'quinto'];
                var input = []
                for (let i = 0; i < 5; i++) {            
                    input[i] = parseInt(prompt(`Ingrese 5 números para armar un array. Ahora ingrese el ${prompt_req[i]} valor:`));
                    while (isFinite(input[i]) === false || isNaN(input[i]) === true) {
                        input[i] = prompt(`Reintente. Ingrese 5 números para armar un array. Ahora ingrese el ${prompt_req[i]} valor:`);
                    }
                    input[i] = parseInt(input[i]);
                }
            }
            var masbajo;
            for (let i = 0; i < input.length; i++) 
            {
                if (i === 0) 
                {
                    masbajo = input[i];
                } 
                else if (input[i] < masbajo) 
                {
                    masbajo = input[i];
                }
            }
            console.log(masbajo);
            },
        btn_ejercicio: 'practica2[2].ej_3()'
    },
    {
        enunciado: 'escriba una función que reciba un array como parámetro e imprima el número más grande de la array en la consola.',
        ej_4: (input) => {
            if (input === undefined | Array.isArray(input) === false) 
            {
                var prompt_req = ['primer', 'segundo', 'tercer', 'cuarto', 'quinto'];
                var input = []
                for (let i = 0; i < 5; i++) {            
                    input[i] = parseInt(prompt(`Ingrese 5 números para armar un array. Ahora ingrese el ${prompt_req[i]} valor:`));
                    while (isFinite(input[i]) === false || isNaN(input[i]) === true) {
                        input[i] = prompt(`Reintente. Ingrese 5 números para armar un array. Ahora ingrese el ${prompt_req[i]} valor:`);
                    }
                    input[i] = parseInt(input[i]);
                }
            }
            var masalto;
            for (let i = 0; i < input.length; i++) 
            {
                if (i === 0) 
                {
                    masalto = input[i];
                } 
                else if (input[i] > masalto) 
                {
                    masalto = input[i];
                }
            }
            console.log(masalto);
            },
        btn_ejercicio: 'practica2[3].ej_4()'
    },
    {
        enunciado: 'Escriba una función que reciba dos parámetros, una array y un índice. La función imprimirá el valor del elemento en la posición dada (basado en uno) en la consola. Por ejemplo, dada la siguiente array e índice, la función imprimirá "6". var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;',
        ej_5: (inputarray, inputindex) => {
            if (inputarray === undefined | Array.isArray(inputarray) === false) 
            {
                var prompt_req = ['primer', 'segundo', 'tercer', 'cuarto', 'quinto'];
                var inputarray = []
                for (let i = 0; i < 5; i++) {            
                    inputarray[i] = parseInt(prompt(`Ingrese 5 números para armar un array. Ahora ingrese el ${prompt_req[i]} valor:`));
                    while (isFinite(inputarray[i]) === false || isNaN(inputarray[i]) === true) {
                        inputarray[i] = prompt(`Reintente. Ingrese 5 números para armar un array. Ahora ingrese el ${prompt_req[i]} valor:`);
                    }
                    inputarray[i] = parseInt(inputarray[i]);
                }
            }
            if (inputindex === undefined) 
            {           
                inputindex = parseInt(prompt(`Ingrese un número del elemento a localizar en el array.`));
                while (isFinite(inputindex) === false || isNaN(inputindex) === true) {
                    inputindex = prompt(`Reintente. Ingrese un número del elemento a localizar en el array.`);
                }
                inputindex = parseInt(inputindex);
            }
            console.log(inputarray[inputindex]);
            },
        btn_ejercicio: 'practica2[4].ej_5()'
    },
    {
        enunciado: 'Escriba una función que reciba una array y solo imprima los valores que se repiten. ● Por ejemplo, dada la siguiente array e índice, la función imprimirá "6,23,33,100". var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];.',
        ej_6: (input) => {
            if (input === undefined | Array.isArray(input) === false) 
            {
                var prompt_req = ['primer', 'segundo', 'tercer', 'cuarto', 'quinto'];
                var input = []
                for (let i = 0; i < 5; i++) {            
                    input[i] = parseInt(prompt(`Ingrese 5 números para armar un array. Ahora ingrese el ${prompt_req[i]} valor:`));
                    while (isFinite(input[i]) === false || isNaN(input[i]) === true) {
                        input[i] = prompt(`Reintente. Ingrese 5 números para armar un array. Ahora ingrese el ${prompt_req[i]} valor:`);
                    }
                    input[i] = parseInt(input[i]);
                }
            }
            var repetidos = [];
            for (let i = 0; i < input.length; i++) 
            {
                for (let j = 0; j < input.length - 1; j++) 
                {
                    if (i != j && (input[i] == input[j]) && (!repetidos.includes(input[i]))) {
                        repetidos.push(input[i]);
                    }
                }
            }
            console.log(repetidos);
            },
        btn_ejercicio: 'practica2[5].ej_6()'
    },
    {
        enunciado: 'escriba una función de JavaScript simple para unir todos los elementos de la siguiente array en una cadena. myColor = ["Red", "Green", "White", "Black"]; Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco", "Negro".',
        ej_7: () => {
            var mi_color = ['Rojo', 'Verde', 'Blanco', 'Negro'];
            var mi_color_str = '';
            for (let i = 0; i < mi_color.length; i++) 
            {
                if (mi_color_str === '') 
                {
                    mi_color_str = `"${mi_color[i]}"`
                } else {
                mi_color_str = `${mi_color_str}, "${mi_color[i]}"`
                }
            }
            console.log(mi_color_str);
            },
        btn_ejercicio: 'practica2[6].ej_7()'
    },
    {
        enunciado: 'escriba una función de JavaScript que invierta un número. Por ejemplo, si x = 32443, la salida debería ser 34423.',
        ej_8: () => {
            var input = parseInt(prompt(`Ingrese un número para invertir.`));
            while (isFinite(input) === false || isNaN(input) === true) {
                input = prompt(`Reintente. Ingrese un número para invertir.`);
            }
            input = parseInt(input);
            resultado = input.toString();
            resultado = parseInt(resultado.split("").reverse().join(""));
            console.log(resultado);
            return resultado;
            },
        btn_ejercicio: 'practica2[7].ej_8()'
    },
    {
        enunciado: 'escriba una función de JavaScript que devuelva una cadena en orden alfabético. Por ejemplo, si x = "webmaster", la salida debería ser "abeemrstw". La puntuación y los números no se pasan en la cadena.',
        ej_9: () => {
            var input = prompt(`Ingrese una cadena de texto para ordenarla en orden alfabético.`);
            while (input === undefined || input === null) {
                input = prompt(`Reintente. Ingrese una cadena de texto.`);
            }
            resultado = input.split(" ");
            if (resultado.length === 1) {
                resultado[0] = [...resultado[0]].sort((a, b) => a.localeCompare(b)).join("");
            } else {
                for (let i = 0; i < resultado.length; i++) 
                {
                    resultado[i] = [...resultado[i]].sort((a, b) => a.localeCompare(b)).join("");
                }
            }
            resultado = resultado.join(" ");
            console.log(resultado);
            return resultado;
            },
        btn_ejercicio: 'practica2[8].ej_9()'
    },
    {
        enunciado: 'escriba una función de JavaScript que convierta la primera letra de cada palabra a mayúsculas. Por ejemplo, si x = "prince of persia", la salida debería ser "Prince Of Persia".',
        ej_10: () => {
            var input = prompt(`Ingrese una cadena de texto para colocar en mayúscula la primera letra de cada palabra.`);
            while (input === undefined || input === null) {
                input = prompt(`Reintente. Ingrese una cadena de texto para colocar en mayúscula la primera letra de cada palabra.`);
            }
            resultado = input.split(" ");
            for (let i = 0; i < resultado.length; i++) {
                resultado[i] = resultado[i].replace(resultado[i][0], resultado[i][0].toUpperCase()) 
            }
            resultado = resultado.join(" ");
            console.log(resultado);
            return resultado;
            },
        btn_ejercicio: 'practica2[9].ej_10()'
    },
    {
        enunciado: 'escriba una función de JavaScript que busque la palabra más larga de una frase. Por ejemplo, si x = "Tutorial de desarrollo web", el resultado debería ser "Desarrollo".',
        ej_11: () => {
            var input = prompt(`Ingrese una cadena de texto para buscar la palabra más larga dentro de ella.`);
            while (input === undefined || input === null) {
                input = prompt(`Reintente. Ingrese una cadena de texto para colocar en mayúscula la primera letra de cada palabra.`);
            }
            input = input.split(" ");
            let maslarga = "";
            for (let i = 0; i < input.length; i++) {
                if (i === 0) {
                    maslarga = input[i];
                } else if (input[i].length > maslarga.length) {
                    maslarga = input[i];
                }
            }
            resultado = maslarga;
            console.log(resultado);
            return resultado;
            },
        btn_ejercicio: 'practica2[10].ej_11()'
    },                                                  
];

function rellenar_ejercicios() {
    var cantidad_ejercicios = parseInt(document.getElementById("dropdownPractica").value);
    var drop = document.getElementById("dropdownEjercicios");
    var cant_borrar = drop.length - 1;
    drop.innerHTML = '';
    for (let i = 0; i < cantidad_ejercicios; i++) {
        var item = document.createElement("option");
        item.value = i + 1;
        item.textContent = `Ejercicio ${i + 1}`;
        drop.appendChild(item);
    }
    rellenar_contenido();
}

function rellenar_contenido() {
    var fuente = null;
    var practica = document.getElementById("dropdownPractica");
    var nombre_practica = practica.options[practica.selectedIndex].innerText; 
    switch (nombre_practica) {
        case "Ejercicios Adicionales":
            fuente = adicionales;
            break;
        case "Actividad Práctica 1":
            fuente = practica1;
            break;
        case "Actividad Práctica 2":
            fuente = practica2;
            break;                    
        default:
            fuente = adicionales;
            break;
    }
    var data = parseInt(document.getElementById("dropdownEjercicios").value);
        document.getElementById('enunciado').textContent = fuente[data - 1].enunciado;
        document.getElementById('codigo-ejercicio').textContent = fuente[data - 1][`ej_${data}`];
        console.log(fuente[data - 1].btn_ejercicio);
        document.getElementById('btn-ejercicio').setAttribute('onclick', fuente[data - 1].btn_ejercicio);
        document.getElementById('btn-ejercicio').textContent = `Ejercicio ${data}`;
}


