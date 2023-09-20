const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function addTodo() {
  const inputText = taskInput.value;

  if (inputText === "") {
    alert("Please enter a valid text");
  }

  const li = document.createElement("li");
  li.innerHTML = `
  <input type="checkbox" class="check" />
  <span>${inputText}</span>
  <button class="delete_button">Delete</button>
  `;
  taskList.appendChild(li);
  taskInput.value = "";

  const deleteButton = li.querySelector(".delete_button");
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  const checkBox = li.querySelector(".check");
  const span = li.querySelector("span");
  checkBox.addEventListener("change", () => {
    if(checkBox.checked){
      span.style.textDecoration = "line-through";
      span.style.color = "grey";
    }else{
      span.style.textDecoration = "none"
    }
  })

}
taskInput.addEventListener("keypress", (event) => {
  if(event.key === "Enter"){
    addTodo();
  }
})

addTaskButton.addEventListener("click", addTodo);
