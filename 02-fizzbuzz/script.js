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
    for (let j = 1; j <= num; j++) {
        let string = '';
        if (j % 3 == 0) {
            string += 'fizz';
        }
        if (j % 5 == 0) {
            string += 'buzz';
        }
        console.log(string ? string : j);
    }
}
console.log(fizzBuzz(15));