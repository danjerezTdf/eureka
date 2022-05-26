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
