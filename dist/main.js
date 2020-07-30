"use strict";

var preguntas = parseInt(prompt("\xBFCu\xE1l de las operaciones deseas realizar?\n1. Suma de 2 n\xFAmeros\n2. Promedio de 4 ex\xE1menes\n3. C\xE1lculo del \xE1rea de un rect\xE1ngulo\n4. C\xE1lculo del \xE1rea de un tri\xE1ngulo\n5. C\xE1lculo del \xE1rea de una circunferencia\n6. Sueldo semanal\n7. Convertir metros en pulgadas\n8. Convertir soles a d\xF3lares\n9. Edad de aplicantes a puestos de trabajo\n10. Conocer la persona de menor edad\n11. Bono por antiguedad\n12. Salario con aumento de 10% anual\n13. Total de alummnos aprobados y reprobados\n14. Cantidad de focos\n15. Edad para votar\n"));

switch (parseInt(preguntas)) {
  case 1:
    ejercicio1();
    break;
  case 2:
    ejercicio2();
    break;
  case 3:
    ejercicio3();
    break;
  case 4:
    ejercicio4();
    break;
  case 5:
    ejercicio5();
    break;
  case 6:
    ejercicio6();
    break;
  case 7:
    ejercicio7();
    break;
  case 8:
    ejercicio8();
    break;
  case 9:
    ejercicio9();
    break;
  case 10:
    ejercicio10();
    break;
  case 11:
    ejercicio11();
    break;
  case 12:
    ejercicio12();
    break;
  case 13:
    ejercicio13();
    break;
  case 14:
    ejercicio14();
    break;
  case 15:
    ejercicio15();
    break;
  default:
    alert("Escoge entre los números del 1 al 15");
    break;
}

// EJERCICIO 1
function ejercicio1() {
  var a = parseFloat(prompt("Ingresa primer número"));
  var b = parseFloat(prompt("Ingresa segundo número"));

  var sum = a + b;

  alert("La suma de los n\xFAmeros es igual a " + sum);
}
/*ejercicio1()*/

/*----------------------------------------------------------------*/

// EJERCICIO 2
function ejercicio2() {
  var a = parseFloat(prompt("Ingresa primer número"));
  var b = parseFloat(prompt("Ingresa segundo número"));
  var c = parseFloat(prompt("Ingresa tercer número"));
  var d = parseFloat(prompt("Ingresa cuarto número"));

  var average = (a + b + c + d) / 4;

  alert("El promedio de los n\xFAmeros es igual a " + average);
}
/*ejercicio2()*/

/*----------------------------------------------------------------*/

//EJERCICIO 3
function ejercicio3() {
  var a = parseFloat(prompt("Ingresa la base del rectángulo"));
  var b = parseFloat(prompt("Ingresa la altura del rectángulo"));

  var area = a * b;

  alert("El \xE1rea del rect\xE1ngulo es igual a " + area);
}
/*ejercicio3()*/

/*----------------------------------------------------------------*/

// EJERCICIO 4
function ejercicio4() {
  var a = parseFloat(prompt("Ingresa la base del triángulo"));
  var b = parseFloat(prompt("Ingresa la altura del triángulo"));

  var area = a * b / 2;

  alert("El \xE1rea del tri\xE1ngulo es igual a " + area);
}
/*ejercicio4()*/

/*----------------------------------------------------------------*/

//EJERCICIO 5
function ejercicio5() {
  var r = parseFloat(prompt("Ingresa el radio de la circunferencia"));

  var area = Math.pow(r, 2)*3.14;

  alert("El \xE1rea de la circunferencia es igual a " + area);
}
/*ejercicio5()*/

/*----------------------------------------------------------------*/

//EJERCICIO 6
function ejercicio6() {
  var a = parseFloat(prompt("Ingresa la cantidad de horas trabajadas en la semana"));
  var b = parseFloat(prompt("Ingresa el valor ($) por hora de trabajo"));

  var weeklySalary = void 0;
  weeklySalary = a * b;

  alert("El sueldo semanal corresponde a " + weeklySalary);
}
/*ejercicio6()*/

/*----------------------------------------------------------------*/

// EJERCICIO 7
function ejercicio7() {
  var a = parseFloat(prompt("Ingresa la cantidad de metros de tela"));

  var inches = void 0;
  inches = a * 0.0254;

  alert("La cantidad de " + a + " metros de tela equivale a " + inches + " pulgadas");
}
/*ejercicio7()*/

/*----------------------------------------------------------------*/

//EJERCICIO 8
function ejercicio8() {
  var a = parseFloat(prompt("Ingresa la cantidad de soles (s/)"));
  var b = parseFloat(prompt("Ingresa el tipo de cambio SBS de hoy"));

  var resultado = void 0;
  resultado = a / b;

  alert("Con " + a + " soles puedes adquirir " + resultado + " d\xF3lares");
}
/*ejercicio8()*/

/*----------------------------------------------------------------*/

//EJERCICIO 9
function ejercicio9() {
  var a = parseInt(prompt("Ingresa el año en que naciste"));

  var today = new Date();
  var currentYear = today.getFullYear();

  var resultado = void 0;
  resultado = currentYear - a;

  alert("La edad del postulante es " + resultado + " ");
}
/*ejercicio9()*/

