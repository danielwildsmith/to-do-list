const taskInput = document.querySelector('#task-input');
const taskButton = document.querySelector('#task-add-button');
const taskList = document.querySelector('.task-list');

const completeTaskBtn = document.querySelector('.complete-task-btn');

taskButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);


function addTask(event) {
    event.preventDefault();
    
    if(taskInput.value == '') {
        alert('Input a task!');
        return;
    }
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-task-btn');
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    taskDiv.appendChild(completeButton);

    const taskName = document.createElement('li');
    taskName.classList.add('task-name');
    taskName.innerText = taskInput.value;
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

    //clear input box
    taskInput.value = '';
}

function deleteTask(event) {
    const btn = event.target;

    if(btn.classList[0] === 'delete-task-btn') {
        const task = btn.parentElement;
        task.remove();
    }
}