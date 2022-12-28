let newTaskModal= () => {
  let newTaskModalContainer = document.createElement("div");
  newTaskModalContainer.classList.add("task-modal-container");
  let head = document.createElement("div")
  let heading = document.createElement("h1");
  heading.innerText = "New Task";
  head.appendChild(heading);
  let formDiv = document.createElement("div");
  let form = document.createElement("form");
  form.classList.add("new-task-form")

  let titleDiv = document.createElement("div");
  titleDiv.id = "title-div"
  let title = document.createElement("input")
  title.setAttribute("type", "text");
  title.setAttribute("name", "taskName")
  title.setAttribute("placeholder", "Title")
  title.setAttribute("required","");
  title.setAttribute("maxlength", "50");
  title.id = "new-task-title";
  let description = document.createElement("textarea");
  description.setAttribute("type", "text");
  description.setAttribute("name", "Description")
  description.setAttribute("placeholder", "Description")
  // description.setAttribute("cols", "20")
  // description.setAttribute("rows","3")
  title.setAttribute("minlength", "1");
  description.id = "new-task-description";
  titleDiv.appendChild(title);
  titleDiv.appendChild(description);

  let dueDateDiv = document.createElement("div");
  dueDateDiv.id = "due-date-div"
  let dueDate = document.createElement("input")
  dueDate.setAttribute("type", "date")
  dueDate.setAttribute("name", "dueDate")
  dueDate.setAttribute("required", "");
  dueDate.id = "task-due-date";
  let doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.setAttribute("type", "submit");
  doneButton.id = "task-done-btn"
  dueDateDiv.appendChild(dueDate);
  dueDateDiv.appendChild(doneButton);
  form.appendChild(titleDiv);
  form.appendChild(dueDateDiv);

  newTaskModalContainer.appendChild(head);
  newTaskModalContainer.appendChild(form);

  form.addEventListener("submit", ()=>{
    
  })

  return newTaskModalContainer;

}

export default newTaskModal;