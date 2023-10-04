// react is the package inside node-modules
import React from "react"
import ReactDOM from "react-dom/client";
/**
 * <div id=parent>
 *      <div id=child>
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 * 
 */


// parent is an object
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am an h1 tag"),React.createElement("h2",{},"I am h2 tag")]))
const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!")
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(parent)

// render converts object into html
root.render(parent)