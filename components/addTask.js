import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displaytasks } from './readtasks.js';

export const addTask = (evento) =>{
    evento.preventDefault(); 

    const list = document.querySelector('[data-list]'); 
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');

    if(value == '' || date == ''){
      return // si alguna de las dos condiciones se cumple, simplemente regresa y no se ejecuta lo de abajo
    }

    input.value = '';
    calendar.value = '';

    const complete = false;

    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
      };

      list.innerHTML = '';

    const taskList =JSON.parse(localStorage.getItem('tasks')) || [];//|| [] significa en caso que no exista localStorage darle un valor por defecto, en este caso un arreglo vacio, y JSON.parse convierte el string convertido en la variable en objeto json
    taskList.push(taskObj)
    localStorage.setItem('tasks', JSON.stringify(taskList));
    
    displaytasks()

  }

 export const createTask = ({value, dateFormat, complete, id}) => {
    const task = document.createElement('li');
        task.classList.add('card');
    const taskContent = document.createElement('div');
    console.log(complete);

    const check = checkComplete(id); 

    if (complete) {
      console.log('completada');
      console.log(check);
      check.classList.toggle('fas');
      check.classList.toggle('completeIcon');
      check.classList.toggle('far');
    };

    const titleTask = document.createElement('span');   
        titleTask.classList.add('task');
        titleTask.innerText = value
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);

    const dateElement = document.createElement('span');
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon(id));
  
    return task;
  };