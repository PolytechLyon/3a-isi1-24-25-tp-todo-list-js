
var taskInput = document.getElementById('new-todo-item-title');
var addTaskButton = document.getElementById('new-todo-item-add');
var taskList = document.getElementById('todo-list');


function addTask() {
    var taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Veuillez entrer une tâche.');
        return;
    }

    var taskItem = document.createElement('li');

    var taskContent = document.createElement('span');
    taskContent.textContent = taskText;


    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
    };


    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);


    taskList.appendChild(taskItem);



    taskInput.value = '';
}



addTaskButton.onclick = addTask;


taskInput.onkeypress = function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
};