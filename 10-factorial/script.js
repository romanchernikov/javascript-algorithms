'use strict';
/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    if (n > 1) {
        const arr = [];
        for (let i = 0; i <= n; i++) {
            arr[i] = i;
        }
        console.log(arr);
        const res = arr.slice(2).reduce((previous, current) => previous * current);
        return res;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720