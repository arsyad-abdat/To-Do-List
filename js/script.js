// Step 1: Find Element
let addTaskButton = document.getElementById("add-task")
let newTaskInput = document.getElementById("task-input")
let todoListContainer = document.getElementById("todo-list") //go search webpage for thing with to do list tag

// Step 2: Write a function to implement the behavioru

function onAddTaskClicked(event) {
    let taskName = newTaskInput.value;
    newTaskInput.value = ""; //Wipe content

    //log it to console
    console.log(taskName)

    // When that event happens, read input, take input and put it into container. take the todo list container
    // then insert adjacent html
    todoListContainer.insertAdjacentHTML("afterbegin",taskName);

}

// Step 3: Link element, function and event
// Add event listener, for when they click 
addTaskButton.addEventListener('click',onAddTaskClicked)