const input_todo = document.getElementById("input_todo");
const addTodo = document.getElementById("button");
const todoList = document.getElementById("inputList");

function addTodos() {
  const textInput = input_todo.value;

  if (textInput === "") {
    alert("Please enter a task...");
  }
  const list = document.createElement("li");

  list.innerHTML = `
   <input type="checkbox" class="check" />
  <span>${textInput}</span>
  <button id="delete_button">Delete</button>
   `;
  todoList.appendChild(list);
  input_todo.value = "";

  const deleteButton = list.querySelector("#delete_button");
  deleteButton.addEventListener("click", () => {
    list.remove();
  });

  const checkbox = list.querySelector(".check");
  checkbox.addEventListener("change", () => {
    const span = list.querySelector("span");
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
      span.style.color = "grey";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "black";
    }
  });
}

addTodo.addEventListener("click", addTodos);
