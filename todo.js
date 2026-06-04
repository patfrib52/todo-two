const todos = [];

const nextTask = (task) => {
  const tasks = task;
  const todo = createTodos(task);
  addTodos(todo);
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

nextTask("apple");
nextTask("banana");
nextTask("pear");
displayTodo(todos);
