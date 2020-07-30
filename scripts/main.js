let preguntas = parseInt(prompt(`¿Cuál de las operaciones deseas realizar?
1. Suma de 2 números
2. Promedio de 4 exámenes
3. Cálculo del área de un rectángulo
4. Cálculo del área de un triángulo
5. Cálculo del área de una circunferencia
6. Sueldo semanal
7. Convertir metros en pulgadas
8. Convertir soles a dólares
9. Edad de aplicantes a puestos de trabajo
10. Conocer la persona de menor edad
11. Bono por antiguedad
12. Salario con aumento de 10% anual
13. Total de alummnos aprobados y reprobados
14. Cantidad de focos
15. Edad para votar
`));

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
      alert("Escoge entre los números del 1 al 15")
      break;
}

// EJERCICIO 1
function ejercicio1 () {
  let a = parseFloat(prompt("Ingresa primer número"));
  let b = parseFloat(prompt("Ingresa segundo número"));

  let sum = a+b;

  alert(`La suma de los números es igual a ${sum}`);
}
/*ejercicio1()*/

/*----------------------------------------------------------------*/

// EJERCICIO 2
function ejercicio2 () {
  let a = parseFloat(prompt("Ingresa primer número"));
  let b = parseFloat(prompt("Ingresa segundo número"));
  let c = parseFloat(prompt("Ingresa tercer número"));
  let d = parseFloat(prompt("Ingresa cuarto número"));

  let average = (a+b+c+d)/4

  alert(`El promedio de los números es igual a ${average}`)
}
/*ejercicio2()*/

/*----------------------------------------------------------------*/

//EJERCICIO 3
function ejercicio3 () {
  let a = parseFloat(prompt("Ingresa la base del rectángulo"));
  let b = parseFloat(prompt("Ingresa la altura del rectángulo"));

  let area = (a*b)

  alert(`El área del rectángulo es igual a ${area}`)
}
/*ejercicio3()*/

/*----------------------------------------------------------------*/

// EJERCICIO 4
function ejercicio4 () {
  let a = parseFloat(prompt("Ingresa la base del triángulo"));
  let b = parseFloat(prompt("Ingresa la altura del triángulo"));

  let area = (a*b)/2

  alert(`El área del triángulo es igual a ${area}`)
}
/*ejercicio4()*/

/*----------------------------------------------------------------*/

//EJERCICIO 5
function ejercicio5 () {
  let r = parseFloat(prompt("Ingresa el radio de la circunferencia"));
  
  let area = Math.pow(r, 2)*3.14;

  alert(`El área de la circunferencia es igual a ${area}`)
}
/*ejercicio5()*/

/*----------------------------------------------------------------*/

//EJERCICIO 6
function ejercicio6 () {
  let a = parseFloat(prompt("Ingresa la cantidad de horas trabajadas en la semana"));
  let b = parseFloat(prompt("Ingresa el valor ($) por hora de trabajo"));
  
  let weeklySalary;
  weeklySalary = (a*b)

  alert(`El sueldo semanal corresponde a ${weeklySalary}`);
}
/*ejercicio6()*/

/*----------------------------------------------------------------*/

// EJERCICIO 7
function ejercicio7 () {
  let a = parseFloat(prompt("Ingresa la cantidad de metros de tela"));
  
  let inches;
  inches = (a*0.0254)

  alert(`La cantidad de ${a} metros de tela equivale a ${inches} pulgadas`);
}
/*ejercicio7()*/

/*----------------------------------------------------------------*/

//EJERCICIO 8
function ejercicio8 () {
  let a = parseFloat(prompt("Ingresa la cantidad de soles (s/)"));
  let b = parseFloat(prompt("Ingresa el tipo de cambio SBS de hoy")); 

  let resultado;
  resultado = (a/b)

  alert(`Con ${a} soles puedes adquirir ${resultado} dólares`);
}
/*ejercicio8()*/

/*----------------------------------------------------------------*/

