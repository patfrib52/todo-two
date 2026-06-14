const todos = [];

const nextTask = (task) => {
  const validText = typeof task === "string" && task.trim().length > 0;

  if (validText === false) {
    console.log("input can't be empty");
    return;
  } else {
    const todo = createTodos(task);
    addTodos(todo);
  }
};

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
  todos.forEach((element, index, array) => {
    index = index + 1;
    const status = element.completed;

    let newStatus;
    if (status === false) {
      newStatus = "- Not Completed";
    } else if (status === true) {
      newStatus = "- Completed";
    }
    console.log(`${index + "."}`, element.title, newStatus);
  });
};

// nextTask("   ");

nextTask("learn javascript");
nextTask("Build Todo App");
nextTask("Build Todo1 App");
nextTask("Build Todo2 App");
nextTask("Build Todo3 App");
completeTodo(0);
completeTodo(1);
deleteTodos(1);
console.log(todos);
console.log(todos.length);
displayTodo();
