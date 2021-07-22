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
        taskElem.className = 'task';
        taskElem.complete = task.completed;

        // add event listeners
        taskElem.addEventListener('mouseover', () => taskElem.style.fontWeight = 'bold');
        taskElem.addEventListener('mouseout', e => taskElem.style.fontWeight = 'normal');

        document.getElementById('tasks').append(taskElem);
})};

populateTasks();
