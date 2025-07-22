
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

  // Create CheckBox
  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  li.appendChild(checkBox)

  checkBox.addEventListener('click', function cross() {
    if (checkBox.checked) {
      li.style.textDecoration = "line-through"
    } else {
      li.style.textDecoration = "none"

    }
  })

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


// Remove All Button
const removeAllButton = document.createElement('button');
removeAllButton.textContent = "Delete All";
document.querySelector('.todolist-container').appendChild(removeAllButton);
removeAllButton.addEventListener('click', () => {
  list.querySelectorAll('li').forEach(li => {
    li.remove();
    saveTasks()
  });
})




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
