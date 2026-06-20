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

const completeTodo = (targetIndex) => {
  todos[targetIndex].completed = true;
};

const deleteTodos = (targetIndex) => {
  todos.splice(targetIndex, 1);
};

const displayTodo = () => {
  console.clear();
  displayList.innerHTML = "";

  todos.forEach((element, index, array) => {
    index = index + 1;
    const status = element.completed;

    let newStatus;
    if (status === false) {
      newStatus = "- Not Completed";
    } else if (status === true) {
      newStatus = "- Completed";
    }
    const newline = document.createElement("p");
    console.log(`${index + "."}`, element.title, newStatus);
    newline.innerHTML = `${index + "."} ${element.title} ${newStatus}`;
    displayList.appendChild(newline);
  });
};
