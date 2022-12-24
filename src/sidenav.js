let sidenav = () =>{
  let sideNav = document.createElement("nav");
  sideNav.classList.add("side-nav");
  let newProject = document.createElement("button");
  newProject.innerText = "+ New Project";
  newProject.id = "new-project";
  let projects = []


  //modal for creating new project
  let newProjectModal = document.createElement("div");
  newProjectModal.classList.add("new-project-modal");
  let form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "");

  //new project name
  let newProjectName = document.createElement("input");
  newProjectName.setAttribute("type", "text");
  newProjectName.setAttribute("name", "ProjectName")
  newProjectName.setAttribute("placeholder", "Project Name")
  newProjectName.setAttribute("required", "");

  //submit button for project
  let submitButton = document.createElement("button");
  submitButton.innerText = "Create Project";
  submitButton.setAttribute("type", "submit");

  //appending form, input, submit button in modal
  form.appendChild(newProjectName);
  form.appendChild(submitButton);
  newProjectModal.appendChild(form);

  newProject.addEventListener("click", () =>{
    // open a modal with form to type name of the project
    // and add the project to projects array


  })

  //rendering all items of projects array in sidenav 
  // after clicking submit in the form it will render the new element
  


}

export default sidenav;