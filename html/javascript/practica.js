var adicionales = [
    {
        enunciado: 'Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.',
        adicional_1: () => {
            alert('Hello World')
            },
        btn_ejercicio: 'adicionales[0].adicional_1()'
    },
    {
        enunciado: 'Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).',
        adicional_2: () => {
            document.write("Hello World");
            },
        btn_ejercicio: 'adicionales[1].adicional_2()'    
    },
    {
        enunciado: 'Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.',
        adicional_3: () => {
            document.write(`${3+5}`);
            },
        btn_ejercicio: 'adicionales[2].adicional_3()'    
    },
    {
        enunciado: 'Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”',
        adicional_4: () => {
            let nombre_usuario = prompt("Ingrese su nombre");
            document.write(`Hola ${nombre_usuario}`);
            },
        btn_ejercicio: 'adicionales[3].adicional_4()'    
    },
    {
        enunciado: 'Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.',
        adicional_5: () => {
            let num1 = parseInt(prompt("Ingrese un número"));
            let num2 = parseInt(prompt("Ingrese otro número"));
            document.write(`El resultado de sumar ambos números es ${num1 + num2}`);
            },
        btn_ejercicio: 'adicionales[4].adicional_5()'    
    },
    {
        enunciado: 'Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.',
        adicional_6: () => {
            let num1 = parseInt(prompt("Ingrese un número"));
            let num2 = parseInt(prompt("Ingrese otro número"));
                while (num2 == num1) {
                    num2 = parseInt(prompt("Ingrese un segundo valor distinto al primero"))
                }
            document.write(`El mayor de los números es ${num1>num2 ? num1 : num2}`);
            },
        btn_ejercicio: 'adicionales[5].adicional_6()'    
    },
    {
        enunciado: 'Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.',
        adicional_7: () => {
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
        btn_ejercicio: 'adicionales[6].adicional_7()'    
    },
    {
        enunciado: 'Escribe un programa que pida un número y diga si es divisible por 2.',
        adicional_8: () => {
            let num1 = parseInt(prompt("Ingrese un número"));
            document.write(`El número ${num1} ${num1 % 2 == 0 ? 'si' : 'no'} es divisible por 2.`);
            },
        btn_ejercicio: 'adicionales[7].adicional_8()'    
    },
    {
        enunciado: 'Escribe un programa que pida una frase y escriba cuantas veces aparece la letra "a".',
        adicional_9: () => {
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
        btn_ejercicio: 'adicionales[8].adicional_9()'    
    },
    {
        enunciado: 'Escribe un programa que pida una frase y escriba las vocales que aparecen.',
        adicional_10: () => {
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
        btn_ejercicio: 'adicionales[9].adicional_10()'    
    },
    {
        enunciado: 'Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales.',
        adicional_11: () => {
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
        btn_ejercicio: 'adicionales[10].adicional_11()'    
    },
    {
        enunciado: 'Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.',
        adicional_12: () => {
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
        btn_ejercicio: 'adicionales[11].adicional_12()'    
    },
    {
        enunciado: 'Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro).',
        adicional_13: () => {
            let num1 = parseInt(prompt("Ingrese un número para ver si es múltiplo de 5."));
            document.write(`El número ${num1} ingresado ${num1 % 5 == 0 ? 'si' : 'no'} es múltiplo de 5.`);
            },
        btn_ejercicio: 'adicionales[12].adicional_13()'    
    },
    {
        enunciado: 'Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible).',
        adicional_14: () => {
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
        btn_ejercicio: 'adicionales[13].adicional_14()'    
    },
    {
        enunciado: 'Escribir un programa que escriba en pantalla los divisores de un número dado.',
        adicional_15: () => {
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
        btn_ejercicio: 'adicionales[14].adicional_15()'    
    },
    {
        enunciado: 'Escribir un programa que escriba en pantalla los divisores comunes de dos números dados.',
        adicional_16: () => {
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
        btn_ejercicio: 'adicionales[15].adicional_16()'    
    },
    {
        enunciado: 'Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad).',
        adicional_17: () => {
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
        btn_ejercicio: 'adicionales[16].adicional_17()'    
    },
    {
        enunciado: 'Pide la edad y si es mayor de 18 años indica que ya puede conducir.',
        adicional_18: () => {
            let num1 = parseInt(prompt("Ingrese el número correspondiente a su edad."));
            if (num1 >= 18) {
                document.write(`Ya tienes 18 años o más, puedes conducir.`);
            } else {
                document.write(`Debes tener al menos 18 años para conducir.`);
            }
            },
        btn_ejercicio: 'adicionales[17].adicional_18()'    
    },
    {
        enunciado: 'Pide una nota (número). Muestra la calificación según la nota: ● 0-3: Muy deficiente ● 3-5: Insuficiente ● 5-6: Suficiente ● 6-7: Bien ● 7-9: Notable ● 9-10: Sobresaliente.',
        adicional_19: () => {
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
        btn_ejercicio: 'adicionales[18].adicional_19()'    
    },
    {
        enunciado: 'Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión.',
        adicional_20: () => {
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
        btn_ejercicio: 'adicionales[19].adicional_20()'    
    },
    {
        enunciado: 'Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.',
        adicional_21: () => {
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
        btn_ejercicio: 'adicionales[20].adicional_21()'    
    },
    {
        enunciado: 'Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad). El algoritmo para calcular la letra del dni es el siguiente : ● El número debe ser entre 0 y 99999999 ● Debemos calcular el resto de la división entera entre el número y el número 23. ● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) ● Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar. ● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».',
        adicional_22: () => {
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
        btn_ejercicio: 'adicionales[21].adicional_22()'    
    },
    {
        enunciado: 'Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 1 22 333 4444 55555 666666 …….',
        adicional_23: () => {
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
        btn_ejercicio: 'adicionales[22].adicional_23()'    
    },
    {
        enunciado: 'Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 6). 666666 55555 4444 333 22 1',
        adicional_24: () => {
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
        btn_ejercicio: 'adicionales[23].adicional_24()'    
    },
    {
        enunciado: 'Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50).',
        adicional_25: () => {
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
        btn_ejercicio: 'adicionales[24].adicional_25()'    
    },
    {
        enunciado: 'Un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo : 1 2 3 4 (Múltiplo de 4) 5- ————————————————————- 6 7 8 (Múltiplo de 4) 9 (Múltiplo de 9) 10.',
        adicional_26: () => {
            for (let i = 1; i < 501; i++) {
                document.write(`${i} ${i % 4 == 0 ? '(Múltiplo de 4)':''} ${i % 9 == 0 ? '(Múltiplo de 9)' : ''}`)
                document.write(`${i % 5 == 0 ? '<hr>':'<br>'}`)
            }                
        },
        btn_ejercicio: 'adicionales[25].adicional_26()'    
    },
];

var practica1 = [
    {
    enunciado: 'Practica 1.',
    adicional_1: () => {
        alert('Hello World')
        },
    btn_ejercicio: 'adicionales[0].adicional_1()'
    },
];
var practica2 = [
    {
        enunciado: 'Practica 2.',
        adicional_1: () => {
            alert('Hello World')
            },
        btn_ejercicio: 'adicionales[0].adicional_1()'
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
        document.getElementById('codigo-ejercicio').textContent = fuente[data - 1][`adicional_${data}`];
        document.getElementById('btn-ejercicio').setAttribute('onclick', fuente[data - 1].btn_ejercicio);
        document.getElementById('btn-ejercicio').textContent = `Ejercicio ${data}`;
}


