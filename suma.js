// Solicitar al usuario dos números
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Verificar que los valores ingresados sean números válidos
if (!isNaN(num1) && !isNaN(num2)) {
    let suma = num1 + num2;
    console.log(`La suma de ${num1} y ${num2} es: ${suma}`);
} else {
    console.log("Por favor, ingrese valores numéricos válidos.");
}
