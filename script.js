// ----------------------------
// 1. CAPTURA DE DATOS
// ----------------------------
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");

// ----------------------------
// 2. PROCESAMIENTO DE TEXTO
// ----------------------------

// Primera letra del nombre
let inicialNombre = nombre.charAt(0).toLowerCase();

// Primeras 3 letras del apellido
let primerasApellido = apellido.slice(0, 3).toLowerCase();

// ----------------------------
// 3. NÚMERO ALEATORIO (10 - 99)
// ----------------------------
let numeroAleatorio = Math.floor(Math.random() * 90) + 10;

// ----------------------------
// 4. ENSAMBLAJE DEL USUARIO
// ----------------------------
let nombreUsuario = inicialNombre + primerasApellido + numeroAleatorio;

// ----------------------------
// 5. RESULTADO FINAL
// ----------------------------
console.log("Tu nuevo nombre de usuario es: " + nombreUsuario);
