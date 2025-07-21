
const addButton = document.getElementById('addButton');
const list = document.getElementById('list');


function saveInput() {
  // Add Task
  let inputValue = document.getElementById('taskInput').value.trim();
  if (inputValue === '') {
    alert('Please add tasks to the input window!');
    return
  }

  // Creating Li Element
  let li = document.createElement('li');
  li.innerHTML = inputValue;
  list.appendChild(li);

  // Remove Task Button
  const removeButton = document.createElement('button');
  removeButton.textContent = "Delete";
  li.appendChild(removeButton);
  removeButton.addEventListener('click', () => {
    li.remove();
    saveTasks();
  })

  saveTasks();


}


// Save to local storage

function saveTasks () {
  const tasks = [];
  list.querySelectorAll('li').forEach(li => {
    let taskText = li.firstChild.textContent;
    tasks.push(taskText);
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Load from local storage

function loadTasks () {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  storedTasks.forEach(task => {
    taskInput.value = task;
    saveInput();
  })
}


// Initialize
addButton.addEventListener('click', saveInput);
window.addEventListener('DOMContentLoaded', loadTasks);
