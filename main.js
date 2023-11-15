/* numero 1 */
alert('Hello, world!')
/* numero 2 */
var n1 = Number(prompt('Digite o primeiro valor: '))
var n2 = Number(prompt('Digite o segundo valor: '))
alert(`A soma entre ${n1} e ${n2} é igual a ${n1 + n2}.`)
/* numero 3 */
var UserInput = prompt('Digite alguma coisa: ')
if (typeof UserInput == Number()) {
  alert('O que você digitou foi um número')
} else {
  alert('O que você digitou não é um número')
}
/* numero 4 */
var UserInput = prompt('Digite mais uma coisa: ')
if (typeof UserInput == String()) {
  alert("é uma string")
} else {
  alert("Não é uma string")
}
/* numero 5 */
var UserInput = prompt('Digite mais uma coisa: ')
if (typeof UserInput == Boolean()) {
  alert("É um booleano")
} else {
  alert("Não é um booleano")
}
/* numero 6 */
var n1 = Number(prompt('Digite o primeiro valor: '))
var n2 = Number(prompt('Digite o segundo valor: '))
alert(`A subtracao entre ${n1} e ${n2} é igual a ${n1 - n2}.`)
/* numero 7 */
var n1 = Number(prompt('Digite o primeiro valor: '))
var n2 = Number(prompt('Digite o segundo valor: '))
alert(`A multiplicacao entre ${n1} e ${n2} é igual a ${n1 * n2}.`)
/* numero 8 */
var n1 = Number(prompt('Digite o primeiro valor: '))
var n2 = Number(prompt('Digite o segundo valor: '))
alert(`A divisao entre ${n1} e ${n2} é igual a ${n1 / n2}.`)
/* numero 9 */
var UserInput = Number(prompt('Digite um numero: '))
if (UserInput%2 == 0) {
  alert("É um número par")
} else {
  alert("Não é um número par")
}
/* numero 10 */
var UserInput = Number(prompt('Digite um numero: '))
if (UserInput%2 == 0) {
  alert("Não é um número ímpar")
} else {
  alert("É um número ímpar")
}