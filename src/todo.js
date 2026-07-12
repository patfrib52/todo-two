import { createProject, createTodo } from "./logic.js";
import { addProject, projects } from "./logic.js";
const displayProjects = document.getElementById("display-projects");
const userProject = document.getElementById("userProjectInput");
const activeProject = document.querySelector("#display-active-projects");
const addProjectBtn = document.getElementById("addProjectBtn");
const todoInput = document.createElement("input");
const listTodo = document.querySelector("#display-todo");

const displayTodoInput = document.querySelector("#display-todo-input");
const todoBtn = document.createElement("button");
todoBtn.textContent = "Add Todo";
let activeProjectIndex = null;

addProjectBtn.addEventListener("click", () => {
  const projectName = userProject.value;
  const validText =
    typeof projectName === "string" && projectName.trim().length > 0;
  if (validText === false) {
    console.log("input can't be empty");
    return;
  } else {
    addProject(createProject(projectName));
  }
  userProject.value = "";
  displayProject();
});

todoBtn.addEventListener("click", () => {
  const newTodoInput = todoInput.value;
  addTodos(activeProjectIndex, newTodoInput, "", "", "");
  todoInput.value = "";
  console.log(projects);
});

const addTodos = (activeProject, title, description, dueDate, priority) => {
  projects[activeProject].todo.push(
    createTodo(title, description, dueDate, priority),
  );

  displayActiveProject();
};

const todoStatus = (targetIndex, state) => {
  projects[activeProjectIndex].todo[targetIndex].completed = state;
  displayActiveProject();
};

const deleteTodo = (targetIndex) => {
  projects[activeProjectIndex].todo.splice(targetIndex, 1);
  displayActiveProject();
};

const displayProject = () => {
  displayProjects.textContent = "";
  console.clear();
  projects.forEach((element, index) => {
    const projectBtn = document.createElement("button");
    projectBtn.textContent = element.name;
    projectBtn.id = index;
    projectBtn.classList.add = "project-btn";
    displayProjects.append(index + 1, projectBtn);
    projectBtn.addEventListener("click", () => {
      activeProject.textContent = element.name;
      activeProjectIndex = index;
      displayTodoInput.append(todoInput, todoBtn);
      displayActiveProject();
    });
  });
};

const displayActiveProject = () => {
  listTodo.textContent = "";
  let target = projects[activeProjectIndex].todo;
  if (target.length === 0) {
    listTodo.append("No Todo Yet");
  } else {
    target.forEach((todos, index) => {
      const deleteBtn = document.createElement("button");
      const container = document.createElement("div");
      deleteBtn.textContent = "Delete todo";

      deleteBtn.id = index;
      deleteBtn.addEventListener("click", () => {
        deleteTodo(index);
      });
      const completeCheckbox = document.createElement("input");
      const para = document.createElement("p");
      para.textContent = todos.title;
      completeCheckbox.type = "checkbox";
      completeCheckbox.checked = todos.completed;
      completeCheckbox.addEventListener("click", () => {
        todoStatus(index, completeCheckbox.checked);
        console.log(completeCheckbox.checked);
      });

      if (todos.completed === true) {
        para.classList.add("completed");
      } else {
        para.classList.remove("completed");
      }

      listTodo.append(container);
      container.append(completeCheckbox, para, deleteBtn);
    });
  }
};
