const userInput = document.getElementById("userTask");
const displayList = document.getElementById("displayGroup");

const todos = [];

const addBtn = document.getElementById("btnAdd");
addBtn.addEventListener("click", (event) => {
  const task = userInput.value;

  const validText = typeof task === "string" && task.trim().length > 0;

  if (validText === false) {
    console.log("input can't be empty");
    return;
  } else {
    const todo = createTodos(task);
    addTodos(todo);
    displayTodo();
  }
  userInput.value = "";
});

const createTodos = (title) => {
  return {
    title,
    completed: false,
  };
};

const addTodos = (todo) => {
  todos.push(todo);
};

const todoStatus = (targetIndex, state) => {
  todos[targetIndex].completed = state;
  displayTodo();
};

const deleteTodo = (targetIndex) => {
  todos.splice(targetIndex, 1);
  displayTodo();
};

const displayTodo = () => {
  console.clear();
  displayList.innerHTML = "";

  todos.forEach((element, index) => {
    const container = document.createElement("div");
    const newTask = document.createElement("p");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.id = index;
    deleteBtn.addEventListener("click", () => {
      deleteTodo(index);
    });

    const checkBox = document.createElement("input");
    checkBox.checked = element.completed;
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", (event) => {
      const target = event.target;
      const state = target.checked ? true : false;
      todoStatus(index, state);
    });

    if (element.completed) {
      newTask.classList.add("completed");
    }
    console.log(`${index + 1 + "."}`, element.title);
    newTask.textContent = `${index + 1 + "."} ${element.title}`;
    displayList.appendChild(container);
    container.append(newTask, checkBox, deleteBtn);
  });
};
