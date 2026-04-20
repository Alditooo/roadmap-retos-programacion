// ASIGNACIÓN
let num1 = 4
console.log(num1 += 2)
console.log(num1 -= 2)
console.log(num1 *= 2)
console.log(num1 /= 2)
console.log(num1 %= 2)
console.log(num1 **= 2)

// COMPARACIÓN
let num2 = 6
let num3 = 3
let num4 = "3"

console.log(num2 == num3) // false porque el numero es distinto
console.log(num4 == num3) // true porque el numero es igual "3", aunque sean ditinto tipo de variable

// ESTRICTO
console.log(num4 === num2) // false porque el numero es distinto y el tipo tambien
console.log(num4 === num3) // false porque el numero es igual pero el tipo es diferente

console.log(num2 != num3) // true porque los numeros son diferentes
console.log(num4 != num3) // false porque el valor de las variables es el mismo

console.log(num2 !== num3) // true porque los numeros son diferentes
console.log(num4 !== num3) // true porque solo los numeros son iguales, los tipos sin distintos

console.log(num2 > num3) // true porque num2 es mayor que num3: 6 > 3
console.log(num4 > num2) // false porque num2 es mayor que num4

console.log(num4 > num3) // false porque son iguales
console.log(num4 >= num3) // true porque son iguales

// ARITMÉTICOS
let suma = num2 + num3
console.log(suma)

let resta = num2 - num3
console.log(resta)

let mult = num2 * num3
console.log(mult)

let div = num2 / num3
console.log(div)

let modulo = num2 % num3
console.log(modulo)

let potencia = num2 ** num3
console.log(potencia)

let incr = num2++
console.log(incr)

let decr = num2--
console.log(decr)

for (i = 0; i < 5; i++) {
  console.log( num2++)
}
