const taskInput = document.querySelector('#task-input');
const taskButton = document.querySelector('#task-add-button');
const taskList = document.querySelector('.task-list');

const completeTaskBtn = document.querySelector('.complete-task-btn');

document.addEventListener('DOMContentLoaded', displayLocalStorageTasks);
taskButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteCompleteEditTasks);


function addTask(event) {
    event.preventDefault();
    
    if(taskInput.value == '') {
        alert('Input a task!');
        return;
    }
    createTaskDOMElements(taskInput.value);
    saveTaskToLocalStorage(taskInput.value);

    //clear input box
    taskInput.value = '';
}

function deleteCompleteEditTasks(event) {
    const btn = event.target;

    const task = btn.parentElement;

    if(btn.classList[0] === 'delete-task-btn') {
        task.remove();
    } else if(btn.classList[0] === 'complete-task-btn') {
        task.classList.toggle('completed-task');
    } else if(btn.classList[0] === 'edit-task-btn') {
        const taskName = btn.previousSibling;
        
        if(taskName.getAttribute('readonly')) {
            taskName.removeAttribute('readonly');
        } else {
            taskName.setAttribute('readonly', 'readonly');
        }
    }
}

function saveTaskToLocalStorage(task) {
    let tasks;
    if(window.localStorage.length == 0) {
        tasks = [];
    } else {
        //local storage makes tasks a string, so I turn it back into an array to use push().
        tasks = localStorage.getItem('tasks').split(',');
    }

    tasks.push(task);
    localStorage.setItem('tasks', tasks);
}

function displayLocalStorageTasks() {
    if(window.localStorage.length == 0) {
        return;
    }

    let tasks = localStorage.getItem('tasks').split(',');

    for(let i = 0; i < tasks.length; i++) {
        createTaskDOMElements(tasks[i]);
    }
}

function createTaskDOMElements(input) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-task-btn');
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    taskDiv.appendChild(completeButton);

    const taskName = document.createElement('input');
    taskName.classList.add('task-name');
    taskName.type = 'text';
    taskName.value = input;
    taskName.setAttribute('readonly', 'readonly');
    taskDiv.appendChild(taskName);

    const editButton = document.createElement('button');
    editButton.classList.add('edit-task-btn');
    editButton.innerHTML = '<i class="fa-solid fa-wrench"></i>';
    taskDiv.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-task-btn');
    deleteButton.innerHTML = '<i class="fa-solid fa-x"></i>';
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);
}