/*----------------------------------------------------------------*/
//EJERCICIO 10
function trabajador(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

function ejercicio10() {
  trabajadores = [];
  var msg = alert("A continuacion ingrese los 3 trabajadores que desea saber el menor");
  var nombre1 = prompt("Nombre del primer trabajador");
  var edad1 = prompt("edad del primer trabajador");
  trabajadores.push(new trabajador(nombre1, parseInt(edad1)));
  var nombre2 = prompt("Nombre del segundo trabajador");
  var edad2 = prompt("edad del segundo trabajador");
  trabajadores.push(new trabajador(nombre2, parseInt(edad2)));
  var nombre3 = prompt("Nombre del tercero trabajador");
  var edad3 = prompt("edad del tercero trabajador");
  trabajadores.push(new trabajador(nombre3, parseInt(edad3)));

  if (trabajadores[0].edad < trabajadores[1].edad && trabajadores[0].edad < trabajadores[2].edad) {
    var menor = trabajadores[0].nombre;
    alert(menor + " es el menor ya que tiene " + trabajadores[0].edad + " a\xF1os");
  } else if (trabajadores[0].edad > trabajadores[1].edad && trabajadores[1].edad < trabajadores[2].edad) {
    var _menor = trabajadores[1].nombre;
    alert(_menor + " es el menor ya que tiene " + trabajadores[1].edad + " a\xF1os");
  } else {
    var _menor2 = trabajadores[2].nombre;
    alert(_menor2 + " es el menor ya que tiene " + trabajadores[2].edad + " a\xF1os");

    // alert(trabajadores);
    // // alert(` El trajador tiene ${resultado} años`);
  }
}
/*ejercicio10()*/

/*----------------------------------------------------------------*/

//EJERCICIO 11
function ejercicio11() {
  var a = parseInt(prompt("Ingresa la cantidad de años que vienes laborando"));

  switch (a) {
    case 1:
      alert("Tienes un bono de 100 d\xF3lares por tener " + a + " a\xF1os de trabajo");
      break;

    case 2:
      alert("Tienes un bono de 200 d\xF3lares por tener " + a + " a\xF1os de trabajo");
      break;

    case 3:
      alert("Tienes un bono de 300 d\xF3lares por tener " + a + " a\xF1os de trabajo");
      break;

    case 4:
      alert("Tienes un bono de 400 d\xF3lares por tener " + a + " a\xF1os de trabajo");
      break;

    case 5:
      alert("Tienes un bono de 500 d\xF3lares por tener " + a + " a\xF1os de trabajo");
      break;

    default:
      if (a > 5) {
        alert("Tienes un bono de 1000 d\xF3lares por tener " + a + " a\xF1os de trabajo");
      }
  }
}
/*ejercicio11()*/

/*----------------------------------------------------------------*/

//EJERCICIO 12

function ejercicio12() {
  var salario = 1500;
  alert("En el a\xF1o 1 tienes un salario de " + salario);

  for (var index = 1; index < 6; index++) {
    var acumulador = salario * 0.1;
    var nuevoSalario = salario + acumulador;

    salario = nuevoSalario;

    alert("En el a\xF1o " + (index + 1) + " tienes un salario de " + salario);
  }
}
/*ejercicio12()*/

/*----------------------------------------------------------------*/

//EJERCICIO 13
function ejercicio13() {
  var a = parseInt(prompt("Ingrese la cantidad de notas que ingresara para determinar cuantos aprobado y desaprobado hay en total :"));
  var cantAlumnos = [a];
  var aprobado = 0;
  var desaprobados = 0;

  for (var i = 0; i < a; i++) {
    cantAlumnos[i] = prompt("Nota numero " + (i + 1));
  }
  for (var j = 0; j < a; j++) {
    if (cantAlumnos[j] > 10) {
      aprobado++;
    } else {
      desaprobados++;
    }
  }

  alert("El numero de aprobados son : " + aprobado + " \nEl numero de desaprobados son: " + desaprobados);
}
/*ejercicio13()*/

/*----------------------------------------------------------------*/

//EJERCICIO 14
function ejercicio14() {
  var a = parseInt(prompt("Ingrese la cantidad de focos que contiene la caja para determinar los colores que hay :"));
  var focos = ['verde', 'blanco', 'rojo'];
  var rojo = 0;
  var blanco = 0;
  var verde = 0;

  // let aleatorio = Math.floor(Math.random() * 3);

  for (var i = 0; i < a; i++) {
    if (focos[Math.floor(Math.random() * 3)] === "verde") {
      verde++;
    } else if (focos[Math.floor(Math.random() * 3)] === "rojo") {
      rojo++;
    } else {
      blanco++;
    }
  }

  alert("Numero de focos de color verde: " + verde + " \nNumero de focos de color rojo: " + rojo + "\n Numero de focos de color blanco: " + blanco);
}
/*ejercicio14()*/

/*----------------------------------------------------------------*/

//EJERCICIO 15
function ejercicio15() {
  var a = parseInt(prompt("¿Cuál es tu edad?"));

  if (a >= 18) {
    alert("Debes acudir a votar en estas elecciones");
  } else {
    alert("Lo sentimos, no tienes la edad para votar, aún");
  }
}
/*ejercicio15()*/
/*----------------------------------------------------------------*/