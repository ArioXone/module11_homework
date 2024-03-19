/*

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.

На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

*/

function countElements(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;
  let otherCount = 0;

  arr.forEach((element) => {
    if (typeof element === "number") {
      if (element === 0) {
        zeroCount++;
      } else if (element % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    } else otherCount++;
  });

  console.log(`Чётных элементов: ${evenCount}`);
  console.log(`Нечётных элементов: ${oddCount}`);
  console.log(`Нулевых элементов: ${zeroCount}`);
  console.log(`Элементов, которые не являются числом: ${otherCount}`);
}

const array = [1, 2, 3, 0, null, "строка", 4, 5];
countElements(array);
