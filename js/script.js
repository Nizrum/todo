const input = document.querySelector(".task-input__input");
const addButton = document.querySelector(".task-input__button");
const tasksList = document.querySelector(".tasks__list");

addButton.addEventListener("click", function () {
  if (input.value != '') {
    tasksList.insertAdjacentHTML(
      "beforeend", `<li class="tasks__task task"><span class="task__text">${input.value}</span><button class="task__button"><img src="/images/check.svg" alt="X"></button></li>`
    );
    input.value = '';
    document.querySelector(`.task:last-child .task__button`).addEventListener("click", function () {
        this.closest(".task").remove();
    });
  }
});