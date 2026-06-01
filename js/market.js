

// let result = 5 + 5 + '5';
// console.log(result); // "105"
// console.log(typeof result); // string


// let email = "example@gmail.com";

// console.log(email.includes("@")); // true
// console.log(email.length); // кількість символів


// let word1 = "My";
// let word2 = "name";
// let word3 = "is";

// let fullName = word1 + " " + word2 + " " + word3;
// fullName += " Bohdan";

// console.log(fullName); // My name is Bohdan


// let userName = "Vezhdel";
// let payment = 300.000;

// alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);





//  ================================================    2   ================================================

// let field1 = "Hello";
// let field2 = "World";

// if (field1 !== "" && field2 !== "") {
//   console.log("Обидва поля заповнені");
// } else {
//   console.log("Не всі поля заповнені");
// }





// let num1 = 6;
// let num2 = 5;

// let sum = num1 + num2;

// if (sum > 10) {
//   console.log("Сума більша за 10");
// } else {
//   console.log("Сума менша або дорівнює 10");
// }






// let text = "Я вивчаю JavaScript";

// if (text.includes("JavaScript")) {
//   console.log("Текст містить слово JS");
// } else {
//   console.log("Текст не містить слово JS");
// }





// let number = 15;

// if (number > 10 && number < 20) {
//   console.log("Число входить в діапазон від 10 до 20");
// } else {
//   console.log("Число не входить в діапазон від 10 до 20");
// }







// let name = "Bohdan";
// let email = "vezdelb@gmail.com";
// let password = "123456";

// if (
//   name.length >= 3 &&
//   email.includes("@") &&
//   email.includes(".") &&
//   password.length >= 6
// ) {
//   console.log("Перенаправлення на іншу сторінку");
// } else {
//   console.log("Помилка: неправильне заповнення");
// }


// ================================================ 3 ====================================================

// const drink = "Кава";
// const day = "понеділок";
// const month = 4;
// const color = "червоний";
// const num1 = 10;
// const num2 = 5;
// const operator = "/";

// // 1. Напій
// switch (drink) {
//   case "Кава":
//     console.log("Ви обрали каву");
//     break;
//   case "Чай":
//     console.log("Ви обрали чай");
//     break;
//   case "Сік":
//     console.log("Ви обрали сік");
//     break;
//   default:
//     console.log("Невідомий напій");
// }

// // 2. День тижня
// if (day === "субота" || day === "неділя") {
//   console.log("Вихідний день");
// } else {
//   console.log("Робочий день");
// }

// // 3. Пора року
// if (month >= 3 && month <= 5) {
//   console.log("Весна");
// } else if (month >= 6 && month <= 8) {
//   console.log("Літо");
// } else if (month >= 9 && month <= 11) {
//   console.log("Осінь");
// } else if (month === 12 || month === 1 || month === 2) {
//   console.log("Зима");
// } else {
//   console.log("Невірний місяць");
// }

// // 4. Колір
// if (color === "червоний") {
//   console.log("стоп");
// } else if (color === "зелений") {
//   console.log("йти");
// } else if (color === "жовтий") {
//   console.log("чекати");
// } else {
//   console.log("Невідомий колір");
// }

// // 5. Калькулятор
// switch (operator) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//     break;
//   case "*":
//     console.log(num1 * num2);
//     break;
//   case "/":
//     if (num2 === 0) {
//       console.log("Ділення на нуль неможливе");
//     } else {
//       console.log(num1 / num2);
//     }
//     break;
//   default:
//     console.log("Невідомий оператор");
// }




// ==================================================================   4  ==========================================================


// // 1.
// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// // 2.
// for (let j = 2; j <= 20; j++) {
//   if (j % 2 !== 0) continue;  
//   console.log(j);
// }

// // 3.
// const num = 7;

// for (let k = 1; k <= 10; k++) {
//   console.log(`${num} * ${k} = ${num * k}`);
// }

// // 4.
// const n = 8;

// for (let x = 1; x <= 20; x++) {
//   if (x >= n) break;
//   console.log(x);
// }

// // 5.
// let y = 1;

// while (y <= 20) {
//   if (y % 3 === 0) {
//     y++;
//     continue;
//   }
//   console.log(y);
//   y++;
// }




// ==================================================================  lesson  =================================================================
// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
//   }
// return sum
// }

// console.log(sumArray([1, 2, 3, 4]));




// ==================================================================   5  ==========================================================
// // 1.

// const numbers = [1, 2, 3];

// numbers[1] = 10;

// console.log(numbers);



// // 2.  

// const fruits = ["apple", "banana", "orange"];

// fruits.push("grape");

// console.log(fruits);



// // 3.  

// const nums = [5, 10, 15, 20];

// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
// }

// console.log(sum);



// // 4. 

// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }



// // 5.  
// const words = ["apple", "banana", "orange", "kiwi", "strawberry"];

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > 5) {
//     console.log(words[i]);
//   }
// }



// // 6. 

// const numbers2 = [5, 12, 45, 7, 89, 23, 1, 67, 34, 10];

// let max = numbers2[0];

// for (let i = 0; i < numbers2.length; i++) {
//   if (numbers2[i] > max) {
//     max = numbers2[i];
//   }
// }

// console.log(max);



// // 7.  

// const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers3.length; i++) {
//   if (numbers3[i] % 2 === 0) {
//     console.log(numbers3[i]);
//   }
// }


// ==================================================================   6  ==========================================================

// // 1.
// const friends1 = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string1 = '';

// for (let i = 0; i < friends1.length; i++) {
//   string1 += friends1[i];

//   if (i < friends1.length - 1) {
//     string1 += ', ';
//   }
// }

// console.log(string1);


// const friends2 = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// const string2 = friends2.join(', ');

// console.log(string2);




// // 2.

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// /// 3.
// const cardToRemove = 'Карточка-3';

// const removeIndex = cards.indexOf(cardToRemove);

// cards.splice(removeIndex, 1);

// console.log(cards);

// // 4.
// const cardToInsert = 'Карточка-6';

// cards.splice(cards.length, 0, cardToInsert);

// console.log(cards);

// // 5.
// const cardToUpdate = 'Карточка-4';

// const updateIndex = cards.indexOf(cardToUpdate);

// cards.splice(updateIndex, 1, 'Оновлена Карточка-4');

// console.log(cards);\




// ==================================================================   7  ==========================================================


// 1.
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);

// 2.
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  return words.length * pricePerWord;
}

console.log(calculateEngravingPrice('JavaScript це круто', 10));
// 3.
  function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord('Я вивчаю JavaScript'));

// 4.
function formatString(string) {
  if (string.length <= 40) {
    return string;
  }

  return string.slice(0, 40) + '...';
}

console.log(formatString('Це дуже довгий рядок який потрібно обрізати тому що він перевищує сорок символів'));


// 5.
function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();

  return (
    lowerCaseMessage.includes('spam') ||
    lowerCaseMessage.includes('sale')
  );
}

console.log(checkForSpam('Latest SALE today'));
console.log(checkForSpam('Hello friend'));

// 6.

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число');

  if (input === null) {
    break;
  }

  numbers.push(Number(input));
}

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(`Загальна сума чисел дорівнює ${total}`);

// 7.
const logins = ['Mango', 'Poly', 'Ajax'];

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }

  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін уже використовується!';
  }

  allLogins.push(login);

  return 'Логін успішно доданий!';
}

console.log(addLogin(logins, 'Bohdan'));
console.log(logins);
