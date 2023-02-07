const addBtn = document.querySelector(".btn");
const doneBtn = document.querySelector(".done-icon");
const deleteBtn = document.querySelector(".delete-icon");
const taskContent = document.querySelector("#task-content");
const list = document.querySelector(".list-group");
// const taskItem = document.querySelector(".task-item");
class Task {
  constructor(id, content, isDone) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
  }
}
let tasksList = [];
_getList();
if (tasksList.length > 0) {
  tasksList.forEach((t) => {
    createTask(t);
  });
}
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  id = (Date.now() + "").slice(-10);
  const task = new Task(id, taskContent.value, false);
  createTask(task);
  tasksList.push(task);
  _addToLocalStorage();
  taskContent.value = "";
});
list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-icon")) {
    deleteTask(e);
    e.target.parentElement.parentElement.parentElement.remove();
  }
  if (e.target.classList.contains("done-icon")) {
    _markTaskAsDone(e);
  }
});
function createTask(task) {
  const html = `
          <li class="list-group-item " style="max-height: fit-content; width:200px" >
          <div class="task-item " data-id =${task.id}>
            <p class= "task-title">${task.content}</p>
            <div class="icons">
              <span class="task-icon done-icon">✔️</span>
              <span class="task-icon delete-icon">❌</span>
        </div>
      </div>
    </li>
      `;
  list.insertAdjacentHTML("afterbegin", html);
  let item = document.querySelector(".task-title");
  let card = item.parentElement.parentElement;
  card.style.backgroundColor = getColor();
  card.style.opacity = 0.8;

  if (task.isDone) {
    item.classList.add("done");
  }
  return html;
}
function _markTaskAsDone(e) {
  let task = e.target.parentElement.parentElement.querySelector(".task-title");
  task.classList.add("done");
  e.target.style.pointerEvents = "none";
  tasksList = JSON.parse(localStorage.getItem("tasks"));
  let editTaskIndex = tasksList.findIndex(
    (l) => l.id === e.target.parentElement.parentElement.dataset.id
  );
  tasksList[editTaskIndex].isDone = true;
  _addToLocalStorage();
}
function _addToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasksList));
}
function _getList() {
  return (tasksList = JSON.parse(localStorage.getItem("tasks")));
}

function deleteTask(e) {
  const taskId = e.target.parentElement.parentElement.dataset.id;
  tasksList = _getList().filter((t) => t.id != taskId);
  _addToLocalStorage();
}
function getColor() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (85 + 10 * Math.random()) +
    "%)"
  );
}
