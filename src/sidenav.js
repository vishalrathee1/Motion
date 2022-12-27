let sidenav = () =>{
  let body = document.querySelector("body")
  let content = document.querySelector("#content");
  let sideNav = document.createElement("nav");
  sideNav.classList.add("side-nav");
  let newProject = document.createElement("button");
  newProject.innerText = "+ New Project";
  newProject.id = "new-project";
  sideNav.appendChild(newProject);
  let projects = []


  //modal for creating new project
  let newProjectModal = document.createElement("div");
  newProjectModal.classList.add("new-project-modal");
  let projectModalCloseBtn = document.createElement("button")
  projectModalCloseBtn.innerText = "X"
  projectModalCloseBtn.id = "project-modal-close-btn";
  let form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "");
  form.id = "new-project-from";

  //new project name
  let newProjectName = document.createElement("input");
  newProjectName.setAttribute("type", "text");
  newProjectName.setAttribute("name", "ProjectName")
  newProjectName.setAttribute("placeholder", "Project Name")
  newProjectName.setAttribute("required", "");
  newProjectName.id = "new-project-name";
  newProjectName.setAttribute("maxlength", "18")

  //submit button for project
  let submitButton = document.createElement("button");
  submitButton.innerText = "Create Project";
  submitButton.setAttribute("type", "submit");
  submitButton.id = "new-project-submit-button";

  //appending form, input, submit button in modal
  newProjectModal.appendChild(projectModalCloseBtn);
  form.appendChild(newProjectName);
  form.appendChild(submitButton);
  newProjectModal.appendChild(form);
  content.appendChild(newProjectModal)

  //event listeners
  newProject.addEventListener("click", () =>{
  // open a modal with form to type name of the project
  // and add the project to projects array
    newProjectModal.style.display = "block";
  })

  // add onClick Away event to newprojectmodal
  projectModalCloseBtn.addEventListener("click", () =>{
    newProjectModal.style.display = "none";
  })


  //rendering all items of projects array in sidenav 
  // after clicking submit in the form it will render the new element
  form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let formValue = event.target.elements
    // console.log(formValue.ProjectName.value)
    projects.push(formValue.ProjectName.value);
    addProjectToNav(formValue.ProjectName.value);
    form.reset();
    newProjectModal.style.display = "none";

  })

  //rendering projects in nav
  function addProjectToNav(project){
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div")

    // 3 vertical dots button for edit name or delete project
    let projectOptions = document.createElement("button");
    projectOptions.id = "edit-project";
    projectOptions.innerText = "⋮";

    let projectName = document.createElement("p")
    projectName.innerText = project

    let subtask = document.createElement("button")
    subtask.innerText = "↓"

    projectDiv.appendChild(projectOptions);
    projectDiv.appendChild(projectName);
    projectDiv.appendChild(subtask);
    sideNav.appendChild(projectDiv); 
  }


  return sideNav;
}

export default sidenav;