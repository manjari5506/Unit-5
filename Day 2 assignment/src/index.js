
import React from "react";
import  ReactDOM  from "react-dom";

import "./index.css";

ReactDOM.render(
    <div className="main">
        <h1 className="redtext">Hello React!!</h1>
        <table border="3">
            <tr>
                <td>1</td>
                <td>Name</td>
            </tr>
        </table>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPwveH-zInaVDeM8cEWiE-qSjLZV7IiIZCQ&usqp=CAU"
        height="400px"
        width="300px" id="logo"></img>
    </div>,
    document.getElementById("root")
);
