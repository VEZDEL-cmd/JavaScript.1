

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

let field1 = "Hello";
let field2 = "World";

if (field1 !== "" && field2 !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}





let num1 = 6;
let num2 = 5;

let sum = num1 + num2;

if (sum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}






let text = "Я вивчаю JavaScript";

if (text.includes("JavaScript")) {
  console.log("Текст містить слово JS");
} else {
  console.log("Текст не містить слово JS");
}





let number = 15;

if (number > 10 && number < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}







let name = "Bohdan";
let email = "vezdelb@gmail.com";
let password = "123456";

if (
  name.length >= 3 &&
  email.includes("@") &&
  email.includes(".") &&
  password.length >= 6
) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}


