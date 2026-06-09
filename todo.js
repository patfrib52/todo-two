const todos = [];

const nextTask = (task) => {
  const validText = typeof task === "string" && task.trim().length > 0;
  console.log(validText);
  if (validText === false) {
    console.log("input can't be empty");
    return;
  } else {
    const todo = createTodos(task);
    addTodos(todo);
    displayTodo(todos);
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

const displayTodo = (todos) => {
  console.log(todos);
};

nextTask("   ");
nextTask("learn javascript");

