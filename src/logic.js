export const createProject = (name) => {
  return {
    name: name,
    todo: [],
  };
};

export const createTodo = (title, description, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority,
    completed: false,
  };
};

export const addProject = (project) => {
  projects.push(project);
};

const defaultProject = createProject("Default");

defaultProject.todo.push(createTodo("Watch Tv", "", "", ""));

export const projects = [defaultProject]; /* project array */

export const addTodos = (
  activeProject,
  title,
  description,
  dueDate,
  priority,
) => {
  projects[activeProject].todo.push(
    createTodo(title, description, dueDate, priority),
  );
};
