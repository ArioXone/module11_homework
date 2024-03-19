/*

Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

*/

function checkSimpleNumber(num) {
  if (num < 1 || num > 1000) {
    console.log("Данные неверны. Введите число от 2 до 1000.");
    return;
  }

  if (num === 1) {
    console.log("1 не является ни простым, ни составным числом.");
    return;
  }

  let isSimple = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isSimple = false;
      break;
    }
  }

  if (isSimple === true) {
    console.log(`${num} - простое число.`);
  } else {
    console.log(`${num} - не является простым числом.`);
  }
}

checkSimpleNumber(17);
checkSimpleNumber(20);
checkSimpleNumber(0);
checkSimpleNumber(1);
checkSimpleNumber(1001);
