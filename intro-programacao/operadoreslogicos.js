/* =========================================
OPERADORES LÓGICOS

&& "E" As duas condições devem ser verdadeiras
para que a condição seja final seja verdadeira.

|| "OU" Uma das condições deve ser verdadeira 
para  que a condição final seja verdadeira.

! "NÃO" Nega a condição

============================================*/

console.log(5==5 && 6 == 6 ) // Cinco é igual a cinco "E" Seis é igual a Seis? True
console.log(5==5 && 6 != 6 ) // Cinco é igual a cinco "E" Seis é diferente a Seis? False

console.log(5!=5 || 6 == 6 ) // Cinco é diferente a cinco "OU" Seis é igual a Seis? True
console.log(5==5 || 6 != 6 ) // Cinco é igual a cinco "E" Seis é diferente a Seis? True

console.log( !(5>6)) // "NÃO" Cinco é maior que seis? True
console.log( !(5<6) ) // "NÃO" Cinco é menor que seis? False

/*==========================================================
OPERADORES ARITIMETICOS

* Multiplicação
/ Divisão
% Resto da divisão
+ Adição
- Subtração

============================================================*/

console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log(2 + 2) // 4
console.log(2 - 2) // 0