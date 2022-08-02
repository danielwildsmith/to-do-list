const taskInput = document.querySelector('#task-input');
const taskButton = document.querySelector('#task-add-button');
const taskList = document.querySelector('task-list');

taskButton.addEventListener('click', addTask);


function addTask(event) {
    event.preventDefault();
    console.log('hello');
}