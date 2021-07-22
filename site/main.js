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

// undo delete functionality
const deletedStack = [];

const undoButton = document.getElementById('undo-delete');

if (deletedStack.length === 0) undoButton.disabled = true;

undoButton.addEventListener('click', (e) => {
    const deletedTask = deletedStack.pop();
    deletedTask.style.display = 'revert';
    if (deletedStack.length === 0) undoButton.disabled = true;
})


const populateTasks = function() {
    tasksArr.forEach(task => {
        // create task div
        const taskElem = document.createElement('div');
        
        // set task text and attributes
        taskElem.innerText = task.text;
        taskElem.id = 'task'+task.id.toString();
        taskElem.className = 'task';
        taskElem.dataset.complete = task.completed;

        // add event listeners to task div
        taskElem.addEventListener('mouseover', () => taskElem.style.fontWeight = 'bold');
        taskElem.addEventListener('mouseout', () => taskElem.style.fontWeight = 'normal');

        // create complete and delete buttons
        const completeButton = document.createElement('button');
        completeButton.className = 'complete-button'
        completeButton.innerText = 'Complete';
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button'
        deleteButton.innerText = 'Delete';
        
        // add event listeners to complete and delete buttons
        completeButton.addEventListener('click', (e) => {
            if (!(taskElem.style.textDecoration === 'line-through red')) {
                taskElem.style.textDecoration = 'line-through red';
                taskElem.style.fontStyle = 'italic';
                completeButton.innerText = 'Undo Complete';
            } else {
                taskElem.style.textDecoration = 'revert';
                taskElem.style.fontStyle = 'revert';
                completeButton.innerText = 'Complete';
            }
        });
        deleteButton.addEventListener('click', (e) => {
            // taskElem.remove();
            taskElem.style.display = 'none';
            deletedStack.push(taskElem);
            undoButton.disabled = false;
        });

        // attach task div to parent (tasks) div
        document.getElementById('tasks').append(taskElem);

        // attach buttons to task
        taskElem.append(completeButton, deleteButton);
})};

populateTasks();
