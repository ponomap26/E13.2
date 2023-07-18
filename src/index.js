import './style.css';

// Импортируем функции из math.js
import { multiply, sum } from './math.js';

// Выводим сообщение на страницу
const message = document.createElement('div');
message.textContent = 'Hello, Constantin!';
document.body.appendChild(message);

// Вызываем функции из math.js и выводим результат в консоль
console.log(multiply(5));
console.log(sum(1, 2));