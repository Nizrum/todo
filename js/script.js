const input = document.querySelector(".task-input__input");
const addButton = document.querySelector(".task-input__button");
const tasksList = document.querySelector(".tasks__list");

let tasks = [];

addButton.addEventListener("click", function () {
  if (input.value != "") {
    tasks.push(
      `<li class="tasks__task task"><span class="task__text">${input.value}</span><button class="task__button"><img src="/images/check.svg" alt="X"></button></li>`
    );
    render();
  }
});

function render() {
  tasksList.innerHTML = "";
  for (let t of tasks) {
    tasksList.innerHTML += t;
  }
}