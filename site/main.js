const tasksArr = [
{id: 0,
text: 'Complete CRUD app.',
completed: false
},
{id:1,
text: 'Add login functionality.',
completed: false
}
];

const populateTasks = function() {
    tasksArr.forEach(task => {
        const taskElem = document.createElement('div');
        taskElem.innerText = task.text;
        taskElem.id = 'task'+task.id.toString();
        taskElem.complete = task.completed;
        document.getElementById('tasks').append(taskElem);
})};

populateTasks();
