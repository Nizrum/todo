const input = document.querySelector(".task-input__input");
const addButton = document.querySelector(".task-input__button");
const tasksList = document.querySelector(".tasks__list");

let tasks = localStorage.getItem("tasks") ? localStorage.getItem("tasks").split(",") : [];

for (let t of tasks) {
    tasksList.insertAdjacentHTML(
      "beforeend",
      `<li class="tasks__task task"><span class="task__text">${t}</span><button class="task__button"><img src="/images/check.svg" alt="X"></button></li>`
    );
}

function addTask(data) {
  if (data != '') {
    tasksList.insertAdjacentHTML(
      "beforeend", `<li class="tasks__task task"><span class="task__text">${data}</span><button class="task__button"><img src="/images/check.svg" alt="X"></button></li>`
    );
    tasks.push(data);
    localStorage.setItem('tasks', tasks);
  }
}

tasksList.addEventListener('click', function (event) {
    let li = event.target.closest('.task');
    if (li && event.target.closest('button')) {
        tasks.splice(tasks.indexOf(li.textContent), 1);
        localStorage.setItem("tasks", tasks);
        li.remove();
    }
});

addButton.addEventListener("click", function () {
    addTask(input.value);
    input.value = "";
});

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        addTask(input.value);
        input.value = "";
    }
});