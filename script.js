
import { addTask } from "./components/addTask.js";
import { displaytasks } from "./components/readtasks.js";

const btn = document.querySelector('[data-form-btn]');

displaytasks();


//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
