'use strict';
/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    str = str.trim();
    if (str !== '') {
        const arr = str.trim().split(' ');
        const newArr = [];
        arr.forEach(item => {
            let newItem = item[0].toUpperCase() + item.slice(1);
            return newArr.push(newItem);
        });
        return newArr.join(' ');
    }
    return str === '' ? '' : str.trim() !== '' ? str.trim().replace(/^ +| +$|( ) +/g, "$1").split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ') : '';
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"