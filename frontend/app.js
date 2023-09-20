// const input_todo = document.getElementById("input_todo");
// const addTodo = document.getElementById("button");
// const todoList = document.getElementById("inputList");

// function addTodos() {
//   const textInput = input_todo.value;

//   if (textInput === "") {
//     alert("Please enter a task...");
//   }
//   const list = document.createElement("li");

//   list.innerHTML = `
//    <input type="checkbox" class="check" />
//   <span>${textInput}</span>
//   <button id="delete_button">Delete</button>
//    `;
//   todoList.appendChild(list);
//   input_todo.value = "";

//   const deleteButton = list.querySelector("#delete_button");
//   deleteButton.addEventListener("click", () => {
//     list.remove();
//   });

//   const checkbox = list.querySelector(".check");
//   checkbox.addEventListener("change", () => {
//     const span = list.querySelector("span");
//     if (checkbox.checked) {
//       span.style.textDecoration = "line-through";
//       span.style.color = "grey";
//     } else {
//       span.style.textDecoration = "none";
//       span.style.color = "black";
//     }
//   });
// }

// addTodo.addEventListener("click", addTodos);

import { createBoxItem,createTextItem,createButtonItem } from "./functions/funtion.js";

const main = document.getElementById("main");

const box_1 = createBoxItem("red")
const box_2 = createBoxItem("blue")
const box_3 = createBoxItem("green");

createButtonItem("click_1",box_1 );
createButtonItem("click_2",box_2 );
createButtonItem("click_3",box_3 );

createTextItem("Box_1", "green", box_1);
createTextItem("Box_2", "yellow", box_2);
createTextItem("Box_3", "red", box_3);

main.appendChild(box_1);
main.appendChild(box_2);
main.appendChild(box_3);
