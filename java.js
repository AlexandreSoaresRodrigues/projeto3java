
alert ('Hello World!') 

const numberOne = 95

const numberTwo = 55

const sum = numberOne + numberTwo

alert ('a soma desses numeros é:' + sum)

const isNumber = 200

if (typeof isNumber == 'number') {
  alert('É um número')
} else {
  alert('Não é um número')
}

const isString = 'Isso é uma string'

if (typeof isString == 'string') {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

const isBololean = true

if (typeof isBololean == 'boolean') {
    alert ('É um booleano')
} else {
    alert ('Não é um bololeano')
}

const sub = numberOne - numberTwo

alert( 'a subtração desses numeros é:' + sub)

const mult = numberOne * numberTwo

alert( 'a multiplicação desses numeros é:' + mult)

const div = numberOne / numberTwo

alert('a divisão desses numeros é:' + div)

const isEvenNumber = 15

if (isEvenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}

const isOddNumber = 95

if (isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}