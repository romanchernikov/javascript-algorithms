'use strict';
/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    if (num === 0) {
        return undefined;
    }
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    }
    if (num % 3 === 0) {
        return 'fizz';
    }
    if (num % 5 === 0) {
        return 'buzz';
    }

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));