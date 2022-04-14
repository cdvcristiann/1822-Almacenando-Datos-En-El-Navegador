export default (date) => { //va a exportar una funcion
    const dateElement = document.createElement('li');
    dateElement.classList.add('date');
    dateElement.innerHTML = date;
    return dateElement;
}