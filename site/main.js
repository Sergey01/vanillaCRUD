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

        // add event listeners
        taskElem.addEventListener('onmouseover', e => e.target.style.fontWeight = 'bold');
        taskElem.addEventListener('onmouseout', e => e.target.style.fontWeight = 'normal');

        document.getElementById('tasks').append(taskElem);
})};

populateTasks();
