import header from "./header";
import sidenav from "./sidenav";
import './style.css';

let content = document.querySelector("#content");
content.appendChild(header());
content.appendChild(sidenav());
