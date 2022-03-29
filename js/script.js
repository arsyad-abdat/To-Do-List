// Step 1: Find Element
let addTaskButton = document.getElementById("add-task")
let newTaskInput = document.getElementById("task-input")

// Step 2: Write a function to implement the behavioru

function onAddTaskClicked(event) {
    let taskName = newTaskInput.ariaValueMax;
    newTaskInput.value = "";

    //log it to console
    console.log(taskName)
}

// Step 3: Link element, function and event
// Add event listener, for when they click 
addTaskButton.addEventListener('click',onAddTaskClicked)