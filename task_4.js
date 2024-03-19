/*

Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

*/

function printNumbers(num1, num2) {
  let currentNumber = num1;
  const interval = setInterval(function() {
      console.log(currentNumber);
      if (currentNumber === num2) {
          clearInterval(interval);
      } else {
          currentNumber++;
      }
  }, 1000);
}

printNumbers(-3, 10);

