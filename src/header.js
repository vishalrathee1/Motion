import sidenav from "./sidenav";

let header = () => {
  let content = document.querySelector("#content")
  let header = document.createElement("header");
  header.classList.add("header")
  let dropdown = document.createElement("button")
  dropdown.innerText = "DropDown"  //later use the icon
  dropdown.id = "drop-down";
  let appName = document.createElement("h1");
  appName.innerText = "Motion"
  appName.id = "app-name";
  let projectName = document.createElement("h3");
  projectName.innerText = "Project Name";
  projectName.id = "project-name"
  let newTask = document.createElement("button");
  newTask.innerText = " + New Task"; //later add on the icon instead of +
  newTask.id = "new-task"
  header.appendChild(dropdown);
  header.appendChild(appName);
  header.appendChild(projectName);
  header.appendChild(newTask);

  // on clicking dropDown a side nav must open containing all the project names and the content od dropdown button must change to a close sign
  // and on clicking again on that close sign, hide the sidenav and if the project modal is open too then close it too
  dropdown.addEventListener("click", (event) =>{
    if(event.target.innerText === "DropDown"){
      dropdown.innerText = "X"
      content.appendChild(sidenav());
    } 
    else{
      dropdown.innerText = "DropDown"
      let sideNav = document.querySelector(".side-nav");
      sideNav.remove()
      if (document.querySelector(".new-project-modal")){
        document.querySelector(".new-project-modal").remove()
      }
    }
  } )


  return header;
}

export default header