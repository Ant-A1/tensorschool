/**
 * ДЗ-03 
 */

/**
 * 0. Исправь ошибки
 */
function initVal(str) {
    String.s = "String";
    let a = 10;
    let b = true;
    const c = "const";
}

/**
 * 1. Напиши функцию которая принимает на вход строку и преобразует ее в строку
 * @param {string} str 
 * 
 * @returns (number)
 */
function stringToNumber(str) {
    return parseInt(str);
}

/**
 * 2. Функции возвращают значение val, если оно существует, иначе def
 * @param {*} val
 * @param {*} def
 * 
 * @returns val или def
 */
function checkVal1 (val, def) {
    // 2.1. if ... else
    if (val) {
        return val;
      } else {
        return def;
      }
}

function checkVal2 (val, def) {
    // 2.2. тернарный оператор
    return val ? val : def;
}

function checkVal3 (val, def) {
    // 2.3. логическое или
    return val || def;
}

/**
 * 3. Фунция рендера
 * @param {string} title
 * @param {number} width
 * @param {number} height
 * @param {bool} isBox
 * 
 * @returns {string} строка формата 'Товар title, шириной width, высотой height, коробка' или '... не коробка'
 */
function renderItem (title, width, height, isBox) {
    return `Товар ${title || ''}, шириной ${width || 0}, высотой ${height || 0}, ` 
    + (isBox ? `коробка` : `не коробка`) 
}

/**
 * 4. Напиши функцию oddNum с помощью цикла for
 * @param {number} max максимальное число
 * 
 * @returns {string} только не четные 1 3 5 7 9 ...max 
 */
function oddNum (max) {
    let Summ = ''
    for (let i = 0; i <= max; i++) {
        if (i%2 != 0) {
            Summ += i;
        }
    }
    return Summ.split('').join(' ')
}

/**
 * 5. Напиши функцию factorial рекурсивно
 * @param {number} n максимальное число для вычисления
 * 
 * @returns {number} факториал 
 */
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

module.exports = {
    initVal,
    stringToNumber,
    renderItem,
    checkVal1,
    checkVal2,
    checkVal3,
    oddNum,
    factorial
}