import { createTask } from "./addTask.js";

export const readtasks = ()=>{
    const list = document.querySelector('[data-list]');
    console.log(list);

    const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];

    tasksList.forEach((task) => {
        list.appendChild(createTask(task));
        console.log(task)
    });
};