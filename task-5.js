const VALUE1 = 11;
let value2 = Math.floor(Math.random() * 100);
console.log(value2); //дополнительный вывод, чтобы проверить итоговый ответ
console.log(VALUE1 + value2 / 5 + 17);

/* Приоритет у операторов в JS:
1. Выполняется операция деление
2. Прибавление VALUE1ё
3. Прибавление 17
*/

console.log(Math.ceil(VALUE1 + value2 / 5 + 17));
//сделал округление вверх до целого числа
