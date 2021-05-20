const form = document.querySelector("form");
const ul = document.querySelector("#todos");
let allTodos = [];

let idx = 0; //index to match lis with data-index attribute

form.new.focus(); //focus on input after load

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let todo = e.target.new.value.trim().toLowerCase(); //get entered todo
  e.target.new.value = "";

  if (todo.length > 0) {
    //Prevent adding emty todos

    //Prevent adding existing todos
    isAlready(allTodos, todo, false);
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("cross")) {
    //delete todo from UI after clicking on X
    let idx = Number(e.target.parentElement.getAttribute("data-index"));
    deleteTodo(e.target.parentElement);
    //remove todo from allTodos
    removeFromAll(idx);
  } else {
    //toggle completed class and get the corresponding completed li
    let li = addCompleteClass(e.target);
    let todo = li.textContent.trim().toLowerCase();
    if (li.classList.contains("completed")) {
      //change isComplete to true in allTodos array
      allTodos.forEach((obj) => {
        if (obj.task === todo) obj.isComplete = true;
      });
    } else {
      //change isComplete to false in allTodos array
      allTodos.forEach((obj) => {
        if (obj.task === todo) obj.isComplete = false;
      });
    }
  }
});

function addTodo(todo, completed = "", i = 0) {
  let html = `
    <li data-index=${i} class="${completed}">
        <div class="wrapper-check" data-index=${i}>
            <div class="check" data-index=${i}>
              <div class="bg-check" data-index=${i}> </div>
            </div>
            <h3 data-index=${i}>${todo}</h3>
        </div>
        <img src="./images/icon-cross.svg" alt="cross" class="cross"/>
    </li>
    `;

  ul.innerHTML += html;
}

function deleteTodo(todo) {
  todo.remove();
  idx--;
}

//remove todo from allTodos
function removeFromAll(idx) {
  allTodos = allTodos.filter((value) => {
    return value.id !== idx;
  });
  idx--;
}

//check if an object is alrady in array
function isAlready(arr, todo, comp) {
  let isIn =
    arr.filter((obj) => {
      return obj.task === todo && obj.isComplete === comp;
    }).length == 0;
  if (isIn) {
    addTodo(todo, "", idx);
    arr.push({ id: idx, task: todo, isComplete: comp });
    idx++;
  }
}

function addCompleteClass(target) {
  if (target.tagName === "LI") {
    target.classList.toggle("completed");
    return target;
  } else if (target.classList.contains("wrapper-check")) {
    target.parentElement.classList.toggle("completed");
    return target.parentElement;
  } else if (target.classList.contains("check")) {
    target.parentElement.parentElement.classList.toggle("completed");
    return target.parentElement.parentElement;
  } else if (target.classList.contains("bg-check")) {
    target.parentElement.parentElement.parentElement.classList.toggle(
      "completed"
    );
    return target.parentElement.parentElement.parentElement;
  } else if (target.tagName === "H3") {
    target.parentElement.parentElement.classList.toggle("completed");
    return target.parentElement.parentElement;
  }
}
