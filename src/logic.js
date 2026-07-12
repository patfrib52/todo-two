import { activeProjectIndex } from "./todo.js";

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

export const deleteTodo = (targetIndex) => {
  projects[activeProjectIndex].todo.splice(targetIndex, 1);
};

export const todoStatus = (targetIndex, state) => {
  projects[activeProjectIndex].todo[targetIndex].completed = state;
};
