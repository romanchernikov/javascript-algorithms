/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    const arrStr1 = str1.toLowerCase().split('');
    const arrStr2 = str2.toLowerCase().split('');
    console.log(arrStr2);
    const a = arrStr1.every(item => {
        const b = arrStr2.some(latter => {
            return item === latter;
        });
        return b;
    });
    if (arrStr1.length === arrStr2.length) {
        return a;
    } else {
        return false;
    }
}
// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(anagram('finder', 'Friend')); // true
console.log(anagram('folowers', 'Flowerosos')); // false
console.log(anagram('hello', 'bye')); // false
console.log(anagram('hello', 'bysalkdhe')); // false