const displayProjects = document.getElementById("display-projects");
const userProject = document.getElementById("userProjectInput");
const activeProject = document.querySelector("#display-active-projects");
const addProjectBtn = document.getElementById("addProjectBtn");
const listTodo = document.querySelector("#display-todo");
const todoInput = document.createElement("input");
const displayTodoInput = document.querySelector("#display-todo-input");
const todoBtn = document.createElement("button");
todoBtn.textContent = "Add Todo";
let activeProjectIndex = null;

const projects = [
  {
    name: "Default",
    todo: [
      {
        title: ["Watch Tv", " Play Games"],
      },
    ],
  },
]; /* project array */

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
  addTodos(activeProjectIndex, newTodoInput);
  todoInput.value = "";
});

const createProject = (name) => {
  return {
    name,
    todo: [],
  };
};

const addProject = (project) => {
  projects.push(project);
};

const addTodos = (activeProject, todos) => {
  projects[activeProject].todo.push({ title: todos });
  displayActiveProject();
};
const todoStatus = (targetIndex, state) => {
  projects[targetIndex].completed = state;
  displayProject(projects[activeProjectIndex].todo);
};

const deleteTodo = (targetIndex) => {
  projects.todo.splice(targetIndex, 1);
  displayProject();
};

const displayProject = () => {
  displayProjects.textContent = "";
  console.clear();
  projects.forEach((element, index) => {
    const projectBtn = document.createElement("button");
    projectBtn.textContent = element.name;
    projectBtn.id = index;
    projectBtn.classList = "project-btn";
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
    target.forEach((todos) => {
      listTodo.append(todos.title);
    });
  }
};
