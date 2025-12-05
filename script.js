// -----------------------------
// 1. Función para calcular propina
// -----------------------------
function calcularPropina(montoCuenta, porcentajePropina) {
  const propina = montoCuenta * (porcentajePropina / 100);
  return propina;
}

// -----------------------------
// 2. Captura de datos del usuario
// -----------------------------
let monto = parseFloat(prompt("Ingrese el monto total de la cuenta:"));
let porcentaje = parseFloat(prompt("Ingrese el porcentaje de propina que desea dejar:"));

// -----------------------------
// 3. Invocación de la función
// -----------------------------
let montoPropina = calcularPropina(monto, porcentaje);

// -----------------------------
// 4. Cálculo del total
// -----------------------------
let totalPagar = monto + montoPropina;

// -----------------------------
// 5. Mostrar resultados
// -----------------------------
console.log("--- Resumen de la Cuenta ---");
console.log(`Monto de la cuenta: $${monto}`);
console.log(`Propina (${porcentaje}%): $${montoPropina}`);
console.log(`Total a pagar: $${totalPagar}`);