//EJERCICIO 9
function ejercicio9 () {
  let a = parseInt(prompt("Ingresa el año en que naciste"));

  let today = new Date();
  let currentYear = today.getFullYear();
  
  let resultado;
  resultado = (currentYear-a)

  alert(`La edad del postulante es ${resultado} `);
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
  let msg = alert("A continuacion ingrese los 3 trabajadores que desea saber el menor");
  let nombre1 = prompt("Nombre del primer trabajador");
  let edad1 = prompt("edad del primer trabajador");
  trabajadores.push(new trabajador(nombre1, parseInt(edad1)));
  let nombre2 = prompt("Nombre del segundo trabajador");
  let edad2 = prompt("edad del segundo trabajador");
  trabajadores.push(new trabajador(nombre2, parseInt(edad2)));
  let nombre3 = prompt("Nombre del tercero trabajador");
  let edad3 = prompt("edad del tercero trabajador");
  trabajadores.push(new trabajador(nombre3, parseInt(edad3)));

  if (trabajadores[0].edad < trabajadores[1].edad && trabajadores[0].edad < trabajadores[2].edad) {
      const menor = trabajadores[0].nombre;
      alert(`${menor} es el menor ya que tiene ${trabajadores[0].edad} años`);
  } else if (trabajadores[0].edad > trabajadores[1].edad && trabajadores[1].edad < trabajadores[2].edad) {
      const menor = trabajadores[1].nombre;
      alert(`${menor} es el menor ya que tiene ${trabajadores[1].edad} años`);
  } else {
      const menor = trabajadores[2].nombre;
      alert(`${menor} es el menor ya que tiene ${trabajadores[2].edad} años`);

      // alert(trabajadores);
      // // alert(` El trajador tiene ${resultado} años`);
  }
}
/*ejercicio10()*/

/*----------------------------------------------------------------*/

//EJERCICIO 11
function ejercicio11 () {
  let a = parseInt(prompt("Ingresa la cantidad de años que vienes laborando"));

  switch(a) {
    case 1:
      alert(`Tienes un bono de 100 dólares por tener ${a} años de trabajo`);
      break;

    case 2:
      alert(`Tienes un bono de 200 dólares por tener ${a} años de trabajo`);
      break;

    case 3:
      alert(`Tienes un bono de 300 dólares por tener ${a} años de trabajo`);
      break;  
      
    case 4:
      alert(`Tienes un bono de 400 dólares por tener ${a} años de trabajo`);
      break;  
      
    case 5:
      alert(`Tienes un bono de 500 dólares por tener ${a} años de trabajo`);
      break;
    
    default:
      if (a>5) {
      alert(`Tienes un bono de 1000 dólares por tener ${a} años de trabajo`);        
      }
  }
}
/*ejercicio11()*/

/*----------------------------------------------------------------*/

//EJERCICIO 12

function ejercicio12(){
  let salario = 1500;
  alert(`En el año 1 tienes un salario de ${salario}`);   
 
  for (let index = 1; index<6; index++) {
    let acumulador = salario*0.1;
    let nuevoSalario = salario + acumulador;
    
    salario = nuevoSalario;
   
    alert(`En el año ${index+1} tienes un salario de ${salario}`);
  } 
}
/*ejercicio12()*/

/*----------------------------------------------------------------*/

//EJERCICIO 13
function ejercicio13() {
  let a = parseInt(prompt("Ingrese la cantidad de notas que ingresara para determinar cuantos aprobado y desaprobado hay en total :"));
  let cantAlumnos = [a];
  let aprobado = 0;
  let desaprobados = 0;

  for (let i = 0; i < a; i++) {
      cantAlumnos[i] = prompt(`Nota numero ${i+1}`);
  }
  for (let j = 0; j < a; j++) {
      if (cantAlumnos[j] > 10) {
          aprobado++;
      } else {
          desaprobados++;
      }
  }

  alert(`El numero de aprobados son : ${aprobado} \nEl numero de desaprobados son: ${desaprobados}`);
}
/*ejercicio13()*/

/*----------------------------------------------------------------*/

//EJERCICIO 14
function ejercicio14() {
  let a = parseInt(prompt("Ingrese la cantidad de focos que contiene la caja para determinar los colores que hay :"));
  let focos = ['verde', 'blanco', 'rojo'];
  let rojo = 0;
  let blanco = 0;
  let verde = 0;

  // let aleatorio = Math.floor(Math.random() * 3);

  for (let i = 0; i<a; i++) {
      if (focos[Math.floor(Math.random() * 3)] === "verde") {
          verde++;
      } else if (focos[Math.floor(Math.random() * 3)] === "rojo") {
          rojo++;
      } else {
          blanco++;
      }
  }

  alert(`Numero de focos de color verde: ${verde} \nNumero de focos de color rojo: ${rojo}\n Numero de focos de color blanco: ${blanco}`);
}
/*ejercicio14()*/

/*----------------------------------------------------------------*/

//EJERCICIO 15
function ejercicio15 () {
  let a = parseInt(prompt("¿Cuál es tu edad?"));

  if(a >= 18) {
    alert("Debes acudir a votar en estas elecciones");
  }
  else {
    alert("Lo sentimos, no tienes la edad para votar, aún");
  }

}
/*ejercicio15()*/
/*----------------------------------------------------------------*/

