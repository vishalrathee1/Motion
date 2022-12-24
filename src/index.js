import header from "./header";
import './style.css';

let body = document.querySelector("body")


body.appendChild(header());
let content = document.querySelector("#content");

// on clicking dropDown a side nav must open containing all the project names and the content od dropdown button must change to a close sign
let dropDown = document.getElementById("drop-down");

let sideNav = document.createElement("nav");
dropDown.addEventListener("click", () =>{
  dropDown.innerText = "X"
  // make sideNAv visible
  
} )


// if (!document.querySelector("header")){
//   let headerr = header();
//   document
// }