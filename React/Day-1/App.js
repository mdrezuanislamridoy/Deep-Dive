import React from "react";
import ReactDOM from "react-dom/client";

// const h1 = document.createElement("h1");
// h1.innerText = "Hello World";
// document.getElementById("root").appendChild(h1);

// const h1 = React.createElement(
//   "h1",
//   { className: "heading" },
//   "Hello Tutorial"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);

// example Structure

/*
    <div id="container">
        <h1>Hello h1</h1>
        <h2>Hello h2</h2>
    </div>
 */

const containerDiv = React.createElement("div", { id: "container", key: "2" }, [
  React.createElement("h1", { key: "1" }, "Hello h1"),
  React.createElement("h2", { key: "2" }, "Hello h2"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(containerDiv);
