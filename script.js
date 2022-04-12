import { addTask } from "./components/addTask.js";
import { readtasks } from "./components/readtasks.js";

const btn = document.querySelector('[data-form-btn]');

readtasks();


//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
