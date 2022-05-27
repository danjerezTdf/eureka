/* Eureka
• Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es la
palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa */

let claveGuardada: string = "eureka";
let contador: number = 0;
let claveIngresada: string | null = String(prompt(`Ingreser clave:`));

while (contador < 2 && claveIngresada !== claveGuardada) {
  contador++;
  claveIngresada = String(prompt(`Ingreser nuevamente la clave:`));
}
if (claveIngresada === claveGuardada) {
  console.log(`ingreso Correcto`);
} else {
  console.log(`Ustede supero el numero de intentos`);
}
