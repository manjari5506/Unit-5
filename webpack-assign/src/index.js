import {sum,mult} from "./calc";
import "./index.css";
import img from './logo.png';

console.log(sum(4,6));
console.log(mult(5,5));

const root = document.getElementById("root");

var logo = document.createElement("img");
logo.src="https://media.istockphoto.com/vectors/abstract-letter-m-logotype-modern-logotype-idea-sign-universal-emblem-vector-id1130887938?k=20&m=1130887938&s=612x612&w=0&h=egUYptGyeFvIGY_Ri2SeJt5YwjV40GD9YLqXl5F-DMk="
logo.setAttribute("class","logo");
var h1 = document.createElement("h1");
h1.innerText = "Take a Note";
//h1.classList.add("redtext");
h1.setAttribute("class","red");

root.appendChild(logo);
root.appendChild(h1);


//style-loader css-loader