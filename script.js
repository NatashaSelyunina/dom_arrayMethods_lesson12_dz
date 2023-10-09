const form = document.getElementById('form')
const toDoList = document.getElementById('toDoList')
let textTask;

const tasks = [];

const clearInputs = function(event) {
    event.target.task.value = "";
    event.target.date.value = "";
}

const markExecuted = function(event) {
    const clickTask = event.target
    if (clickTask.classList.contains('task')) {
        clickTask.classList.toggle('executedTask')
    }
}

form.addEventListener("submit", event => {
    event.preventDefault();
    const task = {
        task: event.target.task.value,
        date: event.target.date.value,
    };
    tasks.push(task);

    textTask = document.createElement('p');
    textTask.innerText = `${task.task} - дата исполнения ${task.date}`;
    toDoList.append(textTask)
    textTask.classList.add('task')
    clearInputs(event)
});

toDoList.addEventListener('click', markExecuted)
