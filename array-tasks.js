/**  1. Создать массив Arr1 из 100 элементов и заполнить его числами 
* от 1 до 100 в случайном порядке. Каждое число должно встречаться 
* в массиве ровно один раз.
*     2. Создать массив arr2, который формируется из массива arr1 следующим образом:
* первым элементом нового массива становится последний элемент массива arr1, 
* вторым элементом - предпоследний, и т.д.
*     3. Создать третий  массив arr3, который формируется как разность 
* соответствующих элементов массива arr1 и arr2.
*     4. Для третьего массива посчитать среднее арифметическое значение всех элементов.
*/ 

//  Задание №1
let arr0 = Array.from({length: 100}, (v, k) => k+1);
let arr1 = arr0.sort(function(){
    return Math.random() - 0.5;
  });

  console.log(arr1)

// Задание №2

let arr2 = arr1.slice().reverse()

console.log(arr2)

// Задание №3

let arr3 = arr1.map(function changeValue(currentVallue, index) {
    return Math.abs(currentVallue - arr2[index]);
});

console.log(arr3)

// если учитывать отрицательные значения

let alt_arr3 = arr1.map(function changeValue(currentVallue, index) {
    return currentVallue - arr2[index];
});

console.log(alt_arr3)

// Задание №4

let arr4 = arr3.reduce((total, n) => total + n) / 100

console.log(arr4)

// если учитывать отрицательные значения

let alt_arr4 = alt_arr3.reduce((total, n) => total + n) / 100

console.log(alt_arr4)