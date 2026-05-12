// Порядок приоритетов (от слабого к сильному):
// 1. Стили браузера по умолчанию — самые слабые
// 2. Внешний CSS файл (<link>) <link rel="stylesheet" href="style.css">
// 3. Внутренний CSS (<style> в head)
// <style>
//     p { color: red; }
// </style>
// 4. Инлайн стили (прямо в HTML теге) <p style="color: blue;">text</p>
// 5. DOM через JavaScript — перезаписывает всё element.style.color = "green"
// 6. !important — самый сильный (но использовать с осторожностью) p { color: red !important; }

// Внутри CSS есть ещё своя иерархия:
// (p, div) -> Слабый Класс
// (.class) -> Средний
// ID (#id) -> Сильный
// Инлайн -> Очень сильный
// !important -> Победитель


console.log("---- Homework: DOM and Style Priority ----")
// Topic
// DOM: document, element search, changing content and styles.
// Goal
// Practice working with DOM elements and understand which styles have higher priority:
// 1.
// styles written directly in an HTML tag;
// 2.
// styles written in a CSS file;
// 3.
// styles added through JavaScript.
// Task 1. Create HTML structure
// Task 2. Add styles directly in HTML
// Task 3. Add styles in CSS file
// Task 4. Find elements through JavaScript
// Task 5. Change styles through JavaScript
// Task 6. Change all paragraphs
// Task 7. Experiment with textContent and innerHTML
// Task 8. Add button behavior
// Task 9. Final experiment: who wins?
// For the same element, set color in three places.
// In HTML:
// <p id="outer" style="color: blue;">Outer
// paragraph</p>
// In CSS:
// #outer {
// color: brown;
// }
// In JavaScript:
// outer.style.color = "red";
// Answer:
// Which color is visible in the browser?
// Why